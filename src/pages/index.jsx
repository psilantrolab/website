import React from 'react';
import { Timeline } from 'react-twitter-widgets'
import './styles.css';
import Navigation from './navigation';
import Footer from './footer';


function MainPage(){
    return (
        <div>
            <Navigation/>
            <div className="container" style={{minHeight:'65vh'}}>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-5">
                        <h3>About</h3>
                        <hr/>
                        <div className="row">
                            <img src="/images/group4.jpg" className="img-fluid align-self-center" alt="" />
                        </div>
                        <div className="row mt-3">
                            <p>
                                We are a research group, within the <a target="_blank" rel="noreferrer"  href="www.lanirem.inb.unam.mx"> National MRI Laboratory (LANIREM)</a>, at the <a target="_blank" rel="noreferrer"  href="http://inb.unam.mx/index.html">Institute of Neurobiology</a>, <a target="_blank" rel="noreferrer"  href="https://www.unam.mx/">National Autonomous University of Mexico (UNAM)</a>  in Querétaro, Mexico.
                            </p>
                            <p>
                                Our mission is to conduct rigurous basic research focused on finding behavioral, neuroimaging, and other biological biomarkers in substance use disorders and other neuropsychiatric disorders, to use this knowledge to tackle applied and clinical questions, such as researching new treatments like neuromodulation.
                            </p>
                            <p>
                                <strong>Lines of research</strong> 
                            </p>
                            <span>
                                <ul>
                                    <li>Frontostriatal system in substance use and addiction, and neuropsychiatric disorders.</li>
                                    <li>Identification of neuroimaging biomarkers in humans and animal models.</li>
                                    <li>Action mechanisms and possible uses of neuromodulation methods.</li>
                                </ul>
                            </span>
                            <p>
                                <strong>
                                    Member of National & International Consortiums
                                </strong>
                            </p>
                            <span>
                                <ul>
                                    <li><a target="_blank" rel="noreferrer"  href="https://www.enigmaaddictionconsortium.com/">ENIGMA-Addiction World-wide Consortium.</a></li>
                                    <li>International Networks of tES /TMS Trials for Addiction Medicine (INTAM). <a target="_blank" rel="noreferrer"  href="https://twitter.com/INTAM_Network">@INTAM_Network.</a></li>
                                    <li><a target="_blank" rel="noreferrer"  href="http://fcon_1000.projects.nitrc.org/indi/indiPRIME.html">PRIMatE Data Exchange (PRIME-DE) Consortium.</a></li>
                                    <li>Mexico Borderline Personality Disorder (BDP) Research Group.</li>
                                </ul>
                            </span>
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
            <Footer/>        </div>
    );
}

export default MainPage;
