import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import SearchPage from "./pages/Searchpage";
import SearchResults from "./pages/SearchResults";
import ItemPage from "./pages/ItemPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyCollections from "./pages/MyCollections";
import ViewCollections from "./pages/ViewCollections";

function App() {
  return (
    <div className="font-sans bg-bgcolor text-black flex flex-col min-h-screen">
      <Header />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route
            path="/search/:search_query/:page_number"
            element={<SearchResults />}
          />
          <Route path="/collections" element={<ViewCollections />} />
          <Route path="/item/:item_id" element={<ItemPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mycollection/:user_id" element={<MyCollections />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
