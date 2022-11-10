import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Register from "./components/Register";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <div className="bg-slate-300 h-screen text-black">
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
