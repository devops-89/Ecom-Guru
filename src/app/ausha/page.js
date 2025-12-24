"use client";
import React from "react";
import "./ausha.css";
import LeftBar from "@/components/LeftBar";
import HeroLayout from "@/components/HeroLayout";

export default function Ausha() {
    return (
        <HeroLayout>
        <LeftBar/>
            <div className="ausha-page">
                {/* Black Header Section */}
                <div className="ausha-header">
                    <div className="ausha-header-content">
                        <h1 className="page-title">Ausha</h1>
                        <p className="page-subtitle">Always deliver more than expected.</p>
                    </div>
                </div>

                <div className="aushaTop">
                    <h2>About Ausha</h2>
                    <p>
                    AUSHA is a consumer electronics brand, which specializes in LED Televisions and smart electronics to match today’s technological requirements. 
                    AUSHA bringing new and modern technology to ease life. AUSHA aims at rich product categories that can meet the needs of each buyer to a great extent and this possible with the in-house expert development team. 
                    Being an electronics brand, AUSHA provides top-notch pre-sales and after-sale services for all product categories. 
                    With the facility of Minimum Order Quantity (MOQ), AUSHA is there for all types of buyers. 
                    All AUSHA electronics undergoes two quality checks prior to sell.
                    </p>
                    <p>
                    The total yearly turnover is 1-3 Cr, of which 1-2 Cr is from ecommerce.
                    </p>
                </div>
                
                <div className="ausha-banner">
                    <img src="./images/Ausha-Main-Banner.jpg" className="bannerImg"/>
                </div>
                <div className="ausha-grid">
                    <div>
                        <img src="./images/Ausha-01.jpg" className="ausha01"/>
                    </div>
                    <div>
                        <img src="./images/Ausha-02.jpg" className="ausha02"/>
                    </div>
                </div>
                <div className="ausha-containGrid">
                    <div className="ausha-grid01">
                        <h2>
                           The Solution
                        </h2>
                           
                        <h6>
                           Complete ecommerce account for INKURV was managed by The eComguru team. With the implementation of our channel sales management strategies, 
                           we were able to exponentially increase the brand’s growth and sales by 20% month on month basis and were able to achieve organic ranking on amazon first page for some products.
                        </h6>
                    </div>
                    <div className="ausha-grid02">
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
        </HeroLayout>
    );
}
