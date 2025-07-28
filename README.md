## Опис проекту

Це навчальний React проект "Лічильник" з інтеграцією Redux, створений за допомогою Vite. Мета проекту — продемонструвати централізоване управління станом за допомогою Redux Toolkit:

- **Централізований стан:** Управління лічильником перенесено з локального стану компонентів до Redux store.
- **Redux Toolkit:** Каркас стору створено у директорії `src/redux` з використанням Redux Toolkit.
- **Підключення Redux:** Store підключено до додатку через компонент `Provider` з бібліотеки React Redux.
- **Взаємодія зі станом:** Замість локального стану та пропсів використовуються селектори та дії Redux для читання та зміни стану.
- **Оптимізація:** Селектори використовуються для ефективного доступу до стану.

Демо додатку розгорнуто на платформі **Vercel**: [https://hw39react-06072025.vercel.app/](https://hw39react-06072025.vercel.app/)

---

## Структура проекту

```
hw8-redux-app/
├── public/
├── src/
│   ├── components/
│   │   ├── CounterManager.tsx
│   │   └── CounterDisplay.tsx
│   ├── redux/
|   |   |── actions.ts
|   |   |── actionTypes.ts
│   │   ├── reducer.ts
│   │   └── store.ts
│   ├── App.jsx
│   ├── main.jsx
|   |── index.css
│   └── types.ts
├── package.json
├── vite.config.js
└── README.md
```

---

## Локальний запуск

1. **Клонувати репозиторій:**
    ```bash
    git clone https://github.com/Oleksandr-VFU/hw39react-06072025.git
    cd hw8-redux-app
    ```

2. **Встановити залежності:**
    ```bash
    npm install
    ```

3. **Запустити проект:**
    ```bash
    npm run dev
    ```

4. Відкрити [http://localhost:5173](http://localhost:5173) у браузері.

---

## Ліцензія

Освітній проект. Всі права захищено.
