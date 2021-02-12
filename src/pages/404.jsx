import React from 'react';
import { withRouter } from 'react-router-dom';

function NotFoundPage(){
    return (
        <div className="container" style={{height:'65vh'}}>
            <div className="row justify-content-center align-items-center h-100">
                <div className="col text-center">
                    <div className="notfound">404</div>
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage;
