import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import RestaurantList from "./components/exercises-list.component";

import CreateRestaurant from "./components/create-exercise.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={RestaurantList} />

        <Route path="/create" component={CreateRestaurant} />
      </div>
    </Router>
  );
}

export default App;
