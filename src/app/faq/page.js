"use client";
import React, { useState } from "react";
import "./faq.css";
import LeftBar from "@/components/LeftBar";
import HeroLayout from "@/components/HeroLayout";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
  {
    title: "CATALOG MANAGEMENT",
    items: [
      {
        q: "How do I get started with The eComguru for my catalog management project?",
        a: [
            "The client of The eComguru is required to follow an easy three step process:",
            "1. Share the login details and product information of your e-commercewebsite along with providing us the product list.",
            "2. Share the login details and product information of your e-commercewebsite along with providing us the product list.",
            "3. We’ll put you in direct contact with the project manager supervising your project. He/she will give you daily updates. This ensures the client has complete accessible control over the project."
        ]
      },
      {
        q: "Is there an alternate method of catalog management if I don't want to share my login details of my ecommerce website?",
        a: [
            "The client of The eComguru is required to follow an easy three step process:",
            "1. Get in touch with us and specify yourproject requirements of your e-commerceStore.",
            "2. Share the login details and product information of your e-commercewebsite along with providing us the product list.",
            "3. We’ll put you in direct contact with the project manager supervising your project. He/she will give you daily updates. This ensures the client has complete accessible control over the project."
        ]
      },
      {
        q: "Do you do sample projects free of cost?",
        a: "No, we do not provide any sample projects. You have to pay for the services you want to use."
      },
      {
        q: "How do I send my product information to you for catalog management services?",
        a: "You can send product information in the form of spreadsheet, digital / physical catalog, etc. through email or directly to our office."
      }
    ]
  },
  {
    title: "INVENTORY MANAGEMENT",
    items: [
      {
        q: "Why do I need to manage my inventory?",
        a: "Inventory management provides you the ability to manage your stock levels. You can keep track of your inventory levels together with all the information on your orders, imports and exports."
      },
      {
        q: "Will I get monthly inventory reports?",
        a: "Yes, you will receive detailed monthly inventory and stock reports."
      },
      {
        q: "How secure will my data be with The eComguru?",
        a: "Protecting your data is our top priority. You can read more about it on the Security Privacy & Compliance section in the contract."
      }
    ]
  },
  {
    title: "MANAGE PRICING, OFFERS, DISCOUNT AND SALES",
    items: [
      {
        q: "In what ways will managing pricing, offers, and discounts will help me?",
        a: "A right type and right combination of pricing, offers, and discount can encourage prospective customers to try the brand and maximize the sales."
      }
    ]
  },
  {
    title: "CHANNEL SALES MANAGEMENT",
    items: [
      {
        q: "How will I benefit from a channel sales model?",
        a: "Implementing a channel sales models will help you to grow your network connection and lead you to access new markets. Additionally, it will help build trust and will increase customer satisfaction without having to build it all yourself."
      },
      {
        q: "What are some channel strategies?",
        a: "Channel strategies are the plans used to improve channel sales. These can include building brand awareness, increasing sales, or gathering more data among other strategies."
      },
      {
        q: "How do I know if channel management is working for my e-commerce project?",
        a: "If your project is getting engagement from partners, your channel management efforts are working."
      }
    ]
  },
  {
    title: "CAMPAIGN MANAGEMENT",
    items: [
      {
        q: "How will you ensure an effective campaign management?",
        a: [
            "We’ll ensure an effective campaign management by using effective campaign management strategies. Some of them are:",
            "a) Setting specific goals and identifying your target audience.",
            "b) Integrating your social channels with CRM.",
            "c) Tracking your campaign to optimize results.",
            "d) Adding real-time marketing to your campaign mix"
        ]
      },
      {
        q: "What are the 3 keys to a successful campaign?",
        a: "The 3 keys to a successful campaign are target audience, campaign objectives, and key messaging."
      },
      {
        q: "How do I know if channel management is working for my e-commerce project?",
        a: "If your project is getting engagement from partners, your channel management efforts are working."
      }
    ]
  },
  {
    title: "PARTNER VALUE ADDED SERVICE MANAGEMENT",
    items: [
      {
        q: "Why do I need Partner Value Added Service Management?",
        a: "Partner Value added services can help you build a mutually beneficial customer journey that differentiates you from other retailers."
        
      },
      {
        q: "What is the importance of Partner Value Added Service Management?",
        a: "The goal of these services is usually to reduce costs, decrease time to market, increase productivity, and enhance responsiveness for customers. Value-added services can help you build a mutually beneficial customer journey that differentiates you from other retailers and keeps them in your ecosystem post-purchase"
      }
    ]
  },
  {
    title: "BRAND VISIBILITY MANAGEMENT",
    items: [
      {
        q: "What are the Brand Visibility Services that The eComguru offers?    ",
        a: [
            "The eComguru offers 4 types of distinguished Brand Visibility Services:",
            "a) A+ Content",
            "b) A+ Creative",
            "c) Brand Store",
            "d) Photo Shoot"
        ]
      }
    ]
  }
];


  return (
    <HeroLayout>
      <LeftBar />

      <section className="faqTop-header">
        <div className="faqTop-header-content">
          <h1 className="page-title">FAQ</h1>
          <p className="page-subtitle">When in doubt, drop your question and The eComguru will make sure to make you doubt less.</p>
        </div>
      </section>

      <section className="faq-wrapper">
        {faqData.map((section, secIndex) => (
          <div key={secIndex}>
            <h2 className="faq-heading">{section.title}</h2>

            {section.items.map((question, index) => {
              const currentIndex = `${secIndex}-${index}`;
              return (
                <div className="faq-row" key={currentIndex}>
                  <div
                    className="faq-question-row"
                    onClick={() =>
                      setOpenIndex(
                        openIndex === currentIndex ? null : currentIndex
                      )
                    }
                  >
                    <span className="faq-plus">
                      {openIndex === currentIndex ? "−" : "+"}
                    </span>
                    <h4 className="faq-question-text">{question.q}</h4>
                  </div>

                  {openIndex === currentIndex && (
                    <div className="faq-answer">{question.a}</div>

                  )}
                </div>
              );
            })}
          </div>
        ))}
      </section>
    </HeroLayout>
  );
}
