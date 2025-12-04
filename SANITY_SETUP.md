# Sanity CMS Setup Guide

Это полное руководство по настройке и использованию Sanity CMS для вашего проекта Vertex Studio.

## Что такое Sanity?

Sanity - это современная headless CMS с:
- ✅ Визуальный редактор контента (Sanity Studio)
- ✅ Real-time обновления
- ✅ Мощная система запросов (GROQ)
- ✅ Бесплатный тариф для небольших проектов
- ✅ Хостинг изображений и медиа-файлов

## Шаг 1: Создание проекта на Sanity.io

### 1.1 Регистрация

1. Перейдите на [sanity.io](https://www.sanity.io/)
2. Нажмите "Get Started" или "Sign Up"
3. Зарегистрируйтесь через GitHub, Google или email

### 1.2 Создание нового проекта

1. После входа, нажмите **"Create new project"**
2. Выберите название проекта: **"Vertex Studio CMS"**
3. Выберите **"Private"** (бесплатный тариф)
4. Нажмите **"Create project"**

### 1.3 Получение Project ID

1. На странице проекта скопируйте **Project ID**
2. Это будет строка вида: `abc12def`
3. Сохраните её - она понадобится позже

## Шаг 2: Настройка локального проекта

### 2.1 Создание .env файла

1. Скопируйте `.env.example` в `.env.local`:
   ```bash
   copy .env.example .env.local
   ```

2. Откройте `.env.local` и вставьте ваш Project ID:
   ```env
   VITE_SANITY_PROJECT_ID=abc12def
   VITE_SANITY_DATASET=production
   VITE_SANITY_API_VERSION=2024-01-01
   ```

### 2.2 Обновление конфигурации

Откройте `sanity.config.ts` и замените `YOUR_PROJECT_ID` на ваш настоящий Project ID:

```typescript
export default defineConfig({
  name: 'default',
  title: 'Vertex Studio CMS',

  projectId: 'abc12def', // <-- Ваш Project ID
  dataset: 'production',

  // ...
})
```

## Шаг 3: Инициализация и деплой Sanity Studio

### 3.1 Инициализация Sanity

Выполните команду:

```bash
npx sanity init
```

При появлении вопросов:
- **Project to use:** Выберите созданный проект "Vertex Studio CMS"
- **Dataset:** Используйте `production`
- **Output path:** Нажмите Enter (использовать текущую папку)

### 3.2 Запуск локального Sanity Studio

```bash
npm run sanity
```

Это запустит Sanity Studio на `http://localhost:3333`

### 3.3 Деплой Sanity Studio

Чтобы развернуть Studio в облаке:

```bash
npm run sanity:deploy
```

Это создаст публичный URL вида: `https://vertex-studio-cms.sanity.studio`

## Шаг 4: Добавление контента

### 4.1 Открытие Sanity Studio

Откройте `http://localhost:3333` (или ваш облачный URL)

### 4.2 Добавление Services (Услуг)

1. В левом меню выберите **"Services"**
2. Нажмите **"+ Create new"**
3. Заполните поля:
   - **Service Title**: Web Development
   - **Slug**: web-development (автоматически)
   - **Icon Name**: Code2
   - **Description**: Modern, responsive websites...
   - **Features**: Добавьте список (кнопка "+")
     - Landing Pages
     - Corporate Websites
     - E-commerce Solutions
   - **Display Order**: 1
   - **Published**: ✅ Включено
4. Нажмите **"Publish"** (зеленая кнопка)

**Доступные иконки:**
Code2, Globe, Cpu, Zap, Layers, Monitor, Palette, Database

Полный список: [lucide.dev/icons](https://lucide.dev/icons/)

### 4.3 Добавление Projects (Проектов)

1. Выберите **"Projects"** в меню
2. Нажмите **"+ Create new"**
3. Заполните:
   - **Project Title**: E-Commerce Platform
   - **Slug**: ecommerce-platform
   - **Category**: E-commerce
   - **Description**: Full-featured e-commerce platform...
   - **Project Image**: Загрузите изображение
   - **Technologies Used**: Добавьте теги
     - React
     - Node.js
     - PostgreSQL
   - **GitHub URL**: https://github.com/your-repo
   - **Live Demo URL**: https://your-project.com
   - **Featured Project**: ✅ (для отображения на главной)
   - **Display Order**: 1
   - **Published**: ✅
4. Нажмите **"Publish"**

### 4.4 Добавление Testimonials (Отзывов)

1. Выберите **"Testimonials"**
2. Нажмите **"+ Create new"**
3. Заполните:
   - **Client Name**: Alex Thompson
   - **Role/Position**: CTO
   - **Company**: TechCorp Inc.
   - **Testimonial Content**: Vertex Studio delivered...
   - **Avatar Image**: Загрузите фото (опционально)
   - **Rating**: ⭐⭐⭐⭐⭐
   - **Display Order**: 1
   - **Published**: ✅
4. Нажмите **"Publish"**

### 4.5 Добавление Tech Stack (Технологий)

1. Выберите **"Tech Stack"**
2. Нажмите **"+ Create new"**
3. Заполните:
   - **Technology Name**: React
   - **Slug**: react
   - **Brand Color**: #61DAFB
   - **Category**: Frontend
   - **Display Order**: 1
   - **Published**: ✅
4. Нажмите **"Publish"**

**Где найти Brand Colors:**
- [brandcolors.net](https://brandcolors.net/)
- [simpleicons.org](https://simpleicons.org/)

## Шаг 5: Проверка работы

### 5.1 Запуск сайта

```bash
npm run dev
```

Откройте `http://localhost:3000`

### 5.2 Проверка загрузки данных

1. Откройте DevTools (F12)
2. Перейдите на вкладку Console
3. Найдите сообщение: `Using Sanity CMS` (если Sanity настроен)
4. Или: `Using local JSON files` (если используется fallback)

### 5.3 Тестирование обновлений

1. В Sanity Studio измените название услуги
2. Нажмите **"Publish"**
3. Обновите сайт (F5)
4. Изменения должны появиться через ~30 секунд (кеш)

## Шаг 6: Настройка доступа

### 6.1 Добавление пользователей

1. Перейдите на [sanity.io/manage](https://www.sanity.io/manage)
2. Выберите ваш проект
3. Перейдите в **"Members"**
4. Нажмите **"Invite people"**
5. Введите email и выберите роль:
   - **Administrator** - полный доступ
   - **Editor** - может редактировать контент
   - **Viewer** - только просмотр

### 6.2 CORS настройки

Если сайт развернут на production:

1. Перейдите в [sanity.io/manage](https://www.sanity.io/manage)
2. Выберите проект
3. **Settings** → **API**
4. **CORS Origins** → **Add CORS origin**
5. Добавьте:
   - `http://localhost:3000` (для разработки)
   - `https://vertex-studio.com` (ваш домен)
6. Allow credentials: ✅

## Структура данных

### Services
```json
{
  "title": "Web Development",
  "slug": "web-development",
  "icon": "Code2",
  "description": "Modern, responsive websites...",
  "features": ["Landing Pages", "Corporate Websites"],
  "order": 1,
  "published": true
}
```

### Projects
```json
{
  "title": "E-Commerce Platform",
  "slug": "ecommerce-platform",
  "category": "E-commerce",
  "description": "Full-featured platform...",
  "image": "...",
  "tags": ["React", "Node.js"],
  "github": "https://github.com/...",
  "live": "https://example.com",
  "featured": true,
  "order": 1,
  "published": true
}
```

### Testimonials
```json
{
  "name": "Alex Thompson",
  "role": "CTO",
  "company": "TechCorp",
  "content": "Excellent work...",
  "avatar": "...",
  "rating": 5,
  "order": 1,
  "published": true
}
```

### Tech Stack
```json
{
  "name": "React",
  "slug": "react",
  "color": "#61DAFB",
  "category": "frontend",
  "order": 1,
  "published": true
}
```

## Работа с изображениями

### Загрузка изображений

1. В Sanity Studio нажмите на поле **Image**
2. Перетащите файл или нажмите **"Upload"**
3. Sanity автоматически:
   - Оптимизирует изображение
   - Создает разные размеры
   - Размещает на CDN

### Рекомендации

- **Формат**: JPG или PNG
- **Размер**: До 5MB
- **Разрешение проектов**: 1200x800px
- **Разрешение аватаров**: 200x200px

## Команды

```bash
# Запуск Sanity Studio локально
npm run sanity

# Деплой Sanity Studio в облако
npm run sanity:deploy

# Запуск сайта
npm run dev

# Сборка production
npm run build
```

## Troubleshooting

### Ошибка: "Project not found"

**Решение:**
1. Проверьте Project ID в `.env.local`
2. Убедитесь, что проект создан на sanity.io
3. Перезапустите dev сервер

### Контент не отображается

**Решение:**
1. Проверьте, что контент **Published** (не Draft)
2. Очистите кеш: откройте DevTools → Application → Clear Storage
3. Проверьте Console на ошибки

### CORS ошибка

**Решение:**
1. Добавьте ваш домен в CORS origins на sanity.io
2. Включите "Allow credentials"

### Изображения не загружаются

**Решение:**
1. Проверьте, что изображение загружено в Sanity
2. Убедитесь, что поле `image` опубликовано
3. Проверьте URL изображения в консоли

## Полезные ссылки

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Sanity Studio](https://www.sanity.io/docs/sanity-studio)
- [Image API](https://www.sanity.io/docs/image-url)

## Поддержка

Если возникли проблемы:
1. Проверьте эту документацию
2. Посмотрите [Sanity Docs](https://www.sanity.io/docs)
3. Проверьте Console в DevTools
4. Убедитесь, что `.env.local` настроен правильно

---

Санить CMS готов к работе! 🎉
