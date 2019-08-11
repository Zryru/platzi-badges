import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'
import Badge from './components/Badge';
// const jsx = <h1>Hello, platzi Badges!</h1>;
// const element = React.createElement(
//   "a",
//   {
//     href: "https://platzi.com"
//   },
//   "Ir a platzi"
// );
// const name = "Zryru";
// const element = React.createElement(
//     "h1",
//     {},
//     `Hola soy, ${name}`
// )
// const jsx = <h1> Hola, soy {name}</h1>
const container = document.getElementById("root");

ReactDOM.render(<Badge />, container);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
