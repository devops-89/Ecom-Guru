"use client";

import { useRef, useState } from "react";

// Layout Components
import LeftBar from "../../components/LeftBar";
import HeroLayout from "../../components/HeroLayout";
import BrandGrid from "../../components/BrandGrid/BrandGrid";

// Contact Components
import ContactHero from "./components/ContactHero";
import OfficeList from "./components/OfficeList";
import ContactForm from "./components/ContactForm";

// Data & Utils
import { OFFICES } from "./data/Office";
import { COUNTRY_OPTIONS } from "./data/Countries";
import validateForm from "./utils/ValidateForm";
import filterCountries from "./utils/FilterCountries";
import useCountryDropdown from "./hooks/UseCountryDropdown";

// Types
import type {
  FormData,
  FormErrors,
  CountryOption,
} from "./types/contact.types";

/**
 * Initial form state with empty values
 */
const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  country: "",
  brandName: "",
  businessNature: "",
  category: "",
  currentSales: "",
  averageSalesPrice: "",
  targetSales: "",
};

/**
 * Contact Page Component
 * 
 * Features:
 * - Hero section with contact information
 * - Office locations list
 * - Contact form with validation
 * - Country selection with search functionality
 * - Phone input with country flags
 */
export default function ContactPage() {
  // Form state management
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  // Country selection state (default: India)
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(
    COUNTRY_OPTIONS.find((country) => country.code === "IN") || COUNTRY_OPTIONS[0]
  );
  const [countryOpen, setCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const countryDropdownRef = useRef<HTMLDivElement | null>(null);

  // Filter and sort countries based on search
  const filteredCountries = filterCountries(COUNTRY_OPTIONS, countrySearch)
    .sort((firstCountry, secondCountry) => {
      const search = countrySearch.trim().toLowerCase();
      if (!search) return 0;

      const firstStarts = firstCountry.name.toLowerCase().startsWith(search);
      const secondStarts = secondCountry.name.toLowerCase().startsWith(search);

      if (firstStarts === secondStarts) return 0;
      return firstStarts ? -1 : 1;
    });

  // Custom hook for country dropdown outside click handling
  useCountryDropdown({
    ref: countryDropdownRef,
    country: formData.country,
    setCountryOpen,
    setCountrySearch,
  });

  /**
   * Handle form field changes
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitted(false);
  };

  /**
   * Handle country selection from dropdown
   */
  const handleCountrySelect = (country: CountryOption) => {
    setSelectedCountry(country);
    setCountrySearch(country.name);
    setFormData((prev) => ({
      ...prev,
      country: country.name,
      phone: country.dial,
    }));
    setErrors((prev) => ({
      ...prev,
      country: "",
      phone: "",
    }));
    setCountryOpen(false);
    setSubmitted(false);
  };

  /**
   * Handle country search input changes
   */
  const handleCountrySearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setCountrySearch(value);
    setCountryOpen(true);
    setFormData((prev) => ({ ...prev, country: "" }));
    setErrors((prev) => ({ ...prev, country: "" }));
    setSubmitted(false);
  };

  /**
   * Handle form submission
   */
  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // If validation fails, don't submit
    if (Object.keys(validationErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    // Success: Reset form and show success message
    setSubmitted(true);
    setCountryOpen(false);
    setCountrySearch("");
    setFormData(INITIAL_FORM);
    
    // TODO: Add actual form submission logic here
    console.log("Form submitted:", formData);
  };

  /**
   * Toggle country dropdown
   */
  const toggleCountryDropdown = () => {
    setCountrySearch(formData.country);
    setCountryOpen((prev) => !prev);
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Left Navigation Bar */}
      <LeftBar />
      
      {/* Hero Section */}
      {/* <HeroLayout> */}
        <ContactHero />
      {/* </HeroLayout> */}

      {/* Main Contact Section */}
      <section
        className="min-h-screen grid grid-cols-1 gap-20 bg-[#F9F9F9] px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-24 lg:px-20 lg:py-40"
        id="contact"
      >
        {/* Office Locations */}
        <OfficeList offices={OFFICES} />

        {/* Contact Form */}
        <ContactForm
          formData={formData}
          errors={errors}
          submitted={submitted}
          selectedCountry={selectedCountry}
          countryOpen={countryOpen}
          countrySearch={countrySearch}
          filteredCountries={filteredCountries}
          allCountries={COUNTRY_OPTIONS}
          countryDropdownRef={countryDropdownRef}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onCountrySearchChange={handleCountrySearchChange}
          onCountrySelect={handleCountrySelect}
          toggleCountryDropdown={toggleCountryDropdown}
        />
      </section>

      {/* Brand Grid Section */}
      <BrandGrid />
    </div>
  );
}
