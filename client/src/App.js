
import API from "./utils/API"
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// Linked Pages:
import Home from "./components/Home"
import About from "./components/About"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Component, useState, useEffect } from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import OuterRingContext from "./utils/OuterRingContext"

function App() {
    const [outerRingState, setOuterRingState] = useState({
        rotation:0,
    });

   // const location = useLocation();
return (
    <div className="container-fluid main-cont">
    <Router>
        <div className="inner-ring">
                <OuterRingContext.Provider value={outerRingState}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />            
                </OuterRingContext.Provider>
        </div>      
        <div className="outer-ring"></div>

        <div className="main-ring">     
            <div className="top menu-item">
                <div className="home">
                    <div> 
                        {/* <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>                                        */}
                        <Link to="/">
                            HOME    
                        </Link>                    
                    </div>
                    <div><i className="fas fa-home"></i></div>
                </div>
            </div>
            <div className="left menu-item">
                <div className="about">             
                <Link to="/about">               
                    <div>             
                        ABOUT
                    </div>
                    <div><i className="fas fa-address-card"></i></div>
                </Link>
                </div>
            </div>           
            <div className="right-cont">
                <div className="right menu-item">    
                    <div className="web">
                        <div>CODE</div>
                       <div><i className="fas fa-code"></i></div>
                    </div>
                </div>
            </div>
            <div className="bottom menu-item">
                <div><i className="fas fa-music"></i></div>
                <div className="music">
                    MUSIC
                </div>
            </div>      
        </div>
                      
        </Router>
    </div>



    );  
}

export default App;
