<h1 align='center'>
  <img src='https://jm1k1.github.io/roll20-fallout-translator/assets/icon.svg' width=256 alt='Roll20 Fallout Translator'>
  <br><br>

  Roll20 Fallout Translator

</h1>


<p align='center'>
  <img src="https://img.shields.io/badge/JavaScript-0A0A0A?style=for-the-badge&logo=JavaScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tampermonkey-0A0A0A?style=for-the-badge&logo=tampermonkey&logoColor=white"/>
  <img src="https://img.shields.io/badge/Esbuild-0A0A0A?style=for-the-badge&logo=esbuild&logoColor=white"/>
  <img src="https://img.shields.io/badge/Roll20-0A0A0A?style=for-the-badge&logo=roll20&logoColor=white"/>
</p>

---

**Roll20 Fallout Translator** — это пользовательский скрипт (UserScript), который автоматически переводит интерфейс листа персонажа Fallout в платформе Roll20 на русский язык.\
Скрипт переведёт как статичные, так и динамически создаваемые тексты, а также исправит стили, съехавшие после перевода.

## Содержание

- [Функции](#функции)
- [Установка](#установка)
- [Локальная сборка](#локальная-сборка)
- [Структура проекта](#структура-проекта)
- [Локализация](#локализация)
- [Шрифт и фикс вёрстки](#шрифт-и-фикс-вёрстки)
- [Участие в разработке](#участие-в-разработке)
- [Лицензия](#лицензия)
  - [Отказ от ответственности](#отказ-от-ответственности)
  - [Уведомление о товарных знаках и авторских правах](#уведомление-о-товарных-знаках-и-авторских-правах)

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

```bash\n$
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
├── assets/
│   ├── translation.json      # Файл с переводами
│   ├── translation.css       # Файл с переводами стилей
│   ├── layout-fix.css        # Исправит стили после перевода
│   └── icon.svg              # Иконка проекта
├── src/
│   ├── index.js              # Точка входа
│   ├── translator.js         # Логика перевода + наблюдение за DOM
│   └── css-utils.js          # Инжекция CSS, замена шрифта
├── dist/
│   └── roll20-fallout-translator.user.js
├── build.js                  # Скрипт сборки
└── userscript.meta.js        # Метаданные для userscript
```

## Локализация

Словарь переводов хранится в файле assets/translation.json. Чтобы добавить или исправить перевод:

1. Откройте assets/translation.json.
2. Добавьте новую пару ключ–значение: оригинальный текст → перевод.
3. Пересоберите скрипт: npm run build.

## Шрифт и фикс вёрстки

Оригинальный лист использует шрифт **Sriracha**, в котором отсутствует кириллица.\
Заменил его на **[Balsamiq Sans](https://fonts.google.com/specimen/Balsamiq+Sans)**, максимально схожий по геометрии и начертанию.\
Из‑за длины текста и другой метрики шрифта некоторые поля «уехали» — это исправляет [`assets/layout-fix.css`](assets/layout-fix.css).

## Участие в разработке

Если заметите ошибки, опечатки и не переведенный текст, прошу писать в [issues](https://github.com/JM1k1/roll20-fallout-translator/issues).

Для всех, кто заинтересован в внесении вклада в проекта, пожалуйста, создайте форк проекта и отправьте пул-реквест.

## Лицензия

Этот проект лицензирован по лицензии MIT. Подробности см. в файле [LICENSE](LICENSE).

### Отказ от ответственности

Этот проект разработан как неофициальный инструмент, созданный сообществом, и предоставляется "как есть", без каких-либо гарантий. Автор не несёт ответственности за возможные последствия использования скрипта.

### Уведомление о товарных знаках и авторских правах

- **Fallout** является зарегистрированной торговой маркой **Bethesda Softworks LLC**.
- Лист персонажа и связанные материалы разработаны и принадлежат **Modiphius Entertainment**.
- **Roll20** является торговой маркой компании **Roll20, LLC**.

Все упомянутые товарные знаки и авторские права принадлежат их соответствующим владельцам. Данный скрипт не одобрен, не аффилирован и не поддерживается Bethesda, Modiphius или Roll20. Используется исключительно в некоммерческих, образовательных или фанатских целях.

> © 2025 Yuliy Mitryashkin
