"use client";
import React from "react";
import "./brandVisibility.css";
import LeftBar from "@/components/LeftBar";
import HeroLayout from "@/components/HeroLayout";

export default function BrandVisibility() {
    return (
        <HeroLayout>
        <LeftBar/>
            <div className="brandVisibility-page">
        
                <div className="brandVisibility-header">
                    <div className="brandVisibility-header-content">
                        <h1 className="page-title">Brand Visibility Management</h1>
                        <p className="page-subtitle">Get your brand noticed with The eComguru.</p>
                    </div>
                </div>

                {/* brandVisibility section */}
                      <section className="brandVisibilitySection">
                        <div className="left">
                          <h2>Accelerate your e-com sales</h2>
                          <h6>
                            Social media is the new ship and frontier to sail you through the strong digital presence for your brand.
                          </h6>
                        </div>
                
                        <div className="right">
                          <p>
                            E-commerce businesses need continuous innovative ways to ensure business continuity and profitability. 
                            For the appropriate brand visibility online, digital marketing strategy is critical and essential for your e-commerce business. 
                            There are various short-term and long-term strategies to improve e-commerce brand awareness. 
                            Paid advertising in many forms, such as pay-per-click, remarketing campaigns can quickly gain attention of past and potential customers and SEO focused website, content like blogs and guest posting is considered as long-term strategy to build awareness and authority in e-commerce industry.
                          </p>
                
                          <p>
                          There are few known methods for building and maintaining brand visibility, such as mobile SEO and ASO, blogging and guest posting, email campaigning, paid social media, pay-per-click, podcast, brand ambassadors. 
                          The eComguru starts working on all the aspects to decide which mode of brand visibility will work wonder for your e-commerce brand.
                          </p>
                
                        </div>
                      </section>
                      <div className="horizontalLine"></div>
                      <section className="bottom-text">
                        <p>Brand visibility is a crucial part of any ecommerce business and online visibility means overall presence of a brand or its product in the general consumer ecosystem. 
                          A brand can have great website but the major question here how are customers expected to find it is not visible. 
                          Search traffic can direct unique visitors but still businesses need to work on improving online visibility. 
                          Having traffic does not always mean it will turn unique visitors to buyers and therefore online visibility is important. 
                          Online visibility lets consumers find your brand, which in a way support your brand, its reputation, perception in the marketplace.</p><br/>
                        <p>Under brand visibility, The eComguru offers four distinguished services, which keeps us apart from rest of the crowd.</p><br/>
                        <p><b>A+ Content –</b> A+ content refers to a listing’s product description of brand owners which allows them to tell their brand story with enhanced image and video content. 
                          It will include comparison charts of competitors, high-quality images, HD videos.</p><br/>
                        <p>With A+ content, online businesses can have most effective and important ways to increase customer trust, boost conversion rates and acquire higher ranking on SERPs. 
                          The idea behind using enriched multimedia content is to enhance the user experience which drives high conversions and huge traffic to the listings.</p><br/>
                        <p><b>A+ Creative –</b> A+ creative refers to creative write ups that tells product story and brand story, which will guide the customers to have informed decision about the product and brand, leading to purchase decision.</p><br/>
                        <p><b>Brand Store –</b> Creating a brand store within the online marketplaces is necessary where the customers can look out for other available products and services under a particular online brand. 
                          This is created and managed by our The eComguru expert team for 360° brand experience for the customers.</p><br/>
                        <p><b>Photo Shoot –</b> A photo shoot for your online brand is as important as your product. 
                          Billions of people are now shopping a range of household, food and fashion items online. 
                          One of the key deciding factors for their purchases? The product photography on the e-commerce website. 
                          For this The eComguru have their in-house photoshoot experts and alignment with brand ambassador of your choice and budget.</p>
                      </section>
            </div>
        </HeroLayout>
    );
}
