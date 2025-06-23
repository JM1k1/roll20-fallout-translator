<h1 align='center'>
  <br>
  <img src='https://jm1k1.github.io/roll20-fallout-translator/assets/icon.png' width=500 weigth=500 alt='QRKot'>
</h1>
<h1 align='center'>
  <a href="https://jm1k1.github.io/roll20-fallout-translator/dist/roll20-fallout-translator.user.js" target="_blank" rel="noopener">
    Roll20 Fallout Translator
  </a>
</h1>

<p align='center'>
  <img src="https://img.shields.io/badge/JavaScript-0A0A0A?style=for-the-badge&logo=JavaScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tampermonkey-0A0A0A?style=for-the-badge&logo=tampermonkey&logoColor=white"/>
  <img src="https://img.shields.io/badge/Esbuild-0A0A0A?style=for-the-badge&logo=esbuild&logoColor=white"/>
  <img src="https://img.shields.io/badge/Roll20-0A0A0A?style=for-the-badge&logo=roll20&logoColor=white"/>
</p>

---

**Roll20 Fallout Translator** — это userscript, предназначенный для полной русификации официального листа персонажа *Fallout* на платформе **Roll20**.\
Скрипт переведёт как статичные, так и динамически создаваемые тексты, а также исправит стили, съехавшие после перевода.

## Содержание

- [Функции](#функции)
- [Установка](#установка)
- [Локальная сборка](#локальная-сборка)
- [Структура проекта](#структура-проекта)
- [Шрифты и фикс вёрстки](#шрифты-и-фикс-вёрстки)
- [Contributing](#contributing)
- [Лицензия](#лицензия)

## Функции

- ✨ Полный перевод листа персонажа на русский.
- 🔄 Перехват динамических изменений (новые поля, вкладки и т. д.) через `MutationObserver`.
- 🖋 Замена оригинального шрифта (в нём не было кириллицы) на визуально близкий и читабельный [Balsamiq Sans](https://fonts.google.com/specimen/Balsamiq+Sans).
- 🩹 Исправление визуальных багов в листе персонажа после перевода.
- ⚡ Установка в один клик с автoобновлением
- 📁 Сборка в один минифицированный файл для быстрой загрузки

## Установка

1. Установите расширение **Tampermonkey** (или его аналог) в браузер.
2. Нажмите на кнопку **Установить**.
   
   [<img src="https://img.shields.io/badge/​Установить-1E811F?style=for-the-badge"/>](https://jm1k1.github.io/roll20-fallout-translator/dist/roll20-fallout-translator.user.js)

3. Расширение предложит установить userscript.
4. Перейдите в вашу игру Fallout на Roll20 ⇒ обновите страницу.
5. Готово! Все лист персонажа отображаются на русском.

## Локальная сборка

```bash
# Клонируем репозиторий
git clone https://github.com/USERNAME/roll20-fallout-translator.git
cd roll20-fallout-translator

# Устанавливаем зависимости
npm ci

# Собираем userscript в папку dist/
npm run build
```

После сборки финальный файл находится по пути:

```
dist/roll20-fallout-translator.user.js
```

## Структура проекта

```
roll20-fallout-translator/
├── assets/                   # Стили, иконка, перевод
│   ├── translation.json      # Файл с переводами
│   ├── translation.css       # Файл с переводами стилей
│   ├── layout-fix.css        # Исправит стили после перевода
│   └── icon.png              # Иконка проекта
├── src/                      # Исходный код
│   ├── index.js              # Точка входа
│   ├── translator.js         # Логика перевода + наблюдение за DOM
│   └── css-utils.js          # Инжекция CSS, замена шрифта
├── dist/                     # Финальный userscript
│   └── roll20-fallout-translator.user.js
├── build.js                  # Скрипт сборки
└── userscript.meta.js        # Метаданные для userscript
```

## Шрифт и фикс вёрстки
Оригинальный лист использует шрифт **Sriracha**, в котором отсутствует кириллица.\
Заменил его на **[Balsamiq Sans](https://fonts.google.com/specimen/Balsamiq+Sans)**, максимально схожий по геометрии и начертанию.\
Из‑за другой длинный текста и другой метрики шрифта у некоторые поля «уехали» — это исправляет [`assets/layout-fix.css`](assets/layout-fix.css).

## Contributing
Для всех, кто заинтересован в внесении вклада в проекта, пожалуйста, создайте форк проекта и отправьте пул-реквест.

## Лицензия
Код распространяется под лицензией **MIT**.

> © 2025 Yuliy Mitryashkin. Все права разрешены.
