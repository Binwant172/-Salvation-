import React from 'react';
import {Link} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

toast.configure();
const details = () => {

    const Saved = () =>{
        toast.success("Your information was saved succesfully!",{
             position: toast.POSITION.BOTTOM_RIGHT
            // autoClose:10000;
                
        })
    }
    return ( 
        <div className="data">
            <div className="display-1 bg-success text-white py-5 text-center">Website name
      <div className=" fs-6 fw-light m-1 text-center text-white">A personalized and fully customizable place made just for helping you with emotional and mental problems including <span className="fw-bold">stress, anxiety, anger and much more</span>. Join us today and change your life forever.</div>
      </div>
      <br></br>

            <div className="m-4 text-center">
                <div className="h4 fw-light" id="Sen">What should we call you?   </div><br></br>
                <input id="inp" className="input px-3 py-2 mt-1" type="text" placeholder="Name"/>
                <br></br><br></br>

                {/* Gender */}
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <div className="h4 fw-light">Male</div>
                </label>
                </div>
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                <div className="h4 fw-light">Female</div>
                </label>
                </div>
                <br></br>
                <Link onClick={Saved} className="btn btn-outline-success btn-lg px-4" data-bs-toggle="offcanvas" to="/mainpage" role="button" aria-controls="offcanvasExample">
                Next
                </Link>
            </div>
        </div>            

        
     );
}
 
export default details;