import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import ReactDOM from 'react-dom/client'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { ThemeProvider } from "./providers/ThemeContext";

// Initialize AOS
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);