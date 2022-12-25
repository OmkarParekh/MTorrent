import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import Search from "./Pages/Search/Search"
import Trending from "./Pages/Trending/Trending"
import Popular from "./Pages/Popular/Popular"
import Top from "./Pages/Top/Top"
import Nav from "./Components/nav/navbar"
const rout = () => (
    <Router>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/Search/:keyword" exact component={Search} />
        <Route path="/Trending" exact component={Trending} />
        <Route path="/Popular" exact component={Popular} />
        <Route path="/Top" exact component={Top} />


    </Router>

)
export default rout
