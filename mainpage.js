import React from 'react';
import {Link} from 'react-router-dom';
import './mainpage.css';
// import { Dropdown, DropdownButton,  } from "bootstrap-navbar-dropdown";

const mainpage = () => {
    return (
        
    <div className="main">
            <div id="opts" className="shadow-lg bg-success text-white">
                <div id="titlebs" className="display-1 fs-1 bg-success text-white px-3 py-3 text-left">#Salvation!</div>
                        
                        <Link className="btn btn-success pt-4 pb-4 m-0" id="my-profile" to="/details" role="button">My profile</Link>
                        <a className="btn btn-success pt-4 pb-4 m-0" id="contact-us" href="mailto:binwantsingh172@gmail.com" role="button">Conatact us</a>
                        <Link className="btn btn-success pt-4 pb-4 m-0" id="xx">XXXX XX</Link>
                    </div>
                </div>
     );
}
 
export default mainpage;
