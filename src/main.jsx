import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyles from "./styles/GlobalStyles.jsx";
import "./styles/styles.css";
import { MyProfile } from "./components/others/MyProfile.jsx";
import { createPortal } from "react-dom";
import store from "./services/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
    {createPortal(<MyProfile />, document.body)}
  </React.StrictMode>
);
