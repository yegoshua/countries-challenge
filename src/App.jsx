import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import Deatails from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header></Header>
      <Main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="country/:name" element={<Deatails />} />
          <Route element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
