import React from "react";
import Navigation from './navigation';
import Footer from '../footer';

function PeoplePage_es(){
    return(
        <div>
            <Navigation/>
            <div className="container" style={{minHeight:'65vh'}}>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-5">
                    <h3>Personas</h3>
                    <hr/>
                    <h3>Investigador Principal</h3>
                    <hr/>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/ed_2018.jpg" alt="" className="h-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Dr. Eduardo A. Garza Villarreal</h5>
                                    <p className="card-text">Doctor en Medicina y Neurociencias<br/>Investigador Asociado C, Instituto de Neurobiología
                                        UNAM, Mexico
                                    </p>
                                </div>
                            </div>
                            <div className="card-footer"><a target="_blank"  href="https://egarza.github.io/">Website Personal</a> - <a target="_blank"  href="https://github.com/egarza">Github</a>  - <a target="_blank"  href="https://twitter.com/egarzav">Twitter</a>  - <a target="_blank"  href="https://www.researchgate.net/profile/Eduardo_Garza_Villarreal">ResearchGate</a>  - <a target="_blank"  href="https://scholar.google.com/citations?user=bX502bUAAAAJ&hl=en">Google Scholar</a>  - <a target="_blank"  href="https://osf.io/uc6aj/"> OSF</a> - <a target="_blank"  href="https://orcid.org/0000-0003-1381-8648">ORCID</a></div>
                        </div>
                    </div>
                    <h3>Estudiantes de Doctorado</h3>
                    <hr/>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/thania.jpg" alt="" className="h-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Dra. Thania Balducci García</h5>
                                    <p className="card-text">
                                        Ciencias Médicas UNAM-U de Gröningen
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Estudiantes de Maestr&iacute;a</h3>
                    <hr/>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/diegoe.jpg" alt="" className="h-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Lic. Diego E. Ortuzar Martínez</h5>
                                    <p className="card-text">Neurobiología</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/ale.jpg" alt="" className="h-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Dra. Alejandra López Castro</h5>
                                    <p className="card-text">Neurobiología</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/diego.jpg" alt="" className="h-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Lic. Diego Ángeles Valdéz</h5>
                                    <p className="card-text">Neurobiología</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/alan.jpg" alt="" className="h-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Dr. Álan Dávalos</h5>
                                    <p className="card-text">Ciencias Médicas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Asistentes de Investigaci&oacute;n</h3>
                    <hr/>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/jalil.jpg" alt="" className="h-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">M.C. Jalil Rasgado Toledo</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/maya.jpg" alt="" className="h-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Dr. Juan Pablo Maya Arteaga</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Estudiantes Externos (Co-supervisión)</h3>
                    <hr/>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/luis.jpg" alt="" className="h-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">M.C. Luis A. Trujillo</h5>
                                    <p className="card-text">Estudiante de Doctorado, Facultad de Medicina, Universidad Autónoma de Nuevo León. Supervisor: <a target="_blank"  href="https://scholar.google.com.mx/citations?user=4rbm3UYAAAAJ&hl=en">Alberto Camacho</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/said.jpg" alt="" className="h-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">M.C. Said Jimenez</h5>
                                    <p className="card-text">Estudiante de Doctorado, Facultad de Psicología, UNAM. Supervisor: <a target="_blank"  href="http://psicologia.posgrado.unam.mx/juan-jose-sanchez-sosa/">Juan Jos&eacute; S&aacute;nchez Sosa</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/victor.jpg" alt="" className="h-100" style={{maxHeight: '130px'}}/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">M.C. Victor Pando</h5>
                                    <p className="card-text">Estudiante de Doctorado, Center of Music in the Brain, Universidad de Aarhus, Dinamarca. Supervisor: <a target="_blank"  href="https://scholar.google.com/citations?user=DkKlEL0AAAAJ&hl=en&oi=ao">Peter Vuust</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Ex-Alumnos</h3>
                    <hr/>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 text-center align-items-center align-self-center">
                                <img src="/images/arun.jpg" alt="" className="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Arun Garimella </h5>
                                    <p className="card-text">Ciencias Computacionales (Actualmente Asistente de Investigación en Computational Neuroscience Labs, <strong>ATR Institute International</strong>, Kyoto, Japón)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/alely.jpg" alt="" className="h-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Lic. Alely Valencia</h5>
                                    <p className="card-text">(Actualmente Asistente de Investigación en Resonancia Magnética)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/sofia.jpg" alt="" className="h-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">M.C. Sofia Fernandez</h5>
                                    <p className="card-text">(Actualmente <strong>Estudiante de Doctorado</strong> en Louis Collins Lab <strong>Universidad de McGill</strong>, Canad&aacute;)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/sigrid.jpg" alt="" className="h-100" style={{maxHeight:'140px'}}/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Dra. Sigrid Lunde</h5>
                                    <p className="card-text">(Actualmente Investigadora <strong>Postdoctoral</strong>, <strong>Universidad de Aarhus</strong>)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 text-center align-self-center">
                                <img src="/images/viviana.jpg" alt="" className=""  style={{maxWidth: '100px'}}/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Lic. Viviana Villicaña</h5>
                                    <p className="card-text">(Actualmente <strong>Estudiante de Maestr&iacute;a</strong> en NeuroBIM-Bordeaux International Master of Neuroscience, <strong>Universidad de Bordeaux</strong>)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/josue.jpg" alt="" className="h-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Lic. Josu&eacute; Mendoza</h5>
                                    <p className="card-text">(Actualmente Estudiante de la <strong>Especialidad</strong> en Estadística Aplicada del <strong>IMAS UNAM</strong>)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/pame.jpg" alt="" className="h-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">M.C. Pamela Palacios</h5>
                                    <p className="card-text">(Actualmente Psicóloga en <strong>St. Jude Children’s Research Hospital, Memphis, Tennessee</strong>)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                <h3>Fotos Grupales</h3>
                <hr/>
                <div className="card mb-4" style={{width: '100%'}}>
                        <img src="/images/group4.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <p className="card-text">El equipo en la Reuni&oacute;n de Neuroimagen CIMAT 2019 en Guanajuato, M&eacute;xico</p>
                        </div>
                    </div>
                <div className="card mb-4" style={{width: '100%'}}>
                        <img src="/images/group3.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <p className="card-text">El equipo en el Instituto Nacional de Psiquiatría “Ram&oacute;n de la Fuente Muñiz”. De izquierda a derecha: Alan, Diego, Alejandra, Thania, Viviana; top: Said, Ruth, Eduardo, Alely, Sofia.</p>
                        </div>
                    </div>
                <div className="card mb-4" style={{width: '100%'}}>
                        <img src="/images/group1.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <p className="card-text">El equipo en la Reuni&oacute;n de Neuroimagen CIMAT 2018 en Guanajuato, México.</p>
                        </div>
                    </div>
                <div className="card mb-4" style={{width: '100%'}}>
                        <img src="/images/group2.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <p className="card-text">El equipo en la Reuni&oacute;n de la OHBM 2016 en Vancouver, Canad&aacute;.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Footer/>
        </div>
    );
}

export default PeoplePage_es;
