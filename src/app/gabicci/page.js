"use client";
import React from "react";
import "./gabicci.css";
import LeftBar from "@/components/LeftBar";
import HeroLayout from "@/components/HeroLayout";

export default function Gabicci() {
    return (
        <HeroLayout>
        <LeftBar/>
            <div className="gabicci-page">
                <div className="gabicci-header">
                    <div className="gabicci-header-content">
                        <h1 className="page-title">Gabicci</h1>
                        <p className="page-subtitle">Reach the exciting phase of e-commerce.</p>
                    </div>
                </div>

                <div className="gabicciTop">
                    <h2>About Gabicci</h2>
                    <p>
                    Founded in 1973, Gabicci anchored its processes to incorporate a sense of royalty in all of its creations. 
                    Once proudly worn by legendary personalities like Bob Marley & The Specials, 
                    Gabicci continues to be the most favoured brand with its makers proving their fine craftsmanship in each step. 
                    The quest to find the perfect pair of luxe and comfortable leather shoes in India ends here with 
                    Gabicci as we put our heart & sole to bring innovation, durability and tradition in the craft of shoemaking. 
                    Total yearly turnover is 2-3 Cr+, out of which 1.5 Cr+ is from the ecommerce business.
                    </p>
                </div>
                
                <div className="gabicci-banner">
                    <img src="./images/Gabicci-Main-Banner.jpg" className="bannerImg"/>
                </div>
                <div className="gabicci-grid">
                    <div>
                        <img src="./images/Gabicci-01.jpg" className="gabicci01"/>
                    </div>
                    <div>
                        <img src="./images/Gabicci-02.jpg" className="gabicci02"/>
                    </div>
                </div>
                <div className="gabicci-containGrid">
                    <div className="gabicci-grid01">
                        <h2>
                           The Solution
                        </h2>
                           
                        <h6>
                           The ecommerce experts at The eComguru was able to successfully manage the entire 
                           GABICCI ecommerce platform and created space for the brand among its market competitors and achieved first three pages ranking.
                        </h6>
                    </div>
                    <div className="gabicci-grid02">
                        <h2>
                           The Problem
                        </h2>
                           
                        <h6>
                           Gabicci was facing issue with scattered product listings, right product targeting, 
                           there was no A+ content and its explanation, creatives and images were not relevant.
                        </h6>
                    </div>
                </div>
            </div>
        </HeroLayout>
    );
}
