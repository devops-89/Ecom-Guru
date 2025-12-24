"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader/loader";

export default function PageWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      window.dispatchEvent(new Event("page-loaded")); 
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return <>{children}</>;
}
