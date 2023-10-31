# Stateful React Components

## Overview

### State and Props

There are two types of “model” data in React: props and state. The two are very different:

  - **Props** are like arguments you pass to a function. They let a parent component pass data to a child component and customize its appearance. For example, a Form can pass a color prop to a Button.
  - **State** is like a component’s memory. It lets a component keep track of some information and change it in response to interactions. For example, a Button might keep track of isHovered state.

Props and state are different, but they work together. A parent component will often keep some information in state (so that it can change it), and pass it down to child components as their props. It’s okay if the difference still feels fuzzy on the first read. It takes a bit of practice for it to really stick!

### Events and Event Handlers

Event Handlers let us add interactivity to our components by responding to events that the user executes. 

Example events include 

- clicking a button (onClick),
- hovering over an element (onMouseOver),
- or pressing a key (onKeyDown) and many more. 

State and Event Handlers work toegether to add and track the interactivity of our components. State is the internal memory of the component, and Event Handlers are functions that update that memory.

Some conventions for naming event handlers:

  * `handleEventName` for functions defined in a component
  * `onEventName` for props passed to a component

## Example Snippets and Code

Passing the `handleClick` function to the `onClick` prop of an interactive component:
_Note: don't call the function as you pass it in_: `onClick={handleClick}` instead of `onClick={handleClick()}`
```jsx
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return <button onClick={handleClick}>Click me!</button>;
}
```

Passing the `handleButtonClick` function to a custom `onButtonClick` prop of our own interactive component:
```jsx
function App() {
  // it's convention to call the handler function `handleEventName`, so I chose `handleButtonClick`
  function handleButtonClick() {
    alert('You clicked me!');
  }

  // it's convention to call the prop `onEventName`, so I chose `onButtonClick`
  return <MyButton onButtonClick={handleButtonClick}>Click Me!</MyButton>
}

interface MyButtonProps {
  onButtonClick: () => void;
}

function MyButton(props: MyButtonProps) {
  return <button onClick={props.onButtonClick}>{props.children}</button>;
}
```

Updating state using an event handler:
```jsx
function MyCounter() {
  const [count, setCount] = useState(0)

  function handleIncrement() {
    setCount(count + 1) // or setCount((prevCount) => prevCount + 1)
  }

  return (
    <div>
      <p>The current count is {count}</p>
      <button onClick={handleIncrement}>Add 1</button>
    </div>
  )
}
```

Some very helpful resources:

- [Thinking in React](https://react.dev/learn/thinking-in-react)
- [State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
- [Responding To Events](https://react.dev/learn/responding-to-events)
- [Event Handler Attributes](https://www.w3schools.com/tags/ref_eventattributes.asp)