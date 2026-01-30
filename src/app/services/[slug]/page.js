"use client";
import React from "react";
import { useParams } from "next/navigation";
import { SERVICES } from "@/assets/generic-data";
import LeftBar from "@/components/LeftBar";
import HeroLayout from "@/components/HeroLayout";
import "./service-details.css";

export default function ServiceDetails() {
    const { slug } = useParams();
    const service = SERVICES.find((s) => s.slug === slug);

    if (!service) {
        return (
            <HeroLayout>
                <LeftBar />
                <div className="service-not-found">
                    <h1 style={{ padding: "100px", textAlign: "center" }}>Service Not Found</h1>
                </div>
            </HeroLayout>
        );
    }

    return (
        <HeroLayout>
            <LeftBar />
            <div className="service-page">
                {/* Header Section */}
                <div className="service-header">
                    <div className="service-header-content">
                        <h1 className="page-title">{service.title}</h1>
                        <p className="page-subtitle">{service.subtitle}</p>
                    </div>
                </div>

                {/* Content Wrapper for White Background */}
                <div className="service-content-wrapper">
                    {/* Main Content Section */}
                    <section className="serviceSection">
                        <div className="left">
                            <h2>{service.mainHeading}</h2>
                            <h6 style={{ whiteSpace: "pre-line" }}>{service.mainSubheading}</h6>
                        </div>

                        <div className="right" dangerouslySetInnerHTML={{ __html: service.leftContent }} />
                    </section>

                    <div className="horizontalLine"></div>

                    {/* Bottom Content Section */}
                    <section className="bottom-text" dangerouslySetInnerHTML={{ __html: service.bottomContent }} />
                </div>
            </div>
        </HeroLayout>
    );
}
