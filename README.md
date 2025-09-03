# Mindbox Todo

Небольшое приложение «список дел» на React + TypeScript. Поддерживает добавление задач, переключение статуса, фильтры и очистку выполненных.

## Возможности

- Добавление новой задачи
- Переключение выполнено/активно по клику на маркер
- Фильтры: All / Active / Completed
- Очистка выполненных задач
- Счётчик оставшихся задач (item(s) left)

## Технологии

- React 19, TypeScript 5, Vite 7
- Vitest 2, @testing-library/react, jest‑dom
- ESLint 9 + eslint-plugin-react-hooks, eslint-plugin-react-refresh
- Prettier 3

## Быстрый старт

Требования: Node.js 18+ (рекомендуется 20+), npm 9+.

1) Установка зависимостей:

```bash
npm install
```

2) Режим разработки:

```bash
npm run dev
```

3) Сборка и предпросмотр:

```bash
npm run build
npm run preview
```

## Скрипты

- dev: запускает Vite дев‑сервер
- build: типизация + сборка
- preview: локальный предпросмотр сборки
- test / test:watch / test:ci: тесты Vitest (jsdom, jest‑dom матчеры)
- lint / lint:fix: проверка ESLint

## Тестирование

- Тест‑раннер: Vitest (env jsdom)
- Матчеры: @testing-library/jest-dom подключены в `src/setupTests.ts`
- Команда запуска: `npm test` или `npm run test:watch`

Покрываются сценарии: добавление, переключение статуса, фильтрация, очистка и корректный счётчик оставшихся задач.

## Деплой

Приложение развернуто: https://mindbox-todo-gray.vercel.app/
