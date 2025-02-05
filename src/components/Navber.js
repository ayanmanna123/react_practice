import React from "react";
import PropTypes from "prop-types";

export default function Navber(props) {
  return (
    <nav className={`navbar navbar-expand-lg`} id="navbar" >

   
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.masage}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
           
          <div className="form-check">
            <input
              className="form-check-input"
              onClick={props.greenMode}
              
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
             
          </div>
          <div className="form-check">
            <input
             className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              
              onClick={props.blueMode}
              
            />
            
          </div>
          <div className="form-check">
            <input
             className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
              onClick={props.blackMode}
            />
            
          </div>
          <div className="form-check">
            <input
             className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault4"
              
              onClick={props.toggleMode}
            />
            
          </div>
        </div>
      </div>
    </nav>
  );
}
Navber.propTypes = { title: PropTypes.string, masage: PropTypes.string };
