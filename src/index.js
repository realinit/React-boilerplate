import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles.css";
import "./styles.scss";
import "./styles.less";


var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Nitin" />, mountNode);