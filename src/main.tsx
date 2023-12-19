import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryProvider } from "./lib/react-query/QueryProvider.tsx";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <App />
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
