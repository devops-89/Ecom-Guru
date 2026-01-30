"use client";
import React from "react";
import { useParams } from "next/navigation";
import { BLOG_POSTS } from "@/assets/generic-data";
import LeftBar from "@/components/LeftBar";
import "./blog-details.css";

export default function BlogDetails() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <LeftBar />
        <div className="blog-not-found">
          <h1>Blog Post Not Found</h1>
          <p>The post you are looking for does not exist.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <LeftBar />

      {/* 1. Black Hero Section */}
      <div className="blog-details-header">
        <div className="blog-details-header-content">
          <h1 className="page-title">Blog</h1>
        </div>
      </div>

      {/* 2. Full Width Image Section */}
      {post.image && (
        <div className="blog-featured-image-wrapper">
          <img
            src={post.image}
            alt={post.title}
            className="full-width-featured-image"
          />
        </div>
      )}

      {/* 3. White Content Section */}
      <div className="blog-details-main-wrapper">
        <div className="blog-details-inner-page">
          <div className="blog-details-author">
            <img src="/images/profileIcon.jpg" alt="author" />
            <div>
              <span className="author-name">
                by <b>{post.author}</b>
              </span>
              <span className="author-date">{post.date}</span>
            </div>
          </div>

          <div className="blog-details-inner-header">
            <h1>{post.title}</h1>
          </div>

          <div
            className="blog-details-inner-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </>
  );
}
