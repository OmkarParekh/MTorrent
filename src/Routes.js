import React from "react";
import {BrowserRouter as Router ,Route} from "react-router-dom";
import Home from "./Pages/Home"
import rp from "./Pages/respage"
import tr from "./Pages/Trending"
import po from "./Pages/Popular"
import Nav from "./Components/nav/navbar"

export default () => (
    <Router>
        <Nav/>
       <Route path="/" exact component={Home} />
       <Route path="/Search" exact component={rp} />
       <Route path="/Trending" exact component={tr} />
       <Route path="/Popular" exact component={po} />

 
    </Router>
    
)
