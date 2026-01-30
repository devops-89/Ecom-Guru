// "use client";
// import React from "react";
// import "./blog.css";
// import BlogCard from "@/components/BlogCard";
// import LeftBar from "@/components/LeftBar";
// import RightSidebar from "@/components/RightSidebar";
// import { BLOG_POSTS } from "@/assets/generic-data";

// export default function BlogPage() {
//   return (
//     <>
//       <LeftBar />
//       <div className="blog-page">
//         {/* Black Header Section */}
//         <div className="blog-header">
//           <h2>Blog</h2>
//           <p>
//             The eComguru has got the sales you need in your e-commerce business
//           </p>
//           <RightSidebar />
//         </div>

//         {/* Blog Grid Section */}
//         <div className="blog-container">
//           <div className="blog-grid">
//             {BLOG_POSTS.map((post) => (
//               <BlogCard
//                 key={post.id}
//                 title={post.title}
//                 description={post.description}
//                 image={post.image}
//                 link={`/blog/${post.slug}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
