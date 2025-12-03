import React from "react";
import Header from "./heder/header";
import Hero from "./components/Hero";
import Categories from "./components/Categories/Categories"; // ← Виправлений шлях
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
    </>
  );
}

export default App;