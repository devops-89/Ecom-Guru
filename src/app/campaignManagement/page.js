"use client";
import React from "react";
import "./campaign.css";
import LeftBar from "@/components/LeftBar";
import HeroLayout from "@/components/HeroLayout";

export default function CampaignManagement() {
    return (
        <HeroLayout>
        <LeftBar/>
            <div className="campaign-page">
        
                <div className="campaign-header">
                    <div className="campaign-header-content">
                        <h1 className="page-title">Campaign Management</h1>
                        <p className="page-subtitle">Design, build and promote your e-commerce business</p>
                    </div>
                </div>

                {/* campaign section */}
                      <section className="campaignSection">
                        <div className="left">
                          <h2>The eComguru is your pandora box for campaign solutions.</h2>
                          <h6>
                            E-commerce marketers use different strategies that include use of social media, digital content, search engines and email campaigns to attract visitors and facilitates purchases online.
                          </h6>
                        </div>
                
                        <div className="right">
                          <p>
                            Campaign management is strategy designed to achieve an objective, usually of a large-scale over an extended period of time. 
                            It usually coordinates many activities and uses of resources involving multiple organizations. 
                            It could also have subordinate objectives or intermediate milestones and is often broken down by phases. 
                            A proper campaign needs to have clear, realistic goals, best and appropriate strategy, sufficient details of the tactics and actions and a method to check that we are on right track with campaign planning.
                          </p>
                
                          <p>
                            Campaign management is strategy designed to achieve an objective, usually of a large-scale over an extended period of time. It usually coordinates many activities and uses of resources involving multiple organizations. It could also have subordinate objectives or intermediate milestones and is often broken down by phases. 
                            A proper campaign needs to have clear, realistic goals, best and appropriate strategy, sufficient details of the tactics and actions and a method to check that we are on right track with campaign planning.
                          </p>
                
                        </div>
                      </section>
                      <div className="horizontalLine"></div>
                      <section className="bottom-text">
                        <p>In constantly changing and increasingly competitive environment, online retailers come across tough competition and every online store wants to increase traffic, high conversion rate, less churn rate. 
                          And even after putting together all the applicable strategies, it can become challenging to decide on the marketing strategy.</p><br/>
                        <p>Ecommerce campaigns need to have clear product images with proper lighting, where product features are visible. 
                          Nowadays, on Amazon and other major online market places, videos are also added to showcase the product features, usage etc. 
                          Ecommerce campaigns are important for brand visibility, customer engagement which ultimately should lead to purchase action. 
                          This thought process starts with thinking about any awesome brand, product, or service and its related awareness in form of its marketing campaign. 
                          It’s whether we saw an ad on digital media, read a promotional email in inbox, or a simple recommendation from friend, an effective campaign is ultimately at the root of purchase. 
                          And at the end to engage a consumer, requires lot of back stage planning, timely execution and loads of knowledge to understand and have insight into the target audiences.</p><br/>
                        <p>At The eComguru, our expert team with prodigious knowledge manages your campaigns for your online retail brand. 
                          Our dedicated team will be responsible for entire planning and executing campaigns. 
                          At the same time, the team will also monitor, measure and prepare a report on campaign effectiveness. 
                          Our team collaboration will also extend to your sales, sales ops, and other members of your marketing team to craft and launch effective campaigns. 
                          We also focus on campaign by right targeting and bid management.</p>
                      </section>
            </div>
        </HeroLayout>
    );
}
