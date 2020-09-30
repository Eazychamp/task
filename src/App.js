import React from "react";
import Main from "./components/main";
// import Login from "./components/login";
import Restaurants from "./components/resturants";
import Register from "./components/register";
import { Switch, Route } from "react-router-dom";
import "./static/main.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
  return (
    <div className='main-container'>
      <Switch>
        <Route exact path="/resturants" component={Restaurants} />
        <Route exact path="/" component={Main} />
        <Route exact path="/register" component={Register} />
      </Switch>
      {/* <Main /> */}
    </div>
  );
}