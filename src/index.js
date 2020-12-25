import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";
ReactDOM.render(
  <SpeechProvider appId="157ed3ff-fddf-41f4-a754-61e519a6864b" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.querySelector("#root")
);
