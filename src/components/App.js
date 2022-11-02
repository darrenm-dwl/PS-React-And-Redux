import React from "react";
import HomePage from "./home/HomePage";
import {Route, Switch} from "react-router-dom";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CourcesPage from "./cources/CourcesPage";

export default function App() {
    return (
        <div className="container-fluid">
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/courses" component={CourcesPage}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    );
}