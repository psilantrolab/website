import React from "react";

function ResourcesPage(){
    return(
        <div className="container" style={{minHeight:'65vh'}}>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-5">
                    <h3>Resources</h3>
                    <hr/>
                    <table className="table table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>Neuroimaging output</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                            Axolotl Atlas UNAM in <a href="https://zenodo.org/record/4317788#.X9U-Ben0nlw">Zenodo</a>. Preprint <a href="https://www.biorxiv.org/content/10.1101/2020.12.09.418566v1">here</a>.
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex align-items-center justify-content-center">
                                                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcincinnatichildrensblog.org%2Fwp-content%2Fuploads%2F2016%2F01%2Ffig-1-610x285.jpg&f=1&nofb=1" alt="" className="img-table"/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                            Subcortical Atlas of the Rhesus Macaque (SARM) for Magnetic Resonance Imaging or <a href="https://afni.nimh.nih.gov/pub/dist/doc/htmldoc/nonhuman/macaque_tempatl/atlas_sarm.html">SARM Atlas</a>. Preprint <a href="https://www.biorxiv.org/content/10.1101/2020.09.16.300053v1">here</a>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex align-items-center justify-content-center">
                                                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcincinnatichildrensblog.org%2Fwp-content%2Fuploads%2F2016%2F01%2Ffig-1-610x285.jpg&f=1&nofb=1" alt="" className="img-table"/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                            UNAM-UANL Wistar rat hierarchical neuroimaging atlas (WISMEX atlas). (In the works).
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex align-items-center justify-content-center">
                                                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcincinnatichildrensblog.org%2Fwp-content%2Fuploads%2F2016%2F01%2Ffig-1-610x285.jpg&f=1&nofb=1" alt="" className="img-table"/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                         
                        </tbody>
                    </table>
                    <table className="table table-striped">
                        <thead>
                            <tr className="table-dark">
                                <th>Open Datasets</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                           <a href="https://openneuro.org/datasets/ds003346/versions/1.1.0">SUDMEX_CONN: The Mexican dataset of cocaine use disorder patients</a>.
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex align-items-center justify-content-center">
                                                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcincinnatichildrensblog.org%2Fwp-content%2Fuploads%2F2016%2F01%2Ffig-1-610x285.jpg&f=1&nofb=1" alt="" className="img-table"/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                           <a href="https://openneuro.org/datasets/ds003037/versions/1.0.0">SUDMEX_TMS: The Mexican dataset of an rTMS clinical trial on cocaine use disorder patients</a>.
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex align-items-center justify-content-center">
                                                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcincinnatichildrensblog.org%2Fwp-content%2Fuploads%2F2016%2F01%2Ffig-1-610x285.jpg&f=1&nofb=1" alt="" className="img-table"/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                            <a href="https://openneuro.org/datasets/ds001928/versions/1.1.0">Functional Connectivity of Music-Induced Analgesia in Fibromyalgia</a>. Paper <a href="">here</a>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex align-items-center justify-content-center">
                                                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcincinnatichildrensblog.org%2Fwp-content%2Fuploads%2F2016%2F01%2Ffig-1-610x285.jpg&f=1&nofb=1" alt="" className="img-table"/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>




                </div>
            </div>
        </div>
    );
}

export default ResourcesPage;