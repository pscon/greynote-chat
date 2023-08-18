This project was bootstrapped with [Vite React App](https://github.com/facebook/create-react-app).

### Project setup

First, Clone the repository

```bash
git clone https://github.com/pscon/greynote-chat
```

Install all dependencies

```bash
npm install
```

run the development server:

```bash
npm run dev
# or
yarn dev
```

- Run the tests

```bash
npm run test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app.ts`. The page auto-updates as you edit the file.

## Additional Information: API Keys

After you start the application, you will need to set up an additional `.env` file to store the required API keys. These API keys are necessary for the application to interact with The Chat Messaging API which is configured using Firebase.

### Obtaining API Keys

To obtain the API keys, follow these steps:

1. Visit the TMDb website at [https://developer.themoviedb.org/reference/intro/authentication](https://developer.themoviedb.org/reference/intro/authentication).
2. Register for an account or log in if you already have one.
3. Once logged in, you can access your API keys from the developer dashboard.

### .env File Setup

Create a `.env` file at the root folder of your project and add the following content:

```bash
VITE_API_KEY=YOUR_API_KEY_HERE
```

## Project name

GreyNote - Chat App

## Project description

GreyNote Chat App is a sleek text messaging platform that enables users to initiate new message sessions and effortlessly search for and connect with other users for seamless communication.

### Project features

- Message Sessions: Easily create new message sessions to start conversations with contacts.
- User Search: Effortlessly search for and find other users to connect and chat with.
- Sleek Interface: Enjoy a user-friendly and modern interface for a smooth messaging experience.

---

### Project technologies

- React.js
- TypeScript
- Chakra UI
- Context Api
- Firebase
- Formik
- ESLint

### Project structure explanation

- `GreyNote-Chat-App` - The main folder of the project, contains all the code of the app.
  - `src` - Contains all the source code of the app.
    - `components` - Holds reusable UI components used throughout the app.
    - `contexts` - Contains context providers for managing state using the Context API.
    - `firebase` - Includes Firebase configuration and services setup.
    - `hooks` - Houses custom hooks, such as `useFetch` for API data retrieval.
    - `pages` - Contains the different pages/screens of the app.
      - `Home.tsx` - The Chat page where users initiate new message sessions.
      - `Search.tsx` - Component for searching and connecting with other users.
      - `Chat.tsx` - The chat interface where users engage in conversations.
    - `styles` - Holds styles related to the app's design and UI.
      - `ChakraTheme.ts` - Customizes Chakra UI's theme for consistent styling.
    - `App.ts` - The main entry point of the app, where routing and layout are set up.
    - `main.ts` - Renders the `App` component into the DOM.
  - `public` - Contains static assets and public files used in the app.
  - `package.json` - Lists the project's dependencies and scripts.
  - `firebaseConfig.js` - Stores the Firebase configuration (API keys, etc.).
  - `tsconfig.json` - TypeScript configuration for type checking and compilation.

### Project deployment

- Deploy the project to Vercel

```bash
npm run deploy
```

### Project screenshots

[chat page](./public/pics1.png)

<!-- !
![feeds page](./public/feeds.png)

![post page](./public/post.png)

![profile page](./public/profile.png) -->

---

### Project Live link

[GreyNote-Chat-App](https://pscon-movie-app.vercel.app/)

### Contact

- Linkedin: [Ekunola Paul](https://www.linkedin.com/in/ekunola-paul-42712b1aa/)
- Email: [Email](mailto:ekunolapaul@gmail.com)

## Author

- Ekunola Paul
