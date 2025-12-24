"use client";
import React from "react";
import "./perf.css";
import LeftBar from "@/components/LeftBar";
import HeroLayout from "@/components/HeroLayout";

export default function PerfPage() {
    return (
        <HeroLayout>
        <LeftBar/>
            <div className="perf-page">
                <div className="perf-header">
                    <div className="perf-header-content">
                        <h1 className="page-title">PERF</h1>
                        <p className="page-subtitle">Perfect e-commerce strategies for your online store.</p>
                    </div>
                </div>

                <div className="perfTop">
                    <h2>About Perf</h2>
                    <p>
                    Perf comes out of a combination of Italian design and cutting-edge technology that stands for Passion, Adrenaline and Performance. 
                    The Perf story begins in the coastal town of Bari, the capital of Puglia region in southern Italy. 
                    A region that’s known for being historically rich, vibrant and diverse ever since its existence. 
                    Since time immemorial, the town of Bari, known as the “boot” of Italy has been famous for being a land of creativity, entertainment, food, architecture and fashion.
                    </p>
                    <p>
                    Celebrations, tasty cuisines, traditions, fashion and style are at the center of this ancient & beautiful town. 
                    Italian fashion since the beginning has long been synonymous for masterful tailoring, rich history, impeccable style and grand tradition. 
                    That’s where Perf comes in.
                    </p>
                </div>
                
                <div className="perf-banner">
                    <img src="./images/perf-Main-Banner.jpg" className="bannerImg"/>
                </div>
                <div className="perf-grid ">
                    <div>
                        <img src="./images/perf-01.jpg" className="perf01"/>
                    </div>
                    <div>
                        <img src="./images/perf-02.jpg" className="perf02"/>
                    </div>
                </div>
                <div className="perf-containGrid">
                    <div className="perf-grid01">
                        <h2>
                           The Solution
                        </h2>
                           
                        <h6>
                           Brand experts at The eComguru handled the complete online platform for Perf and 
                           worked on the product listing, inventory management, campaign management, 
                           created proper and sorted price slabs and successfully achieved more than 1000 
                           orders each day and achieved organic ranking on Amazon for some products.
                        </h6>
                    </div>
                    <div className="perf-grid02">
                        <h2>
                           The Problem
                        </h2>
                           
                        <h6>
                           Perf was facing issue with scattered product listings, right product targeting, 
                           no proper pricing slab, there was no A+ content and its explanation, 
                           creatives and images were not relevant.
                        </h6>
                    </div>
                </div>
            </div>
        </HeroLayout>
    );
}
