import React from "react";
import "./BlogCard.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function BlogCard({ title, description, image, link = "#" }) {
    return (
        <div className="blog-card">
            <div className="blog-image-container">
                {/* Placeholder for image if not provided */}
                {image ? (
                    <img src={image} alt={title} className="blog-image" />
                ) : (
                    <div className="blog-image-placeholder">
                        <div className="placeholder-icon"></div>
                    </div>
                )}
            </div>
            <div className="blog-content">
                <h3 className="blog-title">{title}</h3>
                <p className="blog-description">{description}</p>
                <Link href={link} className="read-more-btn">
                    Read More
                </Link>
            </div>
        </div>
    );
}
