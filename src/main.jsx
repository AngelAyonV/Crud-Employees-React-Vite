import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import EmployeesApp from "./components/EmployeesApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EmployeesApp />
  </StrictMode>
);
