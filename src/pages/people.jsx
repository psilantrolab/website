import React from "react";
import Navigation from './navigation';
import Footer from './footer';

function PeoplePage(){
    return(
        <div>
            <Navigation/>
            <div className="container" style={{minHeight:'65vh'}}>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-5">
                    <h3>People</h3>
                    <hr/>
                    <h3>Lab Leader(PI)</h3>
                    <hr/>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/ed_2021.jpg" alt="" className="h-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Eduardo A. Garza-Villarreal, M.D., Ph.D.</h5>
                                    <p className="card-text">Assistant Professor, Institute of Neurobiology, UNAM, Mexico.</p>
                                </div>
                            </div>
                            <div className="card-footer"><a target="_blank" rel="noreferrer"  href="https://egarza.github.io/"> Personal Website</a> - <a target="_blank" rel="noreferrer"  href="https://github.com/egarza">Github</a>  - <a target="_blank" rel="noreferrer"  href="https://twitter.com/egarzav">Twitter</a>  - <a target="_blank" rel="noreferrer"  href="https://www.researchgate.net/profile/Eduardo_Garza_Villarreal">ResearchGate</a>  - <a target="_blank" rel="noreferrer"  href="https://scholar.google.com/citations?user=bX502bUAAAAJ&hl=en">Google Scholar</a>  - <a target="_blank" rel="noreferrer"  href="https://osf.io/uc6aj/"> OSF</a> - <a target="_blank" rel="noreferrer"  href="https://orcid.org/0000-0003-1381-8648">ORCID</a></div>
                        </div>
                    </div>
                    <h3>PhD students</h3>
                    <hr/>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/thania.jpg" alt="" className="h-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"> Thania Balducci, M.D., M.Sc., Medical Sciences.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/jalil.jpg" alt="" className="h-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"> Jalil Rasgado-Toledo, M.Sc., Neurobiology.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Master students</h3>
                    <hr/>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/diegoe.jpg" alt="" className="h-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Diego E. Ortuzar-Martínez, BSc, Neurobiology</h5>
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
                                    <h5 className="card-title">Alejandra Lopez-Castro, M.D., Neurobiology</h5>
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
                                    <h5 className="card-title">Diego Angeles-Valdez, B.A., Neurobiology</h5>
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
                                    <h5 className="card-title">Alan Davalos, M.D., Medical Sciences</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Bachelor students</h3>
                    <hr/>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/victori.jpg" alt="" className="h-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Victor Issa-García, M.D.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Research Assistants</h3>
                    <hr/>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/maya.jpg" alt="" className="h-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Juan Pablo Maya-Arteaga, M.D.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/fajardo.jpg" alt="" className="h-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Alfonso Fajardo, M.Sc.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/rojas.jpg" alt="" className="h-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Eduardo Rojas-Hortelano, M.Sc.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>External students (co-supervising)</h3>
                    <hr/>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 align-self-center text-center">
                                <img src="/images/luis.jpg" alt="" className="h-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Luis A. Trujillo, M.Sc., Biochemistry</h5>
                                    <p className="card-text">Ph.D. Student, Universidad Autónoma de Nuevo León. Supervisor: <a target="_blank" rel="noreferrer"  href="https://scholar.google.com.mx/citations?user=4rbm3UYAAAAJ&hl=en">Alberto Camacho</a></p>
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
                                    <h5 className="card-title">Said Jimenez, M.Sc., Psychology.</h5>
                                    <p className="card-text">Ph.D. Student, Faculty of Psychology, UNAM. Supervisor: <a target="_blank" rel="noreferrer"  href="http://psicologia.posgrado.unam.mx/juan-jose-sanchez-sosa/">Juan José Sanchez Sosa</a></p>
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
                                    <h5 className="card-title">Victor Pando, M.Sc.</h5>
                                    <p className="card-text">Ph.D. Student, University of Aarhus, Denmark. Supervisor: <a target="_blank" rel="noreferrer"  href="https://scholar.google.com/citations?user=DkKlEL0AAAAJ&hl=en&oi=ao">Peter Vuust</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Alumni</h3>
                    <hr/>
                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-3 text-center align-items-center align-self-center">
                                <img src="/images/arun.jpg" alt="" className="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Arun Garimella, Computer Sciences</h5>
                                    <p className="card-text">(Currrently RA at Computational Neuroscience)<br/>Labs, <strong>ATR Institute International</strong>, Kyoto, Japan</p>
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
                                    <h5 className="card-title">Alely Valencia, B.A.</h5>
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
                                    <h5 className="card-title">Sofia Fernandez, M.Sc</h5>
                                    <p className="card-text">(Currently <strong>PhD student</strong> at Louis Collins Lab in <strong>McGill University </strong>)</p>
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
                                    <h5 className="card-title">Sigrid Lunde, Ph.D</h5>
                                    <p className="card-text">(Currently <strong>PostDoc</strong> at the Department of Psychology and Behavioral Sciences in <strong>University of Aarhus</strong>)</p>
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
                                    <h5 className="card-title">Viviana Villicaña, B.A.</h5>
                                    <p className="card-text">(Currently <strong>MSc student</strong> at NeuroBIM-Bordeaux International Master of Neurosciences in <strong>University of Bordeaux</strong>)</p>
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
                                    <h5 className="card-title">Josue Mendoza, B.A.</h5>
                                    <p className="card-text">(Currently: <strong>Specialty</strong> in Applied Statistics from the <strong>IMAS UNAM</strong>)</p>
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
                                    <h5 className="card-title">Pamela Palacios, M.Sc</h5>
                                    <p className="card-text">(Currently: <strong>Psychological Examiner</strong> at <strong>St. Jude Children’s Research Hospital Memphis, Tennessee</strong>)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                <h3>Group Photos</h3>
                <hr/>
                <div className="card mb-4" style={{width: '100%'}}>
                        <img src="/images/group5.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <p className="card-text">The team on Pandemic Meetings 2021.</p>
                        </div>
                    </div>
                <div className="card mb-4" style={{width: '100%'}}>
                        <img src="/images/group4.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <p className="card-text">The team at the CIMAT Neuroimaging Meeting 2019 in Guanajuato, Mexico.</p>
                        </div>
                    </div>
                <div className="card mb-4" style={{width: '100%'}}>
                        <img src="/images/group3.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <p className="card-text">The team at the National Institute Psychiatry. From left to right, bottom: Alan, Diego, Alejandra, Thania, Viviana; top: Said, Ruth, Eduardo, Alely, Sofia.</p>
                        </div>
                    </div>
                <div className="card mb-4" style={{width: '100%'}}>
                        <img src="/images/group1.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <p className="card-text">At the CIMAT Neuroimaging Meeting 2018 in Guanajuato, Mexico.</p>
                        </div>
                    </div>
                <div className="card mb-4" style={{width: '100%'}}>
                        <img src="/images/group2.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <p className="card-text">At the OHBM Meeting 2016 in Vancouver, Canada.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Footer/>
        </div>
    );
}

export default PeoplePage;
