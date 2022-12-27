import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component ={Home}/>
          <Route exact path="/About" component ={About}/>
          <Route exact path="/Contact" component ={Contact}/>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
