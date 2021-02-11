import React from "react";

function ResourcesPage(){
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-5">
                    <p>Resources</p>
                    <strong>Neuroimaging output</strong>
                    <ul>
                        <li>Axolotl Atlas UNAM in Zenodo. Preprint here.</li>
                        <li>Subcortical Atlas of the Rhesus Macaque (SARM) for Magnetic Resonance Imaging or SARM Atlas. Preprint here.</li>
                        <li>UNAM-UANL Wistar rat hierarchical neuroimaging atlas (WISMEX atlas). (In the works).</li>
                    </ul>


                    <strong>Open Datasets</strong>
                    <ul>
                        <li>SUDMEX_CONN: The Mexican dataset of cocaine use disorder patients.</li>
                        <li>SUDMEX_TMS: The Mexican dataset of an rTMS clinical trial on cocaine use disorder patients.</li>
                        <li>Functional Connectivity of Music-Induced Analgesia in Fibromyalgia. Paper here</li>
                    </ul>


                </div>
            </div>
        </div>
    );
}

export default ResourcesPage;