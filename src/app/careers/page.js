"use client";
import React, { useState } from "react";
import "./careers.css";
import LeftBar from "@/components/LeftBar";

export default function CareersPage() {
    return (
    <>
      <LeftBar />

      <section className="careersTop-header">
        <div className="careersTop-header-content">
          <h1 className="page-title">Careers</h1>
          <p className="page-subtitle">Join our growing team today</p>
        </div>
      </section>
        <section className="careersTop">
            <h2>CAREER OPPORTUNITIES WITH THE ECOMGURU</h2>
            <p>
            The eComguru is a D2C brand solution lab, where we combine strategy, art and technology to launch and enhance brands and increased sales. The eComguru focuses on result-oriented strategies to grow your brand and increase your brand visibility and sales on all e-commerce platforms such as Amazon, Flipkart, Myntra, Walmart, eBay etc. With The eComguru you can reach out to the large pool of audiences.
            </p>
            <p>
            If you are interested in taking the next career leap and want to grow with The eComguru; kindly share your resume at <a href="">hr@theecomguru.com</a>.
            </p>
        </section>
     
    </>
  );
}