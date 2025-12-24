"use client";
import React from "react";
import "./inventory.css";
import LeftBar from "@/components/LeftBar";
import HeroLayout from "@/components/HeroLayout";

export default function InventoryManagement() {
    return (
        <HeroLayout>
        <LeftBar/>
            <div className="inventory-page">
        
                <div className="inventory-header">
                    <div className="inventory-header-content">
                        <h1 className="page-title">Inventory Management</h1>
                        <p className="page-subtitle">Make the right choices in managing inventory with The eComguru</p>
                    </div>
                </div>

                      <section className="inventorySection">
                        <div className="left">
                          <h2>The eComguru is your reliable partner in journey of Inventory Management</h2>
                          <h6>
                            E-commerce businesses need to have few things to be successful; an appealing and functional website, good and customer friendly shipping and return/cancellation policy and a proper visibility into their inventory counts and locations.
                          </h6>
                        </div>
                
                        <div className="right">
                          <p>
                            lose of customers due to misleading information. 
                            With the inventory management in place, you can track the location, amount, pricing and mix of inventory available from your business. 
                            This aspect is as necessary as managing your supply chain as with this you need to track inventory for multiple online sales channels.
                            With inventory 
                          </p>
                
                          <p>
                            enters your warehouse until it reaches your customer. Users can have an exact view of your products that are overstocked, understocked, out of stock or it’s missing completely. 
                            The eComguru guides you in every step of building a sustainable, profitable, scalable ecommerce business by managing the inventory for your business..
                          </p>
                
                        </div>
                      </section>
                      <div className="horizontalLine"></div>
                      <section className="bottom-text">
                        <p>To be a successful and known ecommerce retailer, few things apart from other is crucial like functional and engaging website, a good and reliable shipping strategy and visibility into the inventory counts and locations. 
                          Many a times, online retailers have a false view of the inventory that can cost them considerably and that is where Inventory Management solution takes up its shape.</p><br/>
                        <p>Ecommerce Inventory Management helps online retailers grow in every aspect of their online businesses. This system enables online retailers in making informed decisions on streamlining their warehouse operations and financial makeovers. Intelligent inventory management is backbone of any online retail business. It functions in frontend and backend of your operations. 
                          On the backend, it’s an important part of the supply chain, acting as bridge between suppliers and customers.</p><br/>
                        <p>The eComguru guides you in every step of building a sustainable, profitable, scalable ecommerce business by managing the inventory for your business. 
                          Our in-house expertise assists you with different strategies and its implementation for your online retail business like ABC Analysis, managing just-in-time inventory, dropshipping, first in- first out, safety stock. We also provide Inventory Automation management; wherein online businesses can manage their inventory in real-time. The systems simplify workflows and save time. By configuring your online retail automation with pre-built conditions, you’ll be free to get on with other essential tasks safe in the knowledge that inventory is taken care of. 
                          Few of the notable inventory automation portals associated with us are Pretr, Browntape, Increff, Unicommerce, Fynd, M-direct.</p>
                      </section>
            </div>
        </HeroLayout>
    );
}
