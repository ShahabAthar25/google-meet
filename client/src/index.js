import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-8271s11u.us.auth0.com"
      clientId="pq45l8gEVl2sS7NCvagP5RcE64CQBa7Q"
      redirectUri={window.location.origin}
      audience="https://google-meet-api.com"
      scope="openid profile email"
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
