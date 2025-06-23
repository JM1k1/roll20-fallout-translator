import { translateElements, observeDynamicTranslations } from "./translator.js";
import { injectFont, patchFont, injectCSS } from "./css-utils.js";

import translationCSS from "inline:../assets/translation.css";
import charsheetFixCSS from "inline:../assets/layout-hotfix.css";

/** @constant {string[]} */
const TRANSLATION_SELECTORS = [
  "[data-i18n]",
  "[data-i18n-placeholder]",
  "[data-i18n-title]",
  "label.sheet-special-color",
  "span.sheet-form-component",
  'button[class*="repcontrol"]',
  'span[name^="attr_pc_"]',
];

/** @constant {string} */
const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@1,700&display=swap";

/** @constant {MutationObserverInit} */
const OBSERVER_CONFIG = {
  childList: true,
  attributes: true,
  characterData: true,
  subtree: true,
};

injectFont(FONT_URL);
patchFont(document, "sriracha", "balsamiq sans");

injectCSS(translationCSS);
injectCSS(charsheetFixCSS);

const charsheet = document.querySelector(".charsheet");
if (charsheet) {
  translateElements(charsheet, TRANSLATION_SELECTORS.join(", "));
  observeDynamicTranslations(charsheet, OBSERVER_CONFIG);
}
