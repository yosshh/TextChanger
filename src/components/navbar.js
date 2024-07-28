import React from "react";
// import { useState } from "react";
// import PropTypes  from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const activeMode = ()=> { 
    document.body.classList.add('active')
}
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link "
                  aria-current="page"
                  onClick={activeMode}
                  to="/home"
                >
                  {/* {props.address} */}
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            {/* This will disable the search bar from the navbar. */}

            {/* <div
              className={`form-check text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
            >
              <input
                className="form-check-input mx-3"
                type="checkbox"
                defaultValue=""
                onClick={props.toggleMode}
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {props.mode==='light'? "Enable Dark Mode" : "Enable Light Mode"}
              </label>
            // </div> */} 
            {/* This navbar is only for dark and light mode */}

            <div className="d-flex">
              <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height: '30px', width: '50px', cursor: 'pointer'}}></div>
              <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height: '30px', width: '50px', cursor: 'pointer'}}></div>
              <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height: '30px', width: '50px', cursor: 'pointer'}}></div>
              <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height: '30px', width: '50px', cursor: 'pointer'}}></div>
              <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{height: '30px', width: '50px', cursor: 'pointer'}}></div>
              <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}} style={{height: '30px', width: '50px', cursor: 'pointer'}}></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

// proptypes helps us to give types to the components
// like as below command is for string, we can not use any other value
// if we use num or any other value it will show error
// Navbar.PropTypes = {title: PropTypes.string,
// address: PropTypes.string
// };

// default props helps give value to the components
// it will work only when value is not given anywhere else
Navbar.defaultProps = {
  title: "yash is best",
  address: "hello",
};
