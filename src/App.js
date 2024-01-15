import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.siddharthatimalsina.com.np/">
           website
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.facebook.com/timalsina11/">
         siddhartha timalsina
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://github.com/timalsina2000">
          siddhartha 
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;


