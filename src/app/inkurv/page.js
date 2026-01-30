"use client";
import React from "react";
import "./inkurv.css";
import LeftBar from "@/components/LeftBar";

export default function Inkurv() {
    return (
        <>
        <LeftBar/>
            <div className="inkurv-page">
                <div className="inkurv-header">
                    <div className="inkurv-header-content">
                        <h1 className="page-title">Inkurv</h1>
                        <p className="page-subtitle">Give your customers “happy to see you” kind of experience.</p>
                    </div>
                </div>

                <div className="inkurvTop">
                    <h2>About Inkurv</h2>
                    <p>
                    Inkurv was founded in April 2017 with an aim to provide lingerie buying experience close to your doorstep.
                    </p>
                    <p>
                    We believe lingerie helps each woman express herself and her innermost feelings. 
                    We pride ourselves on carrying a wide variety of pieces that cater to all sizes and tastes. 
                    All of our lingerie is selected with quality in mind. We believe that, above all, your lingerie should make you feel special every time you put it on. 
                    The real comfort is here!
                    </p>
                    <p>
                    The total yearly turnover is 8-10 Cr+, out of which 4-5 Cr+ is from the ecommerce business.
                    </p>
                </div>
                
                <div className="inkurv-banner">
                    <img src="./images/The-Inkurv-main-banner.jpg" className="bannerImg"/>
                </div>
                <div className="inkurv-grid">
                    <div>
                        <img src="./images/The-Inkurv-01.jpg" className="inkurv01"/>
                    </div>
                    <div>
                        <img src="./images/The-Inkurv-02.jpg" className="inkurv02"/>
                    </div>
                </div>
                <div className="inkurv-containGrid">
                    <div className="inkurv-grid01">
                        <h2>
                           The Solution
                        </h2>
                           
                        <h6>
                           Complete ecommerce account for INKURV was managed by The eComguru team. With the implementation of our channel sales management strategies, 
                           we were able to exponentially increase the brand’s growth and sales by 20% month on month basis and were able to achieve organic ranking on amazon first page for some products.
                        </h6>
                    </div>
                    <div className="inkurv-grid02">
                        <h2>
                           The Problem
                        </h2>
                           
                        <h6>
                           Inkurv was struggling with their sales strategy to launch new combos, 
                           issue with right product targeting, understanding and targeting competitor product.
                        </h6>
                    </div>
                </div>
            </div>
        </>
    );
}