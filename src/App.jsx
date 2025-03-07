import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import SearchPage from "./pages/Searchpage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyCollections from "./pages/MyCollections";
import ViewCollections from "./pages/ViewCollections";

function App() {
  return (
    <html lang="en">
      <body className="font-sans bg-bgcolor text-black flex flex-col h-dvh">
        <Header />
        <main className="">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/collections" element={<ViewCollections />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/mycollection/:user_id" element={<MyCollections />} />
          </Routes>
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default App;
