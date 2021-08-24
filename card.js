import React from 'react';
import {Link} from 'react-router-dom';

class Card extends React.Component {
    render() {
      return <div className="col-sm-6">
      <div id="cadr" className="card shadow mb-3">
          <div className="card-body">
              <h5 className="card-title display-6 text-success">{this.props.heading}</h5>
                  <p className="card-text">{this.props.cardtext}
                      </p>
                  <Link className={`btn btn-${this.props.btncolor} btn-lg p-2`} to="#" role="button">{this.props.btntext}</Link>
              </div>
          </div>
      </div>
      ;
    }
}

export default Card;