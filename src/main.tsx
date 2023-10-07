import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { WinnerProvider } from "./context/WinnerContext.tsx";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <WinnerProvider>
        <App />
      </WinnerProvider>
    </ChakraProvider>
  </React.StrictMode>
);
