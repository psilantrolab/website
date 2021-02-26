import { Link, withRouter } from "react-router-dom";
import '../styles.css';

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
                    Laboratorio de Neuropsiquiatría Computacional y Traslacional <div className="fs-5">(PSILANTRO Lab)</div>
                </div>
            </div>
            <div className="logo-container hide">
                <img src="/images/logo_transp.png" alt="" className="logo-img"/>
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
                            <Link className={`nav-link ${window.location.pathname === "/home_es" ? "active" : ""}`} to="/home_es">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${window.location.pathname === "/people_es" ? "active" : ""}`} to="/people_es">Personas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${window.location.pathname === "/publications_es" ? "active" : ""}`} to="/publications_es">Publicaciones</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${window.location.pathname === "/resources_es" ? "active" : ""}`} to="/resources_es">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${window.location.pathname === "/collaborators_es" ? "active" : ""}`} to="/collaborators_es">Colaboradores</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${window.location.pathname === "/contact_es" ? "active" : ""}`} to="/contact_es">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default withRouter(Navigation);