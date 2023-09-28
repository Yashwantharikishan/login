import React, { useState } from "react";
import PhoneVerify from "./Components/PhoneVerify";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/LoginPage";
import Layout from "./Components/Layout";

function App() {
  const [user, setUser] = useState(null);
  console.log(user);

  return (
    <Layout user={user} setUser={setUser}>
      <BrowserRouter className="flex flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<Login setUser={setUser} user={user} />} />
          <Route path="/phoneVerify" element={<PhoneVerify />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
