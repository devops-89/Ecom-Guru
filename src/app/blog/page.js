"use client";
import React from "react";
import "./blog.css";
import BlogCard from "@/components/BlogCard";
import HeroLayout from "@/components/HeroLayout";

// Dummy data based on the image
const BLOG_POSTS = [
    {
        id: 1,
        title: "Casino craps rules",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: null, 
    },
    {
        id: 2,
        title: "Avventure Lussuose al Dolly Casino Italia Un Viaggio nel Mondo del Gioco d'Azzardo Elegante",
        description: "Esplora il mondo di lusso e divertimento al Dolly Casino Italia. Scopri i migliori giochi e l'atmosfera elegante.",
        image: null,
    },
    {
        id: 3,
        title: "Avventure Marittime Scopri le Meraviglie di Admiral Casino Italia",
        description: "Unisciti all'avventura marittima con Admiral Casino Italia. Giochi emozionanti e premi incredibili ti aspettano.",
        image: null,
    },
    {
        id: 4,
        title: "Stonewegas casino app",
        description: "Scarica l'app di Stonewegas Casino per giocare ovunque tu sia. Divertimento a portata di mano.",
        image: null,
    },
    {
        id: 5,
        title: "Casino betsoft",
        description: "Scopri i migliori giochi di Casino Betsoft. Grafica eccezionale e gameplay coinvolgente.",
        image: null,
    },
    {
        id: 6,
        title: "Baden baden casino silvester",
        description: "Festeggia il capodanno al Baden Baden Casino. Una serata indimenticabile di giochi e festeggiamenti.",
        image: null,
    },
    {
        id: 7,
        title: "Glamour e Fortuna La Magia del Casinò di Venezia",
        description: "Vivi la magia del Casinò di Venezia. Storia, glamour e fortuna si incontrano in questo luogo iconico.",
        image: null,
    },
    {
        id: 8,
        title: "21 casino bewertung",
        description: "Leggi la nostra recensione completa di 21 Casino. Bonus, giochi e tutto ciò che devi sapere.",
        image: null,
    },
    {
        id: 9,
        title: "Casino ohne lizenz 2023 novomatic casino ohne lizenz",
        description: "Tutto quello che devi sapere sui casinò senza licenza nel 2023 e i giochi Novomatic.",
        image: null,
    },
    {
        id: 10,
        title: "Accesso Stellare Entrare nel Casinò delle Stelle",
        description: "Entra nel mondo delle stelle con il nostro casinò esclusivo. Premi stellari e divertimento assicurato.",
        image: null,
    }
];

export default function BlogPage() {
    return (
        <HeroLayout>
            <div className="blog-page">
                {/* Black Header Section */}
                <div className="blog-header">
                    <div className="blog-header-content">
                        <span className="breadcrumb">Home / Blog</span>
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
                            />
                        ))}
                    </div>
                </div>
            </div>
        </HeroLayout>
    );
}
