# web-app

Сборник инструкций и гайдов.

Создан с помощью [Astro](https://astro.build/) и [Startlight](https://starlight.astro.build/)

Доступен на [ctulhu.netlify.app)](https://ctulhu.netlify.app/)

[![CI/CD Status](https://api.netlify.com/api/v1/badges/2aeee120-5b1c-4be7-a545-2d5369143e75/deploy-status)](https://app.netlify.com/projects/ctulhu/deploys)

## Запуск проекта

### Системные требования
- Node.js версии 22.15.1 или выше
- npm версии 10.9.2 или выше

### Локальный запуск
1. Установите зависимости:
   ```bash
   npm install
   ```
2. Запустите проект в режиме разработки:
   ```bash
   npm run dev
   ```

### Сборка проекта
1. Соберите проект:
   ```bash
   npm run build
   ```
2. После сборки проект будет находиться в папке `dist`.

### Запуск с помощью Docker Compose
1. Убедитесь, что Docker и Docker Compose установлены на вашей системе.
2. Запустите контейнер:
   ```bash
   docker-compose up
   ```
3. Приложение будет доступно по адресу `http://localhost:4321`.
