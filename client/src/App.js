
import API from "./utils/API"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component, useState, useEffect } from "react";

// There are four items in the state. image is the profile pic of the current user (set to a placeholder initially)
// info is the user data, which is initially an empty object. 
// originalDir is the full array of user objects, downloaded once from randomusers.me
// displayDir is the array of user objects that we are current displaying in the list. This array can be sorted,
// filtered, and otherwise changed, while originalDir remains intact.
function App() {

  useEffect(()=>{
    console.log("HI");
    document.getElementById("hero-image").style.opacity="100";
    });



return (
    <div className="container-fluid main-cont">
        <div className="inner-ring">
            <div id="hero-image"></div>
        </div>
        <div className="outer-ring"></div>

        <div className="main-ring">
            <div className="top menu-item">
                <div className="home">
                    <div>HOME</div>
                    <div><i className="fas fa-home"></i></div>
                </div>
            </div>
            <div className="left menu-item">
                <div className="about">
                    <div>ABOUT</div>
                    <div><i className="fas fa-address-card"></i></div>
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
                <div className="music">
                <div><i className="fas fa-music"></i></div>
                <div>MUSIC</div>
            </div>
        </div>
        
        </div>
    </div>



    );  
}

export default App;
