import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import './styles.css';

function Navigation(){
    return(
        <div>
            <Header/>
            <Navbar/>
        </div>
    );
}

const Header = () =>{
    return(
        <div className="header">
            <div className="row text-center fs-2 text-light h-100 align-items-center">
                <div className="col-12">
                    Computational and Translational <br/> Neuropsychiatry Lab
                </div>
            </div>
        </div>
    );
}

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'rgb(60,60,60)'}}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/people">People</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/publications">Pulications</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/resources">Resources</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/collaborators">Collaborators</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default withRouter(Navigation);