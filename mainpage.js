import React from 'react';
import {Link} from 'react-router-dom';

const mainpage = () => {
    return (
        
        <div className="main">
            <div className="display-1 bg-success text-white py-3 text-center">Website name</div>


        {/* <div className="card" id="card-main-div">
                <div className="card-body">
                    <h5 className="card-title display-6">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}

<div className="row m-2 my-3">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title display-6 text-success">Stress</h5>
        <p className="card-text">Stress like the mordern day virus. Many people get stressed out over things no matter the age. Let's look at various ways to prevent stress.<br /><br /></p>
        <Link className="btn btn-success btn-lg p-2" to="#" role="button">Get started</Link>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title display-6 text-danger">Anger</h5>
        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quae dolores iure inventore exercitationem, autem consequatur earum reiciendis adipisci modi quis voluptatum vel magni deserunt?</p>
        <Link className="btn btn-danger btn-lg p-2" to="#" role="button">Get started</Link>
      </div>
    </div>
  </div>
</div>
        </div>
     );
}
 
export default mainpage;
