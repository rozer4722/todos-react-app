# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


# React Workshop Documentation

## 1. Introduction & Overview

### What This Workshop Covers:
- A frontend-first approach using React.
- Deploying a React frontend.
- Creating and deploying a backend API.
- Optional: Introduction to TypeScript for type-safety.

### Goals for Participants:
- Understand basic React concepts.
- Build and deploy a React application.
- Integrate a backend API and understand full-stack workflows.
- Gain exposure to TypeScript if time permits.

---

## 2. Setting the Stage

### Prerequisites:
- Basic understanding of HTML, CSS, and JavaScript.

### Tools & Tech Stack:
- **Frontend**: React
- **Code Editor**: VS Code
- **Backend**: Node.js & Express
- **Version Control**: Git & GitHub
- **Deployment Platforms**:
  - Frontend: Vercel or Netlify
  - Backend: Render, Railway, or Heroku
- **Optional**: TypeScript

---

## 3. Getting Started with React

### Project Setup:
- Use `create-react-app` or Vite to bootstrap a React project.
- **Comparison**:
  - `create-react-app` is beginner-friendly but slower and includes more boilerplate.
  - **Vite** is faster, more modern, and offers a better development experience.
- Commands to create a project:
  ```bash
  # Using create-react-app
  npx create-react-app my-app --template typescript

  # Using Vite
  npm create vite@latest my-app -- --template react-ts
  ```

### Understanding the File Structure:
- Key entry points:
  - `index.tsx`: Application entry.
  - `App.tsx`: Root component.
- Familiarize with folders: `src`, `public`.

### Core React Concepts:
- **Components**:
  - Functional vs. Class Components.
  - Emphasize functional components for hooks.
- **JSX Syntax**:
  - Combines HTML-like syntax with JavaScript.
- **Props and State**:
  - Passing data with props.
  - Managing local state with `useState`.
- **Hooks**:
  - `useState` for state management.
  - `useEffect` for side effects (e.g., fetching data).

### Building UI Components:
- Break down the UI into reusable components.
- Pass data through props.
- Use conditional rendering and lists for dynamic UIs.

---

## 4. Styling & State Management

### Styling Approaches:
- **CSS Modules**: Scoped CSS for components.
- **Styled Components**: Component-level styling using JavaScript.
- **UI Libraries**: Tailwind CSS or Chakra UI for pre-designed components.

### State Management Options:
- **Local State**:
  - Use hooks like `useState` and `useReducer`.
- **Global State**:
  - Context API for simple global state.
  - **(Optional)**: Introduce Redux or Zustand for complex state management.

---

## 5. Routing in React

### Single-Page Application (SPA) Concept:
- Explain how React uses client-side routing for navigation.

### React Router Basics:
- Install React Router:
  ```bash
  npm install react-router-dom
  ```
- Set up routes in `App.tsx`:
  ```tsx
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  
  const App = () => (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
  ```
- Navigate between pages using `<Link>`.
- Handle 404 routes with `*`.

---

## 6. Integration with APIs (Frontend-First Mindset)

### Fetching Data:
- Use `fetch` or `axios` to call external APIs:
  ```tsx
  import { useState, useEffect } from 'react';

  const App = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch('https://api.example.com/items')
        .then(response => response.json())
        .then(data => {
          setData(data);
          setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading...</p>;
    return <div>{JSON.stringify(data)}</div>;
  };
  ```

### Displaying Dynamic Data:
- Render lists of items fetched from an API.
- Example:
  ```tsx
  const TodoList = ({ todos }) => (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
  ```

### Authentication Flows (Optional):
- Manage auth tokens and login/logout flows.
- Protect routes using higher-order components or route guards.
  ```tsx
  const ProtectedRoute = ({ element, isAuth }) => (
    isAuth ? element : <Navigate to="/login" />
  );
  ```

---

## 7. Deploying React Apps

### Deployment Platforms:
- **Netlify** or **Vercel** for simple frontend deployment.

### Steps to Deploy:
1. Build the app:
   ```bash
   npm run build
   ```
2. Deploy using the platform of choice:
   - Drag and drop the `build` folder into Netlify/Vercel.
   - Use GitHub integration for CI/CD.

---

This documentation should help guide participants through building, styling, routing, and integrating APIs in a React application, with deployment as the final step. Let me know if you need more details or modifications!


