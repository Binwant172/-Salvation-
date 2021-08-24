import React from 'react';
import {Link} from 'react-router-dom';

const Button = () => {
    return ( 
        
        <div className="name">
            <div className="text-center"><Link className="btn btn-outline-success btn-lg p-2" to="/details" role="button">Get started</Link></div>
        </div>
     );
}
 
export default Button;
