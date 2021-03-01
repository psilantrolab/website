import React from "react";
import Navigation from './navigation';
import Footer from './footer';

function CollaboratorsPage(){
    return(
        <div>
            <Navigation/>
            <div className="container" style={{minHeight:'65vh'}}>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-5">
                        <h3>Lab Collaborators</h3>
                        <hr/>
                        International
                        <ul>
                            <li><a  target="_blank" rel="noreferrer" href="https://douglas.research.mcgill.ca/mallar-chakravarty">M. Mallar Chakravarty, PhD</a>,<a target="_blank" rel="noreferrer"  href="http://cobralab.ca/">CoBrA Lab</a>, Douglas Mental Health University Institute, University of Montreal, Canada.</li>
                            <li><a  target="_blank" rel="noreferrer"  href="https://www.iiit.ac.in/people/faculty/vinoo-alluri/">Vinoo Alluri, PhD</a>, International Institute of Information Technology Hyderabad, India.</li>
                            <li><a  target="_blank" rel="noreferrer"  href="https://scmia.edu.in/head">Prof. Madhura Ingalhalikar, PhD</a> ,<a target="_blank" rel="noreferrer"  href="https://scmia.edu.in/">Symbiosis Centre for Medical Image Analysis</a> , Symbiosis International University, </li>India.
                            <li><a target="_blank" rel="noreferrer"  href="https://www.nki.rfmh.org/faculty/f-xavier-castellanos-md">Francisco Xavier Castellanos, M.D.</a>, NYU-Langone Medical Center & Nathan Kline Institute, USA.</li>
                            <li><a target="_blank" rel="noreferrer"  href="https://pure.au.dk/portal/en/persons/christine-parsons(8828f773-0764-4eb0-959d-3357956aec4f).html">Christine Parsons, PhD</a>, Interactive Minds Centre, University of Aarhus, Denmark.</li>
                            <li><a target="_blank" rel="noreferrer"  href="https://www.rug.nl/staff/a.aleman/">Prof. André Aleman, PhD</a>, University of Groningen, Netherlands.</li>
                        </ul>

                        Mexico
                        <ul>
                            <li><a target="_blank" rel="noreferrer"  href="http://personal.inb.unam.mx/lconcha/">Luis Concha, MD, PhD</a>, Brain Connectivity Lab, Institute of Neurobiology, UNAM.</li>
                            <li><a target="_blank" rel="noreferrer"  href="https://scholar.google.com/citations?user=fAzVWFQAAAAJ&hl=en">Sarael Alcauter-Solorzano, PhD</a>, Brain Mapping Lab, Institute of Neurobiology, UNAM.</li>
                            <li><a target="_blank" rel="noreferrer"  href="http://132.248.142.23/web_site/home_pages/27">Fernando A. Barrios, PhD</a>, Brain Mapping Lab, Institute of Neurobiology, UNAM.</li>
                            <li><a target="_blank" rel="noreferrer"  href="https://scholar.google.com.mx/citations?user=XJ15liMAAAAJ&hl=es">Ruth Alcalá-Lozano, MD, MSc</a>, Instituto Nacional de Psiquiatría “Ramón de la Fuente Muñiz”.</li>
                            <li><a target="_blank" rel="noreferrer"  href="https://scholar.google.com.mx/citations?user=4rbm3UYAAAAJ&hl=en">Alberto Camacho-Morales, PhD</a>, Universidad Autónoma de Nuevo León.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default CollaboratorsPage;