
import './Services.css';

export default function Services() {
  return (
    <section className="services">
      
      {/* LEFT PART — Heading + Description */}
      <div className="services-left">
        <h2>POWERING YOUR<br />BRAND GROWTH</h2>
        <h6>
          ecomguru is the perfect partner to help you grow your eCommerce business.
          We offer a full range of services and pride ourself on getting results.
        </h6>
      </div>

      {/* RIGHT PART — Services List */}
      <div className="services-right">

        {/* ROW 1 (4 CARDS) */}
        <div className="services-row">
          <div className="service-card">
            <img src="/images/icons/catalog.png" className="service-icon" />
            <h4>CATALOG MANAGEMENT</h4>
            <p>
              The eComguru has rich experience of publishing your products and
              optimization of existing products and offers aligned with online marketplaces.
            </p>
            <a href="#">LEARN MORE</a>
          </div>

          <div className="service-card">
            <img src="/images/icons/inventory.png" className="service-icon" />
            <h4>INVENTORY MANAGEMENT</h4>
            <p>
              Ecommerce Inventory Management helps retailers grow in every aspect
              of their business with reliable strategy & visibility.
            </p>
            <a href="#">LEARN MORE</a>
          </div>

          <div className="service-card">
            <img src="/images/icons/pricing.png" className="service-icon" />
            <h4>MANAGE PRICING, OFFERS,<br />DISCOUNT AND SALES</h4>
            <p>
              Many ecommerce businesses lean heavily on discount pricing to help customers
              through difficult economic times or to drive conversions.
            </p>
            <a href="#">LEARN MORE</a>
          </div>

          <div className="service-card">
            <img src="/images/icons/channel.png" className="service-icon" />
            <h4>CHANNEL SALES MANAGEMENT</h4>
            <p>
              Implementing a multichannel sales strategy has become need of the hour.
            </p>
            <a href="#">LEARN MORE</a>
          </div>
        </div>

        {/* ROW 2 (3 CARDS) */}
        <div className="services-row">
          <div className="service-card">
            <img src="/images/icons/campaign.png" className="service-icon" />
            <h4>CAMPAIGN MANAGEMENT</h4>
            <p>
              Online store wants to increase traffic with visible, attractive
              product features & lighting.
            </p>
            <a href="#">LEARN MORE</a>
          </div>

          <div className="service-card">
            <img src="/images/icons/value.png" className="service-icon" />
            <h4>PARTNER VALUE ADDED<br />SERVICE MANAGEMENT</h4>
            <p>
              Value-added services generate additional revenue or improve retention.
            </p>
            <a href="#">LEARN MORE</a>
          </div>

          <div className="service-card">
            <img src="/images/icons/visibility.png" className="service-icon" />
            <h4>BRAND VISIBILITY MANAGEMENT</h4>
            <p>
              Brand visibility is a crucial part of any ecommerce business.
            </p>
            <a href="#">LEARN MORE</a>
          </div>
        </div>

      </div>
    </section>
  );
}
