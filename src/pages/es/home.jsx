import React from 'react';
import { Timeline } from 'react-twitter-widgets'
import '../styles.css';
import Navigation from './navigation';
import Footer from '../footer';

function About_es(){
    return (
        <div>
            <Navigation/>
            <div className="container" style={{minHeight:'65vh'}}>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-5">
                        <h3>Nosotros</h3>
                        <hr/>
                        <div className="row">
                            <img src="/images/group4.jpg" className="img-fluid align-self-center" alt="" />
                        </div>
                        <div className="row mt-3">
                            <p>
                                Somos un grupo de investigación como parte del Laboratorio Nacional de Imagenología por Resonancia Magnética, en el Instituto de Neurobiología de la UNAM campus Juriquilla en Querétaro, México.
                            </p>
                            <p>
                                Nuestra misión es realizar investigación científica básica rigurosa enfocada en encontrar biomarcadores de comportamiento, neuroimagen y otros marcadores biológicos en trastornos por uso de sustancias y otros trastornos neuropsiquiátricos, y hacer uso de este conocimiento para responder preguntas científicas aplicadas y clínicas, así como la búsqueda de nuevos tratamientos como la neuromodulación.
                            </p>
                            <p>
                                <strong>Líneas de investigación</strong> 
                            </p>
                            <p>
                                <ul>
                                    <li>Sistema frontoestriatal en desórdenes de uso de sustancias y neuropsiquiátricos.</li>
                                    <li>Identificación de biomarcadores de neuroimagen en humanos y modelos animales.</li>
                                    <li>Mecanismos de acción y posibles usos de métodos de neuromodulación.</li>
                                </ul>
                            </p>
                            <p>
                                <strong>
                                    Miembros de Consorcios nacionales e internacionales
                                </strong>
                            </p>
                            <p>
                                <ul>
                                    <li><a target="_blank"  href="https://www.enigmaaddictionconsortium.com/">Consorcio Mundial ENIGMA-Addiction.</a></li>
                                    <li>International Networks of tES /TMS Trials for Addiction Medicine (INTAM). <a target="_blank"  href="https://twitter.com/INTAM_Network">@INTAM_Network.</a></li>
                                    <li><a target="_blank"  href="http://fcon_1000.projects.nitrc.org/indi/indiPRIME.html">Consorcio PRIMatE Data Exchange (PRIME-DE).</a></li>
                                    <li>Grupo de Investigación sobre Trastorno Límite de la Personalidad México.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mt-5 text-center">
                            <Timeline
                        dataSource={{
                            sourceType: "LabGarza",
                            screenName: "LabGarza"
                        }}
                        options={{
                            height: "700",
                            width: "270"
                        }}
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    );
}

export default About_es;
