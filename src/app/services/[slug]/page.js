"use client";
import React from "react";
import { useParams } from "next/navigation";
import { SERVICES } from "@/assets/generic-data";
import LeftBar from "@/components/LeftBar";
import RightSidebar from "@/components/RightSidebar";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import ServicesGrid from "@/components/Services/Services";
import LabSection from "@/components/LabSection/LabSection";
import BrandGrid from "@/components/BrandGrid/BrandGrid";
import "./service-details.css";

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <>
        <LeftBar />
        <div className="service-not-found">
          <h1 style={{ padding: "100px", textAlign: "center" }}>
            Service Not Found
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <LeftBar />
      <div className="service-page">
        {/* Header Section */}
        <div className="service-header">
          <div className="service-header-content">
            <h1 className="page-title">{service.title}</h1>
            <p className="page-subtitle">{service.subtitle}</p>
          </div>
          <RightSidebar />
        </div>

        {/* Content Wrapper for White Background */}
        <div className="service-content-wrapper">
          {/* Main Content Section */}
          <section className="serviceSection">
            <div className="left">
              <h2>{service.mainHeading}</h2>
              <h6 style={{ whiteSpace: "pre-line" }}>
                {service.mainSubheading}
              </h6>
            </div>

            <div
              className="right"
              dangerouslySetInnerHTML={{ __html: service.leftContent }}
            />
          </section>

          <div className="horizontalLine"></div>

          {/* Bottom Content Section */}
          <section
            className="bottom-text"
            dangerouslySetInnerHTML={{ __html: service.bottomContent }}
          />
        </div>

        <CaseStudies />
        <ServicesGrid />
        <LabSection />
        <BrandGrid />
      </div>
    </>
  );
}
