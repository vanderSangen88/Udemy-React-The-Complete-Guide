# Udemy-React-The-Complete-Guide

## Section 3: The Basics

### -- Using Create React App

1. Install package "create-react-app".
```
npm i -g create-react-app
```
2. Create a React project "reacte-complete-guide".
```
create-react-app react-complete-guide
```
3. Navigate to project folder
```
cd react-complete-guide
```
4. Run local webserver.
```
npm start
```

---
## Section 4: Working with Lists and Conditionals

### -- 

> Output conditionally through JavaScript with variables which you output in the JSX & adjust with if-statements.

> Add a `key`-attribute to help React perform better.

---
## Section 5: Styling React Components & Elements

### -- 61. Outlining the Problem Set

One way to style an elment is by inline styling. By assigning the styling to a JavaScript variable and assign the variable to `style`-attribute of the JSX, React will take care of the rendering. 
With this method it is unable to use pseudo-selectors. It is usefull to style a specific element.

### -- 62. Setting Styles Dynamically

> Everything is JavaScript: Change the property within the conditional check.

*Example:*
```js
    const style = { "backgroundColor" : "green" };

    if ( condition ) {
        style.backgroundColor = "red";
    }
```
### -- 63. Setting Class Names Dynamically

> Everything is JavaScript

### -- 64. Adding and Using Radium

Add the "Radium" package; use inline styles with pseudo & mediaqueries

```bash
npm i --save radium
```

Import the new package in the JS and export it as a Higher Order Component
*in App.js:*
```js
import Radium from 'radium';
...
export default Radium(App);
```

### -- 65. Using Radium for Media Queries
### -- 66. MUST READ: Enabling CSS Modules
### -- 67. Enabling & Using CSS Modules

Run "eject" command

### -- 68. More on CSS Modules
### -- 69. Adding Pseudo Selectors
### -- 70. Working with Media Queries
### -- 71. Useful Resources & Links

---
## Section 6: Debugging React Apps
### -- 72. Module Introduction
> Because We All Make Mistakes

### -- 73. Understanding Error Messages
### -- 74. Finding Logical Errors by using Dev Tools & Sourcemaps
### -- 75. Working with the React Developer Tools
### -- 76. Using Error Boundaries (React 16+)
> Only use ErrorBoundaries when you can't control and might fail.
### -- 77. Wrap Up
### -- 78. Useful Resources & Links
---
## Section 7: Diving Deeper into Components & React Internals
### -- 
---
## Section 8: A Real App: The Burger Builder (Basic Version)
### -- 142. About React Hooks
### -- 143. Module Introduction
### -- 144. Planning an App in React - Core Steps
1. Component Tree / Component Structure
2. Application State (Data)
3. Components vs. Containers
### -- 145. Planning our App - Layout and Component Tree