import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import SearchPage from "./pages/Searchpage";
import ViewCollections from "./pages/ViewCollections";

function App() {
  return (
    <html lang="en">
      <body className="font-sans bg-black text-black flex flex-col h-dvh">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/collections" element={<ViewCollections />} />
        </Routes>
        <Footer />
      </body>
    </html>
  );
}

export default App;
