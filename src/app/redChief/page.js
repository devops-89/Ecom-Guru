"use client";
import React from "react";
import "./redChief.css";
import LeftBar from "@/components/LeftBar";

export default function redChief() {
    return (
        <>
        <LeftBar/>
            <div className="redChief-page">
                {/* Black Header Section */}
                <div className="redChief-header">
                    <div className="redChief-header-content">
                        <h1 className="page-title">Red Chief</h1>
                        <p className="page-subtitle">Make your e-commerce vision a reality.</p>
                    </div>
                </div>

                <div className="redChiefTop">
                    <h2>About Red Chief</h2>
                    <p>
                    Leayan Global Pvt. Ltd, the fast-growing part of RSPL, is a respected name in leather industry since 1995. 
                    It’s an assemblage of potential manufacturing units with an unbeaten experience of 16 years. 
                    RSPL Limited started its primary business with a single production unit with its own FMCG soap Brand- GHARI in the year 1988. 
                    With its innovative and hardworking attempts, GHARI became a leading FMCG brand in India.
                    </p>
                    <p>
                    The footwear range of Leayan Global Pvt. 
                    Ltd was launched under the brand name RED CHIEF in 1997 to meet growing demand for branded high quality leather footwear. 
                    The company is a complete leather and footwear manufacturer with its own tannery and two manufacturing plants. 
                    This recognition is inspiring the team to increase its production capacity and fulfil the growing needs of consumers.
                    </p>
                    <p>
                    The company has also taken the fashion industry by storm with their venture in the apparel and accessory sector. 
                    We are now offering solutions to all men’s fashion and lifestyle requirements. Not only are we diversified, 
                    we are offering designs which are unique and stand out from those of our competitors; 
                    but we also stand united in our promise of delivering nothing but the best. 
                    Total yearly turnover is 500 Cr+, out of which 100 Cr+ is from the ecommerce business.
                    </p>
                </div>
                
                <div className="redChief-banner">
                    <img src="./images/Red-Chief-Main-Banner.jpg" className="bannerImg"/>
                </div>
                <div className="redChief-grid">
                    <div>
                        <img src="./images/Red-Chief01.jpg" className="redChief01"/>
                    </div>
                    <div>
                        <img src="./images/Red-Chief02.jpg" className="redChief02"/>
                    </div>
                </div>
                <div className="redChief-containGrid">
                    <div className="redChief-grid01">
                        <h2>
                           The Solution
                        </h2>
                           
                        <h6>
                           Ecomguru was able to upswing ROI to 14X-16X within a months’ time. 
                           Products on RED CHIEF ecommerce portal started selling organically even on generic keywords.
                        </h6>
                    </div>
                    <div className="redChief-grid02">
                        <h2>
                           The Problem
                        </h2>
                           
                        <h6>
                           Red Chief was facing issue with scattered product listings, right product targeting, 
                           there was no A+ content and its explanation, creatives and images were not relevant.
                        </h6>
                    </div>
                </div>
            </div>
        </>
    );
}