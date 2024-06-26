import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const anotherElement = (
  <a href="https://www.google.com" target="_blank">Visit Google</a>
)

const newUser = "Bholenath"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: "_blank"
  },
  "Vist here",
  newUser
)



ReactDOM.createRoot(document.getElementById("root")).render(
  reactElement
);
