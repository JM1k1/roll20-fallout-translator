import translations from "../assets/translation.json";

const TRANSLATABLE_ATTRIBUTES = ["placeholder", "title"];

/**
 * Переводит текст элемента
 * @param {HTMLElement} element — DOM-элемент для перевода.
 */
export function translateElement(element) {
  if (!(element instanceof HTMLElement)) return;

  const text = element.innerText;

  const key = text.replace(/^\P{L}+|\P{L}+$/gu, "").trim();

  const translatedText = translations[key];

  if (translatedText) {
    element.innerText = text.replace(key, translatedText);
  }

  for (const attribute of TRANSLATABLE_ATTRIBUTES) {
    translateElementAttribute(element, attribute);
  }
}

/**
 * Переовдит атрибут
 * @param {HTMLElement} element
 * @param {string} attribute — имя атрибута ('placeholder' или 'title')
 */
function translateElementAttribute(element, attribute) {
  if (!element.hasAttribute(attribute)) return;
  const attributeText = element.getAttribute(attribute)?.trim();
  const translatedText = translations[attributeText];
  if (translatedText) {
    element.setAttribute(attribute, translatedText);
  }
}

/**
 * Переводит все элементы внутри указанного контейнера.
 *
 * @param {HTMLElement} [container] — Контейнер, в котором происходит поиск.
 * @param {string[]} [selectors] - CSS-селекторы для поиска элементов.
 */
export function translateElements(container, selectors) {
  const elements = container.querySelectorAll(selectors);

  elements.forEach((element) => {
    translateElement(element);
  });
}

/**
 * Запускает непрерывный перевод динамически добавленных или изменённых узлов.
 * @param {ParentNode} [target=document.body]
 * @param {MutationObserverInit} [options]
 * @returns {MutationObserver}
 */
export function initTranslation(
  target,
  selectors,
  config = {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true,
  }
) {
  translateElements(target, selectors);

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      translateElements(target, selectors);
    }
  });

  observer.observe(target, config);
  return observer;
}
