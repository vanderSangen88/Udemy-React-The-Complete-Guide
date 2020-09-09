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
### -- 146. Planning the State
### -- 147. Setting up the Project
### -- 148. Creating a Layout Component

> Create a subfolder of src "components" & "containers". Containers are stateful.

*in src/hoc/Aux.js*:   
= Auxiliary - Higher Order Component 
```js
const aux = ( props ) => props.children;

export default aux;
```

*in src/components/Layout/Layout.js*:   
= Functional Wrapper Component
```js
// import React from 'react';
import Aux from './../../hoc/Aux';

const layout = ( props ) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;
```

*in src/App.js* 
```js
// import React, { Component } from 'react';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
            <p>Test</p>
        </Layout>
      </div>
    );
  }
}

export default App;
```
### -- 149. Starting implementation of the Burger Builder Container
> Use styled-components instead of CSS Modules 

1. install package  
`npm i --save styled-components`  
2. include in JS
3. refactor the `main`-tag to a styled-`Main`-component;

*in layout.js:*
```js
import styled from 'styled-components';

const Main = styled.main`
margin-top: 16px;
`;

const layout = ( props ) => (
    <Aux>
        ...
        <!-- <main> -->
        <Main>
            {props.children}
        </Main>
        <!-- </main> -->
    </Aux>
);
```
### -- 150. Adding a Dynamic Ingredient Component
### -- 151. Adding Prop Type validation
. install package  
`npm i --save prop-types`  
2. include in JS
3. convert the functional component to a class-based component
*in BurgerIngredient.js:*
```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
    render() {
        ...
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

```
### -- 152. Starting the Burger Component
### -- 153. Outputting Burger Ingredients Dynamically
```js
const transformedIngredients = Object.keys( props.ingredients )
    .map( igKey => {
        return [...Array( props.ingredients[igKey])].map( (_, i) {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        });
    });
```
### -- 154. Calculating the Ingredient Sum Dynamically

> Reduce is an ES6 build-in array function which allows to transform an array into something else

"It takes a function as an input and this function receives two arguments passed in automatically by JavaScript, the previous value and the current value.   
The reduce method does not only accept these callback here which is executed on every element in thes array we return here, it also accepts an initial value, let's say an empty array. So the initial value of the reduced value. Now of course you want to adjust this reduced value by returning something and it will then loop through all the elements and simply add them to the initial value step by step. So here I want to return the updated values starting with the inital one is then stored in the first argument which we receive in each loop here.   
So `arr` is always the updated root array which i want to return in the end. So I will symply concat something to that, `concat(el)`, this will simply take the given element through which we're looping and add it to this array."

```js
const transformedIngredients = Object.keys( props.ingredients )
    .map( igKey => {
        ...
    })
    .reduce((arr, el) => {
        return arr.concat(el) 
    }, []);
```
---
## Section 14: Redux
> Because State Management Can Be Hard
### -- 275. Module Introduction
A stand alone third party library. Often used in React projects to make state management instead of passing data through query props.

### -- 276. Understanding State
### -- 277. The Complexity of Managing State
Not elegant way to use routing query parameters to pass data.  
> React's reactivity system doesn't react to changes in a defined global variable 

But having a global store is exactly what Redux is about.

### -- 278. Understanding the Redux Flow
*Redux to the Rescue!*  

It's all about a central store in each redux application, and stores the entire application state; like a giant JavaScript object.  
A component probably wants to get or manipulate the current application state. It doesn't do that by directly manipulating that central store - that would not be picked up by React's reactivity system and even worse, would make the store pretty unpredictable. Editing it from anywhere in the application would make it untraceble to where a certain change was made.

Actions are the first building block, besides the central store, which are dispatched from within the components. This is just an information package with a type and can hold a payload. An `action` doesn't directly reach the store, holds any logic or knows how to update the store; it's just a messenger.

A `reducer` changes the store. It is possible to combine multiple reducers into one, but in the end there is one route reducer whicht is directly connected to the central store.  
So the action reaches the reducer and since the action contains a type, the reducer can check the type. It is a pure function which receives the action and the old state as input, which returns an updated state.

> A reducer has to execute synchronous code only

The updated state than is stored in the central store and replaces the old state in an immutable way.  
*Returns a new state; based on the old one, but technically a new JavaScript object; Objects are reference types and therefor the old state shouldn't be changed.*

