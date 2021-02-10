import React from 'react';
import {Link} from 'react-router-dom';
import { Timeline } from 'react-twitter-widgets'

function MainPage(){
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-5">
                    <div className="row">
                        <img src="/images/group4.jpg" className="img-fluid align-self-center" alt="" />
                    </div>
                    <div className="row mt-3">
                        <p>
                            We are a research group, within the National MRI Laboratory (LANIREM), at the Institute of Neurobiology, National Autonomous University of Mexico (UNAM) in Querétaro, Mexico.
                        </p>
                        <p>
                            Our mission is to conduct rigurous basic research focused on finding behavioral, neuroimaging, and other biological biomarkers in substance use disorders and other neuropsychiatric disorders, to use this knowledge to tackle applied and clinical questions, such as researching new treatments like neuromodulation.
                        </p>
                        <p>
                            Lines of research
                        </p>
                        <p>
                            Frontostriatal system in substance use and addiction, and neuropsychiatric disorders.
                            Identification of neuroimaging biomarkers in humans and animal models.
                            Action mechanisms and possible uses of neuromodulation methods.
                        </p>
                        <p>
                            Member of National & International Consortiums
                        </p>
                        <p>
                            ENIGMA-Addiction World-wide Consortium.
                            International Networks of tES /TMS Trials for Addiction Medicine (INTAM). @INTAM_Network.
                            PRIMatE Data Exchange (PRIME-DE) Consortium.
                            Mexico Borderline Personality Disorder (BDP) Research Group.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mt-5 text-center">
                        <Timeline
                    dataSource={{
                        sourceType: "egarzav",
                        screenName: "egarzav"
                    }}
                    options={{
                        height: "700",
                        width: "270"
                    }}
                    />
                </div>
            </div>
        </div>
    );
}

export default MainPage;
