import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import VideoUpload from "./Pages/VideoUpload/VideoUpload";
import NavbarComponent from "./components/Navbar/Navbar";

function App() {
  return (
    <div className=" App">
      <BrowserRouter>
        <header>
          <NavbarComponent />
        </header>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/video/upload" component={VideoUpload} />
          <Route path="/video/:id" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
