import React from "react";
import Header from "./heder/header";
import Hero from "./components/Hero";
import Categories from "./components/Categories/Categories"; 
import Recipes from './components/Recipes/Recipes';
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <Recipes />

    </>
  );
}

export default App;