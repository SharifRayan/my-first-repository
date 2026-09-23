# Dev Stack

Dev Stack is a small React project for exploring development technologies and building a personal technology stack. The interface follows the supplied Figma/Penpot design and uses Tailwind CSS for the styling.

## Technologies
- React.js
- Vite
- Tailwind CSS
- React-Toastify
- JavaScript (ES6+)
- JSON

## Features
1. Responsive technology cards with category, difficulty, rating, and badges.
2. Add, remove, duplicate-check, and remove-all stack functionality with toast messages.
3. Responsive navbar, hero section, sidebar stack, and footer based on the provided design.

## React Questions

### What is JSX, and why is it used in React?
JSX lets us write HTML-like elements inside JavaScript. It makes React UI code easier to read and organize.

### What is the difference between props and state?
Props are values a component receives from its parent. State is data a component keeps and changes itself.

### What does the useState hook do, and where did you use it in this project?
`useState` stores changing data in a component. I used it for the mobile menu, loaded technologies, and the selected stack.

### What does the useEffect hook do, and why did you need it to load the JSON data?
`useEffect` runs side effects after rendering. I used it to fetch the local technology JSON when the app loads.

### Why does every item in a .map() list need a unique key prop?
React uses the key to identify each item when the list changes, so it can update the correct element efficiently.

### What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI depending on a condition. The `YourStack` component shows an empty message when `stack.length === 0`, and stack items otherwise.

### How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data through props. A child can call a function passed through props to send an event or value back to the parent.
