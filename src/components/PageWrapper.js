"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader/loader";

export default function PageWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    window.dispatchEvent(new Event("page-loaded"));
  }, []);

  if (loading) return <Loader />;

  return <>{children}</>;
}
