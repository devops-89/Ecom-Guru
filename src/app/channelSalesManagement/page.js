"use client";
import React from "react";
import "./channelSales.css";
import LeftBar from "@/components/LeftBar";
import HeroLayout from "@/components/HeroLayout";

export default function ChannelSales() {
    return (
        <HeroLayout>
        <LeftBar/>
            <div className="channelSales-page">
        
                <div className="channelSales-header">
                    <div className="channelSales-header-content">
                        <h1 className="page-title">Channel Sales Management</h1>
                        <p className="page-subtitle">Selling your product through partner companies provides opportunities for business expansion, revenue growth, and brand marketing</p>
                    </div>
                </div>

                {/* channelSales section */}
                      <section className="channelSalesSection">
                        <div className="left">
                          <h2>Explore the world of channel sales with The eComguru</h2>
                          <h6>
                            Channel sales strategy will give you a leverage to sell your products and services through help of third parties.
                          </h6>
                        </div>
                
                        <div className="right">
                          <p>
                            Channel sales can help you grow your business by reaching out to new customers, who do not prefer to buy products or services directly from manufacturer, sell of products through third-party marketplaces and managed service providers, which many a times offers package deals to end-customers and appeal customers to look for different product options and deals available. Lastly, with channel sales you find business in new geographic regions. 
                            But one thing that needs to be taken care here is that channel sales strategy should be in conflict with your direct sales initiatives. 
                            That is why your business should aim channel sales at target markets and geographics that is not covered under direct sales initiatives.
                          </p>
                
                          <p>
                            The eComguru is focused in aligning your brand with the needs of the customers. 
                            We at The eComguru aims at well-designed, complementary direct and channel sales programs. 
                            The eComguru focuses on big picture for your brand.
                          </p>
                
                        </div>
                      </section>
                      <div className="horizontalLine"></div>
                      <section className="bottom-text">
                        <p>Implementing a multichannel sales channel strategy has become need of the hour for almost every business. 
                          The brands that are able to meet their customer expectations tends out to be the strongest brand. 
                          These businesses offer out-of-the-box ecommerce experiences and establish strong brand identities. 
                          These brands own every aspect of customers and have strong control over the customer experiences. 
                          To attain it, The eComguru comes into picture. 
                          The eComguru is focused in aligning your brand with the needs of the customers. 
                          Channel sales management involves major work on marketing, sales strategies, techniques, managing vendors, ACOS (Advertising Cost of Sales) management and PPC (Pay-Per-Click) management. 
                          It’s all about what, how, when, the customer will be able to access your brand and products online and will be associated with you for lifetime. 
                          We at The eComguru focuses on big picture for your brand.</p><br/>
                        <p>Your e-commerce brand is promoted on marketplaces like Amazon, Flipkart, Myntra, Meesho, Paytm, and Tatacliq by The eComguru. 
                          Customers typically do product-specific searches on these channels, which offer a wide variety of product offerings.</p>
                      </section>
            </div>
        </HeroLayout>
    );
}
