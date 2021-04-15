import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import { Switch, Route, Router } from "react-router-dom";
import Home from "./components/Home";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Patient from "./components/Patient";
import Login from "./components/Login";
import Services from "./components/Services";
import Gallery from "./components/Gallery";



const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' ><Home /></Route>
        <Route exact path='/apointment' ><Patient /></Route>
        <Route exact path="/services" ><Services /></Route>
        <Route exact path="/gallery" ><Gallery /></Route>
        <Route exact path='/login' ><Login /></Route>



      </Switch>
      <Services />
      <Features />
      <Footer />
    </>


  );
}

export default App;