To get the updated state back to the component, a `subscription model` can be used.  
The store triggers all subscriptions whenever the state changes / is updated. A component can subscribe to store updates and then receives that update automatically.

![alt text][logo]

[logo]: ./assets/redux-learning-card.png "Logo Title Text 2"

### -- 279. Setting Up Reducer and Store
1)  Install Redux package; run `npm i --save redux`
2)  in the root-folder, next to the package.json create a new file "redux-basics.js". It won't hold any React code nor would it be included in the React project. It sets up the usage of Redux for NodeJS.  

*in redux-basics.js*
```js
const redux = require('redux');
const createStore = redux.createStore; // *1

const initialState = {
    counter: 0
};

// Reducer // *3 
const rootReducer = (state = initialState, action) => { // *7
    if (action.type === 'INC_COUNTER') { // *11
        return { // *12
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'ADD_COUNTER') { 
        return { 
            ...state,
            counter: state.counter + action.value
        }
    }
    return state; // *5
}; // *4

// Store
const store = createStore(rootReducer); // *2
// console.log(store.getState()); // *6 = 0

// Subscription
store.subscribe(() = { // *13
    console.log('[Subscription]', store.getState()); // *14
}); 

// Dispatching Action
store.dispatch({
    type: "INC_COUNTER" // *9
}); // *8
store.dispatch({
    type: "ADD_COUNTER", 
    value: 10, // *10
});
// console.log(store.getState()); // = 11
```

*1: creates a new redux store.  
*2: executes createStore(), but won't do much without a passed reducer.  
*3: the only one able to update the state.  
*4: the function gets 2 arguments: the current state which may be updated & the action.  
*5: it has to return the updated state.  
*6: will pull out the state from the store. At first 'undefined'.  
*7: ES6 feature to pass default value.

### -- 280. Dispatching Actions
*8: a function which takes an action - an object - as an argument.  
*9: `type`-key is mandatory.  
*10: payload can be passed by multiple parameters or one "payload"-object.

> Convention: use all uppercase string: increment counter = INC_COUNTER 

*11: Within the reducer, react to different types of actions.  
*12: Always return a new object.

### -- 281. Adding Subscriptions
*13: subscribe takes an argument, a function - without any arguments.
*14: gets triggered whenever the state is updated.

### -- 282. Connecting React to Redux
1)) The store should be created right before the application starts:   
*in index.js:*
```js
import { createStore } from 'redux';
import reducer from './store/reducer';

const store = createStore(reducer);
```

The reducers will be created in their own files, with code for different type of actions.  
2)) Create a "store"-folder.   
3)) and within a `reducer.js`-file.  

*in store/reducer.js:*
```js
const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    return state;
};

export default reducer;
```

4)) import the reducer.  
5)) pass it to the createStore().  

### -- 283. Connecting the Store to React
1)) Install the package "react-redux". Run `npm i --save react-redux`.  
2)) Import the "Provider" helper-component.
3)) Wrap the "App"-component with provider.
4)) Pass the `store`-constant to the 'store'-property expected by the Provider.

*in index.js:*
```js
import { Provider } from 'react-redux';

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'))
```
To get the date from the store in the "counter"-container, a subscription needs to be set up using a function from the 'react-redux'-package.

*in ./containers/Counter/Counter.js:*
```js
    import { connect } from 'react-redux'; 

    class Counter extends Component {
        render () {
            return (
                <div>
                    <CounterOutput value={this.props.ctr} />
                    <CounterControl clicked={this.props.onIncrementCounter} />
                </div>
            )
        }
    }

    const mapStateToProps = state => {
        return {
            ctr: state.counter 
        };
    };

    export default connect(mapStateToProps)(Counter);
```
"connect" is a Higher Order function and takes a component as input, which returns a Higher Order component.
It can also be called as a function. To the first function execution, pass some configuration for this given container.  
Precisely two pieces of information to connect: 
- Which part of the state is interesing: subscriptions
- Which actions should be dispatched

