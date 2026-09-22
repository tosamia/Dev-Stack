# Dev Stack

## Project Description

Dev Stack is a responsive React web application that helps developers explore different technologies and build their ideal development stack.

Users can explore frontend, backend, database, programming language, styling, DevOps, and development tools. They can also add technologies to their personal stack and remove them whenever they want.

## Technologies Used

- React.js
- JavaScript (ES6+)
- Vite
- CSS
- JSON
- React Toastify

## Features

1. **Explore Technologies**  
   Browse different technologies with their category, description, difficulty level, rating, and badge.

2. **Build Your Stack**  
   Add technologies to a personal stack. The same technology cannot be added twice.

3. **Responsive Design**  
   The website works on desktop, tablet, and mobile devices with a responsive navigation menu.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX because it makes creating and understanding UI components easier.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to store and update changing data in a React component.

I used `useState` to store the technology data, loading status, selected technologies, and mobile menu state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders.

I used it to fetch the technology data from the JSON file when the application starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React update the correct item efficiently when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content depending on a condition.

I used it in the Your Stack section. When the stack is empty, it shows:

> Your stack is empty.

When technologies are added, it shows the selected technologies instead.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props.

A child can send information back to the parent by calling a function that the parent passes to the child as a prop.
## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── TechnologyCard.jsx
│   ├── TechnologyList.jsx
│   ├── Stack.jsx
│   └── Footer.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx

public/
└── data/
    └── technologies.json