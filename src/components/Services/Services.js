import "./Services.css";
import { SERVICES } from "@/assets/generic-data";
import Link from "next/link";

export default function Services({ hideTitle, isSplit }) {
  const getIcon = (slug) => {
    const icons = {
      "catalog-management": "/images/icons/catalog.png",
      "inventory-management": "/images/icons/inventory.png",
      "pricing-offers-discounts": "/images/icons/pricing.png",
      "channel-sales-management": "/images/icons/channel.png",
      "campaign-management": "/images/icons/campaign.png",
      "partner-value-added-services": "/images/icons/value.png",
      "brand-visibility-management": "/images/icons/visibility.png",
    };
    return icons[slug] || "/images/icons/catalog.png";
  };

  return (
    <section className={`services ${isSplit ? "is-split" : ""}`}>
      {/* LEFT PART */}
      {!hideTitle && (
        <div className="services-left">
          <h2>SERVICES WITH ECOMGURU</h2>
          <h6>
            ecomguru is the perfect partner to help you grow your eCommerce
            business. We offer a full range of services and pride ourself on
            getting results.
          </h6>
        </div>
      )}

      {/* RIGHT PART */}
      <div className="services-right">
        <div className="services-row" data-aos="fade-up">
          {SERVICES.map((service) => (
            <div className="service-card" key={service.id}>
              <img
                src={getIcon(service.slug)}
                className="service-icon"
                alt={service.title}
              />
              <h4>{service.title.toUpperCase()}</h4>
              <p>{service.subtitle}</p>
              <Link href={`/services/${service.slug}`}>LEARN MORE</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