### -- 284. Dispatching Actions from within the Component
```js
// containers/Counter/Counter.js:
const mapStateToProps = state => { ... };

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => {
            return dispatch({
                type: 'INCREMENT'
            );
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// store/reducer.js:
const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1
        };
    }
    return state;
};
```
### -- 287. Updating State Immutably
```js
// store/reducer.js:
const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        ...
        case 'STORE_RESULT':
            /* 
                # RETURN THE STATE IMMUTABLE:
                - Clone the object
                - Spread the old values
                - Update the state
            */
            return {
                ...state, // { counter: 0, results: [] }
                results: state.results.concat({ // *1
                    id: new Date(),
                    value: state.counter
                }) 
            }
        // #  NO BREAK NECESSARY 
    }
}

// containers/Counter/Counter.js:
const mapStateToProps = state => {
    return {
        ...
        storedResults = state.results
    }
};

class Counter extends Component {
    render() {
        return (
            ...
            <ul>
                {this.props.storedResults.map(strResult => (
                    <li key={strResult.id} 
                        onClick={this.props.onDeleteResult}
                    >
                        {strResult.value}
                    </li>
                ))}
            </ul>
        )
    }
}
```
*1: `.push()` manipulates the original value, while `.concat()` returns the old array plus the added argument as a new array. This way the array is updated immutable.

### -- 288. Updating Arrays Immutably
```js
// store/reducer.js:
const reducer = (state = initialState, action) => {
    switch (action.type) {
        ...
        case 'DELETE_RESULT':
            return {
                ...state,
                results: state.results.filter(result => { // *1
                    return result.id !== action.id
                }) 
            }
    }
}

// containers/Counter/Counter.js:
const mapDispatchToProps = dispatch => {
    return {
        ...
        onDeleteResult: (resultID) => dispatch({
            type: 'DELETE_RESULT',
            id: resultID // pass it as a payload for the action
        })
    }
};

class Counter extends Component {
    render() {
        return (
            ...
            <ul>
                {this.props.storedResults.map(strResult => (
                    <li key={strResult.id} 
                        onClick={() => this.props.onDeleteResult(strResult.id)} // wrap in an anonymous function to pass payload
                    >
                        {strResult.value}
                    /li>
                ))}
            </ul>
        )
    }
}
```
*1: `.splice()` mutates the original array. `.filter()` returns a new array. It takes a function and is executed on each element and adds it to the array when the condition is matched.

### -- 290. Outsourcing Action Types
```js
// store/actions.js:
export const INCREMENT = 'INCREMENT';
...
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// store/reducer.js
import * as actionTypes from './actions';

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.INCREMENT: 
            return {
                ...state,
                counter: state.counter + 1
            }
        ...
        case actionTypes.STORE_RESULT:
        ...
        case actionTypes.DELETE_RESULT:
        ...
    }
}
// containers/Counter/Counter.js:
import * as actionTypes from './../../store/actions';

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({
            type: actionTypes.INCREMENT
        }),
        ...
        onStoreResult: () => dispatch({
            type: actionTypes.STORE_RESULT
        }),
        onDeleteResult: (resultID) => dispatch({
            type: actionTypes.DELETE_RESULT,
            ...
        })
    }
};
```
### -- 291. Combining Multipe Reducers
Split the reducer into multiple reducers in a "reducers"-folder.

```js
// in store/reducers/counter.js:
import * as actionTypes from './../actions';

const initialState = {
    counter: 0
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.INCREMENT: 
            return {
                ...state,
                counter: state.counter + 1
            }
        ... 
    }
    return state;
}

export default reducer;

// in store/reducers/result.js:
import * as actionTypes from './../actions';

const initialState = {
    results: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        ...
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: action.val // VALUE NEEDS TO BE PASSED THROUGH PAYLOAD
                })
            }
        case actionTypes.DELETE_RESULT:
        ...
    }
    return state;
}

export default reducer;

// in index.js:
import { createStore, combineReducers } from 'redux'; // ADD HELPER FUNCTION "combineReducers"

// import reducer from './store/reducer'; FILE DELETED
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducer = combineReducers({
    counterReducer,
    resultReducer
});
// const store = createStore(reducer);
const store = createStore(rootReducer);

// in containers/Counter/Counter.js:
class Counter extends Component {
    render() {
        return (
            ...
            <button onClick={() => this.props.onStoreResults(this.props.ctr)}>Store Result</button> // WRAP IN AN ANONYMOUS FUNCTION TO PASS DATA
            ...
        );
    }
}

const mapStateToProps = state => {
    return {
        // ctr: state.counter 
        ctr: state.counterReducer.counter,
        // storedResults = state.results
        storedResults = state.resultReducer.results
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onStoreResults: (result) => dispatch({
            type: actionTypes.STORE_RESULTS.
            val: result
        })
    };
};
```

