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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app.ts`. The page auto-updates as you edit the file.

## Additional Information: API Keys

After you start the application, you will need to set up an additional `.env` file to store the required API keys. These API keys are necessary for the application to interact with The Chat Messaging API which is configured using Firebase.

### Obtaining API Keys

To obtain the Firebase API keys, follow these steps:

1. **Create a Firebase Project:**

   - Go to [Firebase Console](https://console.firebase.google.com/).
   - Add a new project and name it.

2. **Project Settings:**

   - In the project dashboard, go to Project settings.

3. **Configure Web App:**

   - Under "Your apps," add a web app.
   - Firebase will provide a code snippet.

4. **API Key:**
   - In the snippet, find the `apiKey` value – that's your Firebase API key.

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
- Context API
- Firebase
- Formik

### Project structure explanation

- `GreyNote-Chat-App` - The main folder of the project, contains all the code of the app.
  - `src` - Contains all the source code of the app.
    - `components` - Holds reusable UI components used throughout the app.
    - `contexts` - Contains context providers for managing state using the Context API.
    - `firebase` - Includes Firebase configuration and services setup.
    - `pages` - Contains the different pages/screens of the app.
      - `Home.tsx` - The Chat page where users initiate new message sessions.
      - `Search.tsx` - Component for searching and connecting with other users.
      - `Chat.tsx` - The chat interface where users engage in conversations.
      - `ChakraTheme.ts` - Customizes Chakra UI's theme for consistent styling.
    - `App.ts` - The main entry point of the app, where routing and layout are set up.
    - `main.ts` - Renders the `App` component into the DOM.
  - `firebaseConfig.js` - Stores the Firebase configuration (API keys, etc.).

### Project screenshots

 <img src="https://github.com/pscon/greynote-chat/blob/main/public/pics3.png" alt="register-page" width="900px" height="500px">
 <img src="https://github.com/pscon/greynote-chat/blob/main/public/pics2.png" alt="login-page" width="900px" height="500px">
 <img src="https://github.com/pscon/greynote-chat/blob/main/public/pics1.png" alt="login-page" width="1200px" height="500px">

<!-- !


![profile page](./public/profile.png) -->

---
### Contact

- Linkedin: [Ekunola Paul](https://www.linkedin.com/in/ekunola-paul-42712b1aa/)
- Email: [Email](mailto:ekunolapaul@gmail.com)

## Author

- Ekunola Paul
