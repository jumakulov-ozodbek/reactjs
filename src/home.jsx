
import Home from './home';

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // App.js komponentini import qilish

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
