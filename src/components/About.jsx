import React from "react";
import Spinner from "./common/spinner";
import "./css/about.css";

function About(props) {
  return (
    <div id="aboutdiv">
      <h1>About this App</h1>
      <h4>App to search for GitHub users</h4>
      <p>version: 1.0.0</p>
      <p>
        made by: <strong>Farouk Ibrahim</strong>
      </p>
    </div>
  );
}

export default About;
