import { BrowserRouter, Route, Routes  } from "react-router-dom";
import PageNotFoundPage from "./pages/PageNotFound";
import { ChakraProvider } from "@chakra-ui/react";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import ChatGPT from "./components/ChatGPT";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/chat" element={ <ChatGPT /> }/>
          <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
