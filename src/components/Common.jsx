import React from "react";
import web from "../hos.jpg";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

const Common = (props) => {
    return (<>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className='row'>
                    <div className='col-12 mx-auto'>
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">

                                <h2 className="my-3" style={{ color: '#4c50ac' }}>
                                    Now getting an OPD appointment, lab reports and blood availability in our hospital has become online & easy.
Stay Home Stay Safe, Stop COVID-19               </h2>
                                <div className="mt-3">
                                    <NavLink className="btn btn-primary" to="/apointment">
                                        Book Appointment Now</NavLink>

                                </div>
                                <div className="mt-3">
                                    <NavLink className="btn btn-info" to="/">
                                        Payment</NavLink>
                                </div>
                                <div className="mt-3">
                                    <NavLink className="btn btn-danger" to="/">Lab Report</NavLink>
                                </div>
                                <div className="mt-3">
                                    <NavLink className="btn btn-primary" to="/login">
                                        Hospital Login</NavLink>

                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={props.imgsrc} className="img-fluid animated" alt="home img" />

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>);
}
export default Common;