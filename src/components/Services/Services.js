"use client"
import 'aos/dist/aos.css';
import AOS from 'aos';
import './Services.css';
import { useEffect } from 'react';

export default function Services() {

   useEffect(() => {
        AOS.init({ duration: 1000 }); 
      }, []);

  return (
    <section className="services">
      
      {/* LEFT PART — Heading + Description */}
      <div className="services-left">
        <h2>SERVICES WITH ECOMGURU</h2>
        <h6>
          ecomguru is the perfect partner to help you grow your eCommerce business. We offer a full range of services and pride ourself on getting results.
        </h6>
      </div>

      {/* RIGHT PART — Services List */}
      <div className="services-right">

        {/* ROW 1 (4 CARDS) */}
        <div className="services-row" data-aos="fade-up">
          <div className="service-card">
            <img src="/images/icons/catalog.png" className="service-icon" />
            <h4>CATALOG MANAGEMENT</h4>
            <p>
              The eComguru has rich experience of publishing your products and optimization of existing products and offers aligned with different online market places.
            </p>
            <a href="/catalogManagement">LEARN MORE</a>
          </div>

          <div className="service-card">
            <img src="/images/icons/inventory.png" className="service-icon" />
            <h4>INVENTORY MANAGEMENT</h4>
            <p>
              Ecommerce Inventory Management helps online retailers grow in every aspect of their online businesses with reliable strategy and visibility.
            </p>
            <a href="/inventoryManagement">LEARN MORE</a>
          </div>

          <div className="service-card">
            <img src="/images/icons/pricing.png" className="service-icon" />
            <h4>MANAGE PRICING, OFFERS,<br />DISCOUNT AND SALES</h4>
            <p>
              Many ecommerce businesses lean heavily on discount pricing to help carry their brand through difficult economic times or to drive customer conversions.
            </p>
            <a href="/managePricingOffersDiscountAndSales">LEARN MORE</a>
          </div>

          <div className="service-card">
            <img src="/images/icons/channel.png" className="service-icon" />
            <h4>CHANNEL SALES MANAGEMENT</h4>
            <p>       
              Implementing a multichannel sales channel strategy has become need of the hour for almost every business. 
            </p>
            <a href="/channelSalesManagement">LEARN MORE</a>
          </div>
        </div>

        {/* ROW 2 (3 CARDS) */}
        <div className="services-row" data-aos="fade-up">
          <div className="service-card">
            <img src="/images/icons/campaign.png" className="service-icon" />
            <h4>CAMPAIGN MANAGEMENT</h4>
            <p>
              Ecommerce campaigns need to have clear product images with proper lighting, where product features are visible. Every online store wants to increase traffic.
            </p>
            <a href="/campaignManagement">LEARN MORE</a>
          </div>

          <div className="service-card">
            <img src="/images/icons/value.png" className="service-icon" />
            <h4>PARTNER VALUE ADDED<br />SERVICE MANAGEMENT</h4>
            <p>
              A value-added service should have oneness with the brand offerings and services, be able to generate additional revenue or increase consumer retention.
            </p>
            <a href="/partnerValueAddedServiceManagement">LEARN MORE</a>
          </div>

          <div className="service-card">
            <img src="/images/icons/visibility.png" className="service-icon" />
            <h4>BRAND VISIBILITY MANAGEMENT</h4>
            <p>
             Brand visibility is a crucial part of any ecommerce business and online visibility means overall presence of a brand.
            </p>
            <a href="/brandVisibilityManagement">LEARN MORE</a>
          </div>
        </div>

      </div>
    </section>
  );
}
