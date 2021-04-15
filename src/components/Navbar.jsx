import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../logo1.png";
import digital from "../digitalindia.png"
//import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid" >
                    <NavLink className="navbar-brand" to="/"><img src={logo} style={{ width: 250, height: 150 }} alt="" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavLink className="navbar-brand" to="/"><img src={digital} style={{ width: 100, height: 100 }} alt="" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home <i class="fas fa-home"></i> </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/apointment">Appointment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/services">Services</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login" tabindex="-1" aria-disabled="true">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>


    );
}
export default Navbar;