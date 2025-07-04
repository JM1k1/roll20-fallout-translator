import { initTranslation } from "./translator.js";
import { injectCSS } from "./css-utils.js";

import translationCSS from "inline:../assets/translation.css";
import layoutFixCSS from "inline:../assets/layout-fix.css";
import fontCSS from "inline:../assets/font.css";

/**
 * CSS-селекторы элементов, подлежащих локализации.
 * Добавляйте новые строки, не затрагивая остальной код.
 */
const TRANSLATION_SELECTORS = [
  "[data-i18n]",
  "[data-i18n-placeholder]",
  "[data-i18n-title]",
  "label.sheet-special-color",
  "div[class^=sheet-template] > label[class^=sheet-]",
  "span.sheet-form-component",
  'button[class*="repcontrol"]',
  'span[name^="attr_pc_"]',
].join(", ");

/**
 * CSS-селекторы корневых элементов, в пределах которых
 * будет отслеживать появление/изменение локализуемых элементов.
 */
const TRANSLATION_TARGET_SELECTORS = ["#textchat", ".charsheet"].join(", ");

/** Настройки для MutationObserver, используемого в initTranslation */
const OBSERVER_CONFIG = {
  childList: true,
  attributes: true,
  characterData: true,
  subtree: true,
};

[translationCSS, layoutFixCSS, fontCSS].forEach(injectCSS);

const translationTargets = document.querySelectorAll(
  TRANSLATION_TARGET_SELECTORS
);

translationTargets.forEach((target) => {
  initTranslation(target, TRANSLATION_SELECTORS, OBSERVER_CONFIG);
});
