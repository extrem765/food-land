├── public/               # Статичні файли, що не обробляються збірником
├── src/
│   ├── assets/           # Зображення, іконки, фавіконки та шрифти
│   │   ├── favicons/     # Фавіконки для сайту
│   │   ├── fonts/        # Підключувані шрифти (woff2 тощо)
│   │   ├── icons/        # SVG-іконки (для спрайту)
│   │   └── images/       # Інші зображення
│   │
│   ├── components/       # Дрібні компоненти для повторного використання (Button, Input тощо)
│   ├── constants/        # Константи, enum'и, конфіги, словники тощо
│   ├── layouts/          # Структурні компоненти сторінки (Header, Content, Section, Footer)
│   ├── modules/          # JavaScript-модулі (наприклад: OverlayMenu, InputMaskCollection)
│   ├── pages/            # Файли сторінок (Minista сам роутить все звідси)
│   ├── sections/         # Секції сторінок для повторного використання (Hero, About, Features тощо)
│   ├── styles/           # Загальні стилі проєкту (змінні, міксини, скидання)
│   ├── utils/            # Утилітарні функції (наприклад: pxToRem, debounce)
│   ├── global.jsx        # Загальний layout для всіх сторінок (Minista Feature)
│   └── main.js           # Точка входу JavaScript-логіки, що запускається в браузері
│
├── .gitignore             # Список файлів та папок, що ігноруються Git
├── .prettierignore        # Список файлів та папок, що ігноруються Prettier
├── eslint.config.js       # Конфігурація ESLint (перевірка JS/JSX-коду)
├── jsconfig.json          # Налаштування шляхів та автодоповнення для JS (використовується IDE та збірником)
├── minista.config.js      # Конфігурація Minista
├── package.json           # Залежності проєкту, скрипти, метаінформація
├── package-lock.json      # Зафіксовані версії всіх встановлених пакетів
├── postcss.config.js      # Конфігурація PostCSS (preset-env, pxtorem тощо)
├── prettier.config.js     # Налаштування автоформатування коду (Prettier)
├── README.md              # Документація по проєкту (ви зараз її читаєте)
└── stylelint.config.js    # Конфігурація Stylelint (перевірка CSS/SCSS)
