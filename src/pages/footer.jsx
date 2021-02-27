import React from "react";
import { FaGithub } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start" >
     <div className="container-fluid text-center">
      <h5 className="text-uppercase">Links</h5>
       <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col text-end">
              <h6>
                <Link to="/home_es" className="text-dark">Es</Link>
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col text-end">
              <h6>  
                <Link to="/" className="text-dark">En</Link>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-6">
        <div className="row text-start">
          <a href="https://github.com/garzalab"><FaGithub size="2em" color="#3c3c3c"/></a>
        </div>
        </div>
       </div>
      </div>
      <div className="text-center p-3" style={{backgroundColor: '#3c3c3c',color:'#f8f9fa'}}>
        © 2020 Copyright
      </div>
    </footer>
  );
}

export default Footer;
