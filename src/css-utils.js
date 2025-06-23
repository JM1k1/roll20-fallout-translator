/**
 * Внедряет CSS-текст через <style>.
 *
 * @param {string} cssText - Текст стилей.
 * @returns {HTMLStyleElement} Созданный элемент <style>.
 */
export function injectCSS(cssText) {
  const style = document.createElement("style");
  style.rel = "stylesheet";
  style.textContent = cssText;
  document.head.appendChild(style);
  return style;
}

/**
 * Загружает CSS-файл через <link>.
 *
 * @param {string} url - URL на CSS-ресурс.
 * @returns {HTMLLinkElement} Созданный элемент <link>.
 */
export function injectFont(fontUrl) {
  const LinkElement = document.createElement("link");
  LinkElement.rel = "stylesheet";
  LinkElement.href = fontUrl;
  document.head.appendChild(LinkElement);
  return LinkElement;
}

/**
 * Рекурсивно обновляет значения шрифта в списке CSS-правил.
 *
 * @param {CSSRuleList} rules - Список CSS-правил для обхода.
 * @param {RegExp} fromFontRegex - Регулярное выражение для поиска шрифта.
 * @param {string} toFont - Новое значение font-family.
 */
function patchFontInRules(rules, fromFontRegex, toFont) {
  for (const rule of rules) {
    if (rule instanceof CSSStyleRule) {
      const originalFont = rule.style.getPropertyValue("font-family");
      if (originalFont && fromFontRegex.test(originalFont)) {
        const priority = rule.style.getPropertyPriority("font-family");
        const updatedFont = originalFont.replace(fromFontRegex, toFont);
        rule.style.setProperty("font-family", updatedFont, priority);
      }
    } else if (rule.cssRules) {
      patchFontInRules(rule.cssRules, fromFontRegex, toFont);
    }
  }
}

/**
 * Заменяет все вхождения одного шрифта другим во всех стилях контейнера.
 *
 * @param {Document} container - Документ для обхода styleSheets.
 * @param {string} fromFont - Исходное имя шрифта.
 * @param {string} toFont - Новое имя шрифта.
 */
export function patchFont(container, fromFont, toFont) {
  const fromFontRegex = new RegExp(fromFont, "gi");
  for (const sheet of container.styleSheets) {
    try {
      patchFontInRules(sheet.cssRules, fromFontRegex, toFont);
    } catch {
      continue;
    }
  }
}
