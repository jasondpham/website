import React, { useEffect, useState } from "react";
import "../styles/NavBar.css";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import useGoogle from "../hooks/useGoogle";

function NavBar() {
    const {profile, signIn, signOut} = useGoogle();
    return (
        <div className="NavBar">
            <a href="/">
                <img src={logo} alt="logoImage" className="logoImage"></img>
            </a>
            <div className="nav-links">
                <Link to="/home" className="link navbar-child">
                    Home
                </Link>
                <div className="navbar-child dropdown">
                    <Link to="/projects" className="drop-btn link">
                        Projects
                        <AiFillCaretDown />
                    </Link>

                    <div className="dropdown-content">
                        <Link
                            to="/projects/counter"
                            className="dropdown-link link"
                        >
                            Counter
                        </Link>
                        <Link
                            to="/projects/trivia"
                            className="dropdown-link link"
                        >
                            Trivia
                        </Link>
                        <Link className="dropdown-link link" to="/sandbox">
                            Sandbox
                        </Link>
                    </div>
                </div>
                {Object.keys(profile).length == 0 ? 
                 <div className="navbar-child" onClick={signIn}>Login with Google</div>
                 : <div className="navbar-child logout" onClick={signOut} > Hello, {profile.givenName + " " + profile.familyName}!
                  <p className='logout-msg' >Click here to log out.</p>
                  </div>}
                
            </div>
        </div>
    );
}

export default NavBar;
