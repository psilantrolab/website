import React from "react";
import './styles.css';

function ContactPage(){
    return(
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-5">
                <p>Email: <strong>egarza at gmail.com</strong> & <strong>egarza at comunidad.unam.mx</strong></p>
                <p>Phone:</p>
                <ul>
                    <li>Office: +52 (442) 238-1038</li>
                    <li>Extension (INB): 34038</li>
                </ul>
                <p>Work address:</p>
                <p>Instituto de Neurobiología, Laboratorio B-03, UNAM campus Juriquilla. Boulervard Juriquilla 3001 Santiago de Querétaro, Querétaro, México C.P. 76230</p>
                <div className="map-responsive mb-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3732.2537920807345!2d-100.4479444!3d20.6999163!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3575d94098487%3A0x3984002b1678a2af!2sInstituto%20de%20Neurobiolog%C3%ADa%20UNAM!5e0!3m2!1ses-419!2smx!4v1613068866570!5m2!1ses-419!2smx" width="100%" height="100%" frameBorder="0" style={{border:0}} aria-hidden="false" tabIndex="0" title="map"></iframe>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ContactPage;