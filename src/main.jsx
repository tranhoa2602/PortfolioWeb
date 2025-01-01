import React from "react"; // Import React để đảm bảo tương thích
import ReactDOM from "react-dom/client"; // Sử dụng `react-dom/client` cho phiên bản React 18+
import "./index.css"; // Import file CSS chính
import App from "./App.jsx"; // Import component chính của ứng dụng

// Render ứng dụng React vào DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
