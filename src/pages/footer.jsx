import React from "react";
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
     <div className="container-fluid text-center">
       <div className="row pt-2 pb-2">
        <a href="https://github.com/garzalab"><FaGithub size="2em" color="#3c3c3c"/></a>
       </div>
     </div>
      <div className="text-center p-3" style={{backgroundColor: '#3c3c3c',color:'#f8f9fa'}}>
        © 2020 Copyright
      </div>
    </footer>
  );
}

export default Footer;
