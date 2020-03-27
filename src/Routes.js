import React from "react";
import {BrowserRouter as Router ,Route} from "react-router-dom";
import Home from "./Pages/Home"
import rp from "./Pages/respage"
import Nav from "./Components/nav/navbar"

export default () => (
    <Router>
        <Nav/>
       <Route path="/" exact component={Home} />
       <Route path="/Search" exact component={rp} />

 
    </Router>
    
)
