import React from "react";
import Navigation from './navigation';
import Footer from '../footer';

function ResourcesPage_es(){
    return(
        <div>
            <Navigation/>
            <div className="container" style={{minHeight:'65vh'}}>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-5">
                        <h3>Productos</h3>
                        <hr/>
                        <table className="table table-striped">
                            <thead className="table-dark">
                                <tr>
                                    <th>Neuroimagen</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                            Atlas de Axolote Mexicano en <a target="_blank"  href="https://zenodo.org/record/4317788#.X9U-Ben0nlw">Zenodo</a>. Preprint <a target="_blank"  href="https://www.biorxiv.org/content/10.1101/2020.12.09.418566v1">aqui</a>.
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex align-items-center justify-content-center">
                                                    {/* <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcincinnatichildrensblog.org%2Fwp-content%2Fuploads%2F2016%2F01%2Ffig-1-610x285.jpg&f=1&nofb=1" alt="" className="img-table"/> */}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                            Atlas Subcortical del Mono Rhesus (SARM) para Resonancia Magnética o <a target="_blank" href="https://afni.nimh.nih.gov/pub/dist/doc/htmldoc/nonhuman/macaque_tempatl/atlas_sarm.html"> Atlas SARM</a>. Preprint <a target="_blank" href="https://www.biorxiv.org/content/10.1101/2020.09.16.300053v1">aqui</a>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex align-items-center justify-content-center">
                                                    {/* <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcincinnatichildrensblog.org%2Fwp-content%2Fuploads%2F2016%2F01%2Ffig-1-610x285.jpg&f=1&nofb=1" alt="" className="img-table"/> */}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                            Atlas de neuroimagen jerárquico de rata UNAM-UANL (Atlas WISMEX) (En proceso).
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex align-items-center justify-content-center">
                                                    {/* <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcincinnatichildrensblog.org%2Fwp-content%2Fuploads%2F2016%2F01%2Ffig-1-610x285.jpg&f=1&nofb=1" alt="" className="img-table"/> */}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            
                            </tbody>
                        </table>
                        <table className="table table-striped">
                            <thead>
                                <tr className="table-dark">
                                    <th>Bases de datos abiertas</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                            <a target="_blank"  href="https://openneuro.org/datasets/ds003346/versions/1.1.0">SUDMEX_CONN: La base de datos Mexicana de pacientes con trastorno por uso de cocaína</a>.
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex align-items-center justify-content-center">
                                                    {/* <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcincinnatichildrensblog.org%2Fwp-content%2Fuploads%2F2016%2F01%2Ffig-1-610x285.jpg&f=1&nofb=1" alt="" className="img-table"/> */}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                            <a target="_blank"  href="https://openneuro.org/datasets/ds003037/versions/1.0.0">SUDMEX_TMS:  La base de datos Mexicana de un ensayo clínico de estimulación magnética transcraneal repetitiva en pacientes con trastorno por uso de cocaína.</a>.
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex align-items-center justify-content-center">
                                                    {/* <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcincinnatichildrensblog.org%2Fwp-content%2Fuploads%2F2016%2F01%2Ffig-1-610x285.jpg&f=1&nofb=1" alt="" className="img-table"/> */}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                                <a target="_blank"  href="https://openneuro.org/datasets/ds001928/versions/1.1.0">Conectividad funcional de analgesia inducida por música en pacientes con fibromialgia</a>. Artículo  <a target="_blank"  href="https://www.nature.com/articles/s41598-019-51990-4">aqui</a>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex align-items-center justify-content-center">
                                                    {/* <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcincinnatichildrensblog.org%2Fwp-content%2Fuploads%2F2016%2F01%2Ffig-1-610x285.jpg&f=1&nofb=1" alt="" className="img-table"/> */}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>




                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ResourcesPage_es;