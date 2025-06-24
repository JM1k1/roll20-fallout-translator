import { translateElements, observeDynamicTranslations } from "./translator.js";
import { patchFont, injectCSS } from "./css-utils.js";

import translationCSS from "inline:../assets/translation.css";
import layoutFixCSS from "inline:../assets/layout-fix.css";
import fontCSS from "inline:../assets/font.css";

const CSS_ASSETS = {
  translation: translationCSS,
  layoutFix: layoutFixCSS,
  font: fontCSS,
};

const TRANSLATION_SELECTORS = [
  "[data-i18n]",
  "[data-i18n-placeholder]",
  "[data-i18n-title]",
  "label.sheet-special-color",
  "span.sheet-form-component",
  'button[class*="repcontrol"]',
  'span[name^="attr_pc_"]',
];

const OBSERVER_CONFIG = {
  childList: true,
  attributes: true,
  characterData: true,
  subtree: true,
};

Object.values(CSS_ASSETS).forEach(injectCSS);

// patchFont(document, "sriracha", FONT.family);

const charsheet = document.querySelector(".charsheet");
if (charsheet) {
  translateElements(charsheet, TRANSLATION_SELECTORS.join(", "));
  observeDynamicTranslations(charsheet, OBSERVER_CONFIG);
}
