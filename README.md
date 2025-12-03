## 📁 Структура проєкту
```
├── public/               # Статичні файли, що не обробляються збірником
├── src/
│   ├── assets/           # Зображення, іконки, фавіконки та шрифти
│   │   ├── favicons/     # Фавіконки для сайту
│   │   ├── fonts/        # Підключувані шрифти (woff2 тощо)
│   │   ├── icons/        # SVG-іконки (для спрайту)
│   │   └── images/       # Інші зображення
│   │
│   ├── components/       # Дрібні компоненти (Button, Input тощо)
│   ├── constants/        # Константи, enum'и, конфіги
│   ├── layouts/          # Структурні компоненти (Header, Footer)
│   ├── modules/          # JavaScript-модулі
│   ├── pages/            # Файли сторінок
│   ├── sections/         # Секції сторінок (Hero, About, Features)
│   ├── styles/           # Загальні стилі (змінні, міксини)
│   ├── utils/            # Утилітарні функції
│   ├── global.jsx        # Загальний layout
│   └── main.js           # Точка входу JavaScript
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```
