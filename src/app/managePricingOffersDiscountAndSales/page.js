"use client";
import React from "react";
import "./pricingOffersDiscountAndSales.css";
import LeftBar from "@/components/LeftBar";
import HeroLayout from "@/components/HeroLayout";

export default function PricingOffersPage() {
    return (
        <HeroLayout>
        <LeftBar/>
            <div className="pricingOffers-page">
                <div className="pricingOffers-header">
                    <div className="pricingOffers-header-content">
                        <h1 className="page-title">Manage Pricing Offers Discount and Sales</h1>
                        <p className="page-subtitle">Have meaningful discount pricing strategies from The eComguru</p>
                    </div>
                </div>

                {/* pricingOffers section */}
                      <section className="pricingOffersSection">
                        <div className="left">
                          <h2>Have better conversions with price elasticity and discounts</h2>
                          <h6>
                            Pricing, discount done correctly can help your business achieve and retain loyal customers.
                          </h6>
                        </div>
                
                        <div className="right">
                          <p>
                            E-commerce owners can and sometime need to incorporate discounts, offers into their strategy. 
                            However, it is important to know when to use them most effectively and efficiently. 
                            Online discounts and offers have numerous benefits. 
                            Businesses can drive customer loyalty and acquisition by tracking discount and offers emails. 
                            Also, providing discounts too frequently reduces profitability and often attracts only price-driven shoppers and quality of shoppers drops. 
                            In these scenarios, customers will always visit expecting discounted price, it will be hard to convince them to pay the full price again. 
                            Discounts in a healthy way drives business.
                          </p>
                
                          <p>
                            The eComgurus’ rich diversified experience add flavours to the aspects of pricing, discounts and sales. 
                            We have industry experts who will be developing, managing and sustaining pricing, offers, discount and sales for the online retail businesses.
                          </p>
                
                        </div>
                      </section>
                      <div className="horizontalLine"></div>
                      <section className="bottom-text">
                        <p>Pricing, offers, discounts and sales are important attributes of your online retail business. 
                          These are so much crucial that right type and right combination of all these qualities can maximize sales, prevent customers from abandoning their shopping carts and can encourage prospective customers to try the brand. 
                          At the same time, wrong type of all these can have adverse consequences, including but not limited to lowered profits and devalued brand.</p><br/>
                        <p>Many ecommerce businesses lean heavily on discount pricing to help carry their brand through difficult economic times or to drive customer conversions. 
                          This is a clear picture immediately after pandemic as consumers have become more mindful of where they spend their money due to a drastic shift in their purchasing power, which in turn leading the consumers to move to less expensive brands and products to save money.</p><br/>
                        <p>The eComguru provides its expertise in developing, managing and sustaining pricing, offers, discount and sales for the online retail businesses. 
                          All these aspects need to be meaningful for the brand as well as for the consumers. 
                          All these attributes have one common effect; makes consumer feel important and valued if present in right quantity and this is where The eComgurus’ rich diversified experience add flavours to these aspects. 
                          We will also work on coupons for Amazon platform for your product and Opt-ins on Flipkart platform.</p>
                      </section>
            </div>
        </HeroLayout>
    );
}
