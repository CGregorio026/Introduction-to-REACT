import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App';

export const Welcome = (props) => {
    return <h1>Good Morning, {props.name} </h1>
}

ReactDOM.render(
    <Welcome name="Sara "/>, document.getElementById('app')
);


ReactDOM.render(<Welcome />,document.getElementById('app'))
// ReactDOM.render(<p>sidebar gang</p>,document.getElementById('sidebar'))

// function Welcome(props) {
//     return <h1>Hello, {props.name} </h1>
// }

// ReactDOM.render(
// <Welcome name="Sara"/>, document.getElementById('app')
// );