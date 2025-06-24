// ==UserScript==
// @name         Roll20 Fallout Translator
// @namespace    https://github.com/JM1k1/roll20-fallout-translator
// @version      1.0.0
// @description  Русификатор Fallout Character Sheet для Roll20
// @author       Yuliy Mitryashkin
// @license      MIT
// @icon         https://jm1k1.github.io/roll20-fallout-translator/assets/icon.svg
// @homepage     https://github.com/JM1k1/roll20-fallout-translator
// @supportURL   https://github.com/JM1k1/roll20-fallout-translator/issues
// @updateURL    https://jm1k1.github.io/roll20-fallout-translator/dist/roll20-fallout-translator.user.js
// @downloadURL  https://jm1k1.github.io/roll20-fallout-translator/dist/roll20-fallout-translator.user.js
// @match        https://app.roll20.net/editor/*
// @match        https://app.roll20.net/editor/character/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(() => {
  var i = {
    "- Dehydrated": "- Обезвожен",
    "- Exhausted": "- Истощен",
    "- Full": "- Сыт",
    "- Hungry": "- Голоден",
    "- Hydrated": "- Гидратирован",
    "- Peckish": "- Проголодался",
    "- Quenched": "- Напоен",
    "- Rested": "- Отдохнувший",
    "- Sated": "- Доволен",
    "- Starving": "- Голодает",
    "- Thirsty": "- Хочет Пить",
    "- Tired": "- Устал",
    "- Weary": "- Измотан",
    "- Well Rested": "- Хорошо Отдохнул",
    "+Add": "+Добавить",
    "Action Points": "Очки Действий",
    agility: "Ловкость",
    Agility: "Ловкость",
    AGILITY: "ЛОВКОСТЬ",
    Ammo: "Боепр.",
    "Ammo Type": "Тип Боеприпасов",
    "ARM 1 (9-11)": "РУКА 1 (9-11)",
    "ARM 2 (12-14)": "РУКА 2 (12-14)",
    "ARM 3 (15-17)": "РУКА 3 (15-17)",
    Armor: "Броня",
    "Armor Mods": "Модификации Брони",
    Athletics: "Атлетика",
    Attribute: "Атрибут",
    "Auto-roll Damage For Attacks:": "Автоматически бросать урон при атаках:",
    Barrel: "Ствол",
    Barter: "Торговля",
    "Benefit:": "Преимущество:",
    "Big Guns": "Бол. оружие",
    "Bio:": "Био:",
    "Bonus Carry Weight:": "Бонус Переносимого Веса:",
    "Bonus:": "Бонус:",
    "Books and Magazines": "Книги и Журналы",
    Caps: "Крышки",
    "Carry Weight:": "Перенос. Вес:",
    "Character Name": "Имя персонажа",
    charisma: "Харизма",
    Charisma: "Харизма",
    CHARISMA: "ХАРИЗМА",
    Chems: "Химикаты",
    "Click 'Add' to get started.": "Нажмите 'Добавить', чтобы начать.",
    Close: "Закрыть",
    Clothing: "Одежда",
    "Clothing Mods": "Модификации Одежды",
    Combat: "Бой",
    Core: "Основ",
    "Cost:": "Цена:",
    Cost: "Цена",
    Damage: "Урон",
    "Damage Type": "Тип Урона",
    "Damage:": "Урон:",
    Defense: "Защита",
    Dehydrated: "Обезвожен",
    Description: "Описание",
    "Description:": "Описание:",
    Diseases: "Заболевания",
    'Display "Roll Additional" Button On Damage Rolls:':
      'Показывать кнопку "Доп. бросок" при уроне:',
    "Display Assist Button On Skill Tests:":
      "Показывать кнопку помощи при проверках навыков:",
    Done: "Готово",
    "Duration:": "Продолжительность:",
    "Effects:": "Эффекты:",
    "En. DR": "Энер. СУ",
    Encumbrance: "Нагрузка",
    endurance: "Выносливость",
    Endurance: "Выносливость",
    ENDURANCE: "ВЫНОСЛИВОСТЬ",
    "Energy DR": "Энергетическое СУ",
    "Energy Weapon": "Энерг. оружие",
    "Energy Weapons": "Энерг. оружие",
    "Equip Location:": "Место Размещения:",
    "Equipped:": "Экипировано:",
    Exhausted: "Истощен",
    Explosives: "Взрывчатка",
    Fatigue: "Усталость",
    "Fire Rate": "Скорост.",
    "Fire Rate:": "Скорост:",
    "Food and Drink": "Еда и Напитки",
    Full: "Сыт",
    Gear: "Снаряга",
    Gold: "Золото",
    Grip: "Рукоятка",
    "HEAD (1-2)": "ГОЛОВА (1-2)",
    Headgear: "Головной Убор",
    "Health Points:": "Очки здоровья:",
    HP: "ОЗ",
    "HP Healed:": "ОЗ Восстановленно:",
    Hunger: "Голод",
    Hungry: "Голоден",
    Hydrated: "Гидратирован",
    "Imm.": "Имм.",
    Immune: "Иммунитет",
    Initiative: "Инициатива",
    Injuries: "Травмы",
    intelligence: "Интеллект",
    Intelligence: "Интеллект",
    INTELLIGENCE: "ИНТЕЛЛЕКТ",
    "Irradiated?": "Облученно?",
    "LEFT ARM (9-11)": "ЛЕВАЯ РУКА (9-11)",
    "LEFT LEG (15-17)": "ЛЕВАЯ НОГА (15-17)",
    Level: "Уровень",
    "Location:": "Расположение:",
    "Locations Covered:": "Покрываемые Части Тела:",
    Lockpick: "Взлом замков",
    luck: "Удача",
    Luck: "Удача",
    LUCK: "УДАЧА",
    "Luck Points": "Очки Удачи",
    Magazine: "Магазин",
    "MAIN BODY (3-8)": "КОРПУС (3-8)",
    "Max HP": "Макс. ОЗ",
    "Max Rank:": "Макс. Ранг:",
    Medicine: "Медицина",
    "Melee Bonus": "Бонус Ближнего Боя",
    "Melee Weapon": "Хол. оружие",
    "Melee Weapons": "Хол. оружие",
    "Modifier:": "Модификатор:",
    Modify: "Изменить",
    Mods: "Моды",
    Muzzle: "Дуло",
    Name: "Название",
    "New Money": "Новые Деньги",
    No: "Нет",
    "NPC Automation:": "Автоматизация НИП",
    "NPC Character": "Персонаж НИП",
    "NPC Creature": "Существо НИП",
    "OPTICS (1-2)": "ОПТИКА (1-2)",
    Origin: "Происхождение",
    Other: "Прочее",
    "Other Consumables": "Другие Расходные Материалы",
    "Other Effects:": "Другие Эффекты:",
    Outfit: "Наряд",
    "PC Automation:": "Автоматизация Персонажа:",
    Peckish: "Проголодался",
    "Penalty:": "Недостаток:",
    perception: "Восприятие",
    Perception: "Восприятие",
    PERCEPTION: "ВОСПРИЯТИЕ",
    Perks: "Перки",
    "Perks:": "Перки:",
    "Phys. DR": "Физ. СУ",
    "Physical DR": "Физическое СУ",
    Pilot: "Пилотирование",
    "Player Character": "Персонаж",
    Poison: "Яд",
    "Pre-War Money": "Довоенные Деньги",
    Qualities: "Качества",
    "Quantity:": "Количество:",
    Quenched: "Напоен",
    "Query For Additional Combat Dice On Damage Rolls:":
      "Запрашивать доп. боевые кости при уроне:",
    "Rad. DR": "Рад. СУ",
    "Radiation DR": "Радиационное СУ",
    "Range:": "Дальн.:",
    "Rank Increase Effect:": "Эффект повышения ранга:",
    "Rank:": "Ранг:",
    Rarity: "Редкость",
    "Rarity:": "Редкость:",
    Receiver: "Приемник",
    Repair: "Ремонт",
    Rested: "Отдохнувший",
    "RIGHT ARM (12-14)": "ПРАВАЯ РУКА (12-14)",
    "RIGHT LEG (18-20)": "ПРАВАЯ НОГА (18-20)",
    "Robot Mods": "Модификации Роботов",
    Sated: "Доволен",
    Science: "Наука",
    Scrip: "Скрип",
    "Select Clothing Type": "Выберите Тип Одежды",
    Settings: "Настройки",
    Sheet: "Лист",
    "Show Combat Dice Results On Damage Rolls:":
      "Показывать боевые кости при броске урона:",
    Sight: "Прицел",
    Skill: "Навык",
    Skills: "Навыки",
    Sleep: "Сон",
    "Small Guns": "Мал. оружие",
    Sneak: "Скрытность",
    "Special:": "Особенности:",
    Speech: "Красноречие",
    Starving: "Голодает",
    Stock: "Ложа",
    strength: "Сила",
    Strength: "Сила",
    STRENGTH: "СИЛА",
    Survival: "Выживание",
    Tag: "Тэг",
    Thirst: "Жажда",
    Thirsty: "Хочет Пить",
    Throwing: "Метание",
    "THRUSTER (18-20)": "ДВИГАТЕЛЬ (18-20)",
    Tired: "Устал",
    "TN:": "ЦН:",
    "Toggle Robot Sheet:": "Переключить Лист Робота:",
    "TORSO (3-8)": "ТОРС (3-8)",
    "Total Weight": "Общий Вес",
    Traits: "Черты",
    "Type:": "Тип:",
    Unarmed: "Ближ. бой",
    "Valid Locations:": "Допустимые Части Тела:",
    "Weapon Mods": "Модификации Оружия",
    "Weapon Type": "Тип оружия",
    Weapons: "Оружие",
    Weary: "Измотан",
    Weight: "Вес",
    "Weight:": "Вес:",
    "Well Rested": "Хорошо Отдохнул",
    "Whisper Rolls to GM": "Броски шёпотом ГМу",
    "Whisper Rolls to GM:": "Броски шёпотом ГМу:",
    "XP Earned": "Опыт",
    "XP to Next Level": "Опыта до Cлед. Ур.",
    Yes: "Да",
    "You are Healthy": "Вы Здоровы",
    "You are Uninjured": "Вы не Ранены",
    "You don't have any Ammo yet.": "У вас пока нет Боеприпасов.",
    "You don't have any Armor Mods yet.": "У вас пока нет Модов Брони.",
    "You don't have any Armor yet.": "У вас пока нет Брони.",
    "You don't have any Books yet.": "У вас пока нет Книг.",
    "You don't have any Chems yet.": "У вас пока нет Химикатов.",
    "You don't have any Clothing Mods yet.": "У вас пока нет Модов Одежды.",
    "You don't have any Clothing yet.": "У вас пока нет Одежды.",
    "You don't have any Food or Drinks yet.":
      "У вас пока нет Еды или Напитков.",
    "You don't have any Other Consumables yet.":
      "У вас пока нет Других Расходных Материалов.",
    "You don't have any Other Gear yet.": "У вас пока нет Прочее Снаряжение.",
    "You don't have any Perks yet.": "У вас пока нет Перков.",
    "You don't have any Robot Mods yet.": "У вас пока нет Модов Роботов.",
    "You don't have any Traits yet.": "У вас пока нет Черт.",
    "You don't have any Weapon Mods yet.": "У вас пока нет Модов Оружия.",
    "You don't have any Weapons yet.": "У вас пока нет Оружия.",
    Physical: "Физический",
    Energy: "Энергетический",
    Radiation: "Радиационный",
    "Physical/Radiation": "Физический/Радиационный",
    "Physical/Poison": "Физический/Ядовитый",
    "Radiation/Energy": "Радиационный/Энергетический",
    "Physical/Energy": "Физический/Энергетический",
    "Radiation/Poison": "Радиационный/Ядовитый",
    "Energy/Poison": "Энергетический/Ядовитый",
    physical: "Физический",
    energy: "Энергетический",
    radiation: "Радиационный",
    poison: "Ядовитый",
    "physical radiation": "Физический Радиационный",
    "physical poison": "Физический Ядовитый",
    "radiation energy": "Радиационный Энергетический",
    "radiation poison": "Радиационный Ядовитый",
    "physical energy": "Физический Энергетический",
    "energy poison": "Энергетический Ядовитый",
    Explosive: "Взрывчатка",
    PC: "ИП",
    NPC: "НИП",
  };
  var E = ["placeholder", "title"];
  function c(t) {
    if (!(t instanceof HTMLElement)) return;
    let e = t.innerText?.trim(),
      o = i[e];
    o && (t.innerText = o);
    for (let a of E) C(t, a);
  }
  function C(t, e) {
    if (!t.hasAttribute(e)) return;
    let o = t.getAttribute(e)?.trim(),
      a = i[o];
    a && t.setAttribute(e, a);
  }
  function h(t, e) {
    t.querySelectorAll(e).forEach((a) => {
      c(a);
    });
  }
  function d(
    t,
    e = { childList: !0, attributes: !0, characterData: !0, subtree: !0 }
  ) {
    let o = new MutationObserver((a) => {
      for (let n of a)
        n.type === "childList" &&
          n.addedNodes.forEach((r) => {
            c(r.parentElement);
          });
    });
    return o.observe(t, e), o;
  }
  function s(t) {
    let e = document.createElement("style");
    return (
      (e.rel = "stylesheet"),
      (e.textContent = t),
      document.head.appendChild(e),
      e
    );
  }
  function u(t) {
    let e = document.createElement("link");
    return (
      (e.rel = "stylesheet"), (e.href = t), document.head.appendChild(e), e
    );
  }
  function y(t, e, o) {
    for (let a of t)
      if (a instanceof CSSStyleRule) {
        let n = a.style.getPropertyValue("font-family");
        if (n && e.test(n)) {
          let r = a.style.getPropertyPriority("font-family"),
            R = n.replace(e, o);
          a.style.setProperty("font-family", R, r);
        }
      } else a.cssRules && y(a.cssRules, e, o);
  }
  function p(t, e, o) {
    let a = new RegExp(e, "gi");
    for (let n of t.styleSheets)
      try {
        y(n.cssRules, a, o);
      } catch {
        continue;
      }
  }
  var m = `.charsheet .sheet-pc .sheet-pc-gear-currency::after{content:"Валюта"}\r
.charsheet .sheet-pc .sheet-pc-gear-stats::after{content:"Нагрузка"}`;
  var g = `.charsheet .sheet-roll-bar label{margin-left:12px}\r
.charsheet .sheet-character-bar .sheet-header-field input{width:auto}\r
.charsheet .sheet-robot-sheet-control{width:auto}`;
  var A = [
      "[data-i18n]",
      "[data-i18n-placeholder]",
      "[data-i18n-title]",
      "label.sheet-special-color",
      "span.sheet-form-component",
      'button[class*="repcontrol"]',
      'span[name^="attr_pc_"]',
    ],
    P =
      "https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@1,700&display=swap",
    D = { childList: !0, attributes: !0, characterData: !0, subtree: !0 };
  u(P);
  p(document, "sriracha", "balsamiq sans");
  s(m);
  s(g);
  var l = document.querySelector(".charsheet");
  l && (h(l, A.join(", ")), d(l, D));
})();
