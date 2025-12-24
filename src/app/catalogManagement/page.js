"use client";
import React from "react";
import "./catalog.css";
import LeftBar from "@/components/LeftBar";
import HeroLayout from "@/components/HeroLayout";

export default function CatalogPage() {
    return (
        <HeroLayout>
        <LeftBar/>
            <div className="catalog-page">
        
                <div className="catalog-header">
                    <div className="catalog-header-content">
                        <h1 className="page-title">Catalog Management</h1>
                        <p className="page-subtitle">In this digital era, product catalogs are managed online. 
                            Gone are the days of glossy paper booklet full of colourful products</p>
                    </div>
                </div>

                {/* catalog section */}
                      <section className="catalogSection">
                        <div className="left">
                          <h2>get your catalogs aligned to product experience with The eComguru</h2>
                          <h6>
                            Online sales continue to grow as customers are more accustomed to purchasing everything online.
                          </h6>
                        </div>
                
                        <div className="right">
                          <p>
                            Product quality is a critical factor in determining your customer’s level of satisfaction post-purchase of your brand. 
                            And how the customer will know the quality of the product, it is shared with the customers through catalogs. 
                            As nowadays, everything is online, so e-commerce website contains product name, price, description, hierarchy of products, supplier information, product availability and more product-related information. 
                            Also, the e-commerce website does not deal with a single product. 
                            The website handles thousands of different products and has millions of data related to products.
                          </p>
                
                          <p>
                            categorized and organized in one specific way to ensure that customers can access and get high-quality product data across all online channels. 
                            The eComguru has rich experience of publishing your products and optimization of existing products and offers aligned with the attributes of different online market places.
                            The actual definition of a cat
                          </p>
                
                        </div>
                      </section>
                      <div className="horizontalLine"></div>
                      <section className="bottom-text">
                        <p>The actual definition of a catalog is a complete list of products in a systematic way. 
                            Having this type of organization has proofed to be fundamental and effective to selling and same is being continued in this ecommerce era. 
                            This combination of organizing catalogs with ecommerce management applications is known as ecommerce catalog management.</p><br/>
                        <p>Over the decades, we have noticed changes in catalogs and how they have evolved over the time. 
                            Its combination of fashion and function, which will speak thousands of words in images, descriptions. 
                            Today, instead of printed paper catalog, we have digital catalog on different online platforms. 
                            Even though, the catalog is available in digital form, sellers need to provide accurate product details to build the brand, attract and engage customers and to provide positive customer experience.</p><br/>
                        <p>The eComguru has rich experience of publishing your products and optimization of existing products and offers aligned with the attributes of different online market places. 
                            We have in-house experts who will add relevant title for your products, enriching description with key specifications in bullets. 
                            This will not only engage your consumers online but will also lead to purchase.</p>
                      </section>
            </div>
        </HeroLayout>
    );
}
