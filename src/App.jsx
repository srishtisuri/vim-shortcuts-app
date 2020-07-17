import React from "react";
import "./App.css";
import AddShortcut from "./components/AddShortcut";
import Shortcuts from "./components/Shortcuts";
import TopNav from "./components/Navbar";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <TopNav />
      <Header />
      <AddShortcut />
      <Shortcuts />
    </div>
  );
};

export default App;
