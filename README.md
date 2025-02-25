## Технічне завдання

### Мета
Розгорнути проєкт на Quasar і за допомогою компонентів Quasar та Vue.js 3 розробити бокове меню, яке містить посилання на різні сторінки. Посилання мають працювати і вести на відповідні сторінки, де достатньо щоб був тайтл назви сторінки. Також має бути хедер з бургером, який відкриває і закриває бокове меню.

### Завдання

1. **Розгортання проєкту на Quasar, Vue.js 3, та Node.js**
   - Використовувати останню версію Quasar Framework.
   - Використовувати Vue.js 3.
   - Використовувати Node.js версії 18 (використовуючи nvm).
   - Використовувати Typescript
   - Налаштувати базову структуру проєкту.

2. **Розробка бокового меню**
   - Використовувати компоненти Quasar для створення бокового меню.
   - Меню повинно містити наступні елементи:
     - Ім'я користувача.
     - Розділ "Boards" з фіксованими сторінками бордів(Board 1, Board 2, Board 3)
     - Розділ для налаштування облікового запису та отримання допомоги.
   - Кожен елемент меню має вести на відповідну сторінку, де відображається тайтл назви сторінки.

3. **Розробка хедера**
   - Створити хедер з бургер-меню.
   - Бургер-меню повинно відкривати і закривати бокове меню.

4. **Розробка сторінок**
   - Кожна сторінка повинна містити тайтл з назвою сторінки.
   - Налаштувати маршрутизацію між сторінками.

### Дизайн

- Використовувати дизайн, який показано на наданому макеті.
- Дотримуватися стилів Quasar для забезпечення консистентного вигляду.

### Макет

- Посилання на макет: [Kala Side Menu](https://www.figma.com/design/eBJ9hxNXpv5Qavq7YhXrpW/Kala-side-menu?node-id=0-1&t=wZLZ74XVlRFl9RBv-1)

### Технічні вимоги

- Забезпечити адаптивність інтерфейсу для різних пристроїв(десктоп/планшет)
- Налаштувати систему навігації
- Залити код на GitHub репозиторій.

### Термін виконання

- Завершити розробку протягом 2 днів з моменту прийняття завдання.

### Додаткові умови

- Код повинен бути написаний з дотриманням стандартів та бути легким для підтримки.
- Залити код на GitHub репозиторій і надати посилання на нього.

Будь ласка, повідомте про готовність прийняти завдання та почати роботу над ним.


## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```



### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js).
