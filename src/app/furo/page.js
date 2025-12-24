"use client";
import React from "react";
import "./furo.css";
import LeftBar from "@/components/LeftBar";
import HeroLayout from "@/components/HeroLayout";

export default function furo() {
    return (
        <HeroLayout>
        <LeftBar/>
            <div className="furo-page">
                <div className="furo-header">
                    <div className="furo-header-content">
                        <h1 className="page-title">Furo</h1>
                        <p className="page-subtitle">Explore the special in the e-commerce.</p>
                    </div>
                </div>

                <div className="furoTop">
                    <h2>About Furo</h2>
                    <p>
                    FURO by Red Chief is registered under Leayan Global Pvt. Ltd, commonly known for Red Chief shoes, apparels and accessories and 
                    FURO is into sports footwear and sports apparel business. 
                    The idea to launch this brand is to make good quality footwear and sportswear accessible to everyone. 
                    FURO inspires the youth towards an athleisure lifestyle.
                    </p>
                    <p>
                    We at FURO believe that the talent can be hidden in any nook and corner of our country. 
                    It isn’t necessary that the Sports Star is born with a silver spoon. 
                    So, while other brands create shoes only meant for Elite, 
                    FURO comes from a very different school of thought. 
                    To give customers sports shoes with such a Grip that they can stand their ground, even when the odds are against them. 
                    So, that Sports isn’t just limited to being a playground for the rich. FURO is born from this fire to change the game. 
                    Total yearly turnover is 50-100 Cr+, out of which 10-15 Cr+ is from the ecommerce business.
                    </p>
                </div>
                
                <div className="furo-banner">
                    <img src="./images/FURO-main-banner.jpg" className="bannerImg"/>
                </div>
                <div className="furo-grid">
                    <div>
                        <img src="./images/Furo-01.jpg" className="furo01"/>
                    </div>
                    <div>
                        <img src="./images/Furo-02.jpg" className="furo02"/>
                    </div>
                </div>
                <div className="furo-containGrid">
                    <div className="furo-grid01">
                        <h2>
                           The Solution
                        </h2>
                           
                        <h6>
                           Brand scientists at The eComguru handled the complete online platform for FURO and worked on the product listing, inventory management, campaign management and successfully 
                           achieved more than 1000 orders each day and achieved organic ranking on Amazon for some products.
                        </h6>
                    </div>
                    <div className="furo-grid02">
                        <h2>
                           The Problem
                        </h2>
                           
                        <h6>
                           Furo Sports was facing issue with scattered product listings, right product targeting, 
                           there was no A+ content and its explanation, creatives and images were not relevant.
                        </h6>
                    </div>
                </div>
            </div>
        </HeroLayout>
    );
}
