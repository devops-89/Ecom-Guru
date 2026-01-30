"use client";
import React from "react";
import "./blog.css";
import BlogCard from "@/components/BlogCard";
import HeroLayout from "@/components/HeroLayout";
import LeftBar from "@/components/LeftBar";
import { BLOG_POSTS } from "@/assets/generic-data";

export default function BlogPage() {
    return (
        <HeroLayout>
            <LeftBar />
            <div className="blog-page">

                {/* Black Header Section */}
                <div className="blog-header">
                    <div className="blog-header-content">
                        <h1 className="page-title">Blog</h1>
                        <p className="page-subtitle">Stay updated with our latest news and articles</p>
                    </div>
                </div>

                {/* Blog Grid Section */}
                <div className="blog-container">
                    <div className="blog-grid">
                        {BLOG_POSTS.map((post) => (
                            <BlogCard
                                key={post.id}
                                title={post.title}
                                description={post.description}
                                image={post.image}
                                link={`/blog/${post.slug}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </HeroLayout>
    );
}
