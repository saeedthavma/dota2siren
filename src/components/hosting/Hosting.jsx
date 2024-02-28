import React from "react";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import Elimination8 from "./elimination8/Elimination8.jsx";
import Elimination16 from "./elimination16/Elimination16.jsx";
import './hosting.css';

const Hosting = () => {
    return(
        <div className="Hosting">
            <Header />
            <img className='header-img-ta' src='/photo/images/header-img-sf.jpg' />
            <div className="hosting-bg"></div>

            <div className="hosting-area">
                <Elimination16 />
            </div>

            <Footer />
        </div>
    );
}

export default Hosting;