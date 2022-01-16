---
title: "All you need to know about React Hooks."
date: "17-11-2021"
---

[Readers: 2169](https://dev.to/pratham10/all-you-need-to-know-about-react-hooks-54p0)

### What are React Hooks ?

React hooks are nothing but JavaScript functions that let you hook into React state and lifecycle features from function components.

_(Note: Hooks can only be used inside function components.)_

Hooks allow you to add state to add state to functional components and to share logic across components.

![Basics](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iu45jrtu2o5hpej75u8u.png)

**Benefits of using React hooks.**

There are three key advantages to using React Hooks: reusability, readability, and testability.

**Hooks made the React lifecycle easier**

When using lifecycle in class components, the componentDidMount(), componentDidUpdate(), componentWillUnmount() methods are handled individually, but when using React hooks, you can just do everything through the useEffect hook.

![Hooks: under the hood](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/phu4s1tjqwucspw22g7q.png)

### Rules of Hooks.

- We can use React Hooks inside function components only.

- Only call hooks at top level. You cannot call hooks inside loops, conditions, or nested functions, they should always be called at the top of function component.

- You cannot call hooks from regular JavaScript functions.

### Built-in and Custom hooks.

React have few built-in hooks like useEffect, useState. You can also create your own custom hooks in React.

**Some common built-in hooks**

- useState

useState hook allows you to add state variables in functional components. In useState you pass the initial state to the function and it returns a variable with a value and one function to update the value.

Let's look at the example below

```
import { useState } from 'react';

function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

The above example increments the counter on the handler function parameter itself.
Here, the initial value of the counter is 0, then setCount function is used to update the value of counter.

- useEffect

To understand the useEffect hook you first need to understand lifecycle of the component. The lifecycle of the component contains three main parts i.e. mounting, updating and unmounting.

mounting: when the page loads
updating: when the state updates
unmounting: when user leaves the page

Example:

```
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

```

Read more here: [useEffect hooks](https://reactjs.org/docs/hooks-overview.html)

**Additional built-in Hooks**

- useContext
- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

### Conclusion

Thank you for reading, If you enjoyed this post drop a like and comment your thoughts.

**IF YOU LIKED THE POST, THEN YOU CAN BUY ME MY FIRST COFFEE EVER, THANK YOU**

<a href="https://www.buymeacoffee.com/pratham10" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

**Follow me on twitter.**

[![](https://thepracticaldev.s3.amazonaws.com/i/gmrz82bjwhej1f1iqb1e.png)](https://twitter.com/pratham__10)
