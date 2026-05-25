import ReactCountryFlag from "react-country-flag";
import type { CountryOption } from "../types/contact.types";

/**
 * PhoneInput Component
 * 
 * A specialized input field for phone numbers with:
 * - Country flag display (dynamic based on selected country)
 * - Auto-detection of country code when manually entered
 * - Static label (no animation)
 * - Blue border highlight on focus
 * - Error state handling
 */

interface PhoneInputProps {
  value: string;
  error?: string;
  selectedCountry: CountryOption;
  allCountries: CountryOption[]; // Add this to access all countries for detection
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCountryDetected?: (country: CountryOption) => void; // Callback when country is auto-detected
}

export default function PhoneInput({
  value,
  error,
  selectedCountry,
  allCountries,
  onChange,
  onCountryDetected,
}: PhoneInputProps) {
  
  /**
   * Detect country from phone number input
   * Extracts country code and finds matching country
   */
  const detectCountryFromInput = (phoneValue: string): CountryOption | null => {
    // Remove all non-digit characters except +
    const cleanValue = phoneValue.replace(/[^\d+]/g, '');
    
    // Check if it starts with +
    if (!cleanValue.startsWith('+')) {
      return null;
    }

    // Try to match country codes (longest first to avoid conflicts)
    // Sort by dial code length in descending order
    const sortedCountries = [...allCountries].sort((a, b) => b.dial.length - a.dial.length);
    
    for (const country of sortedCountries) {
      if (cleanValue.startsWith(country.dial)) {
        return country;
      }
    }
    
    return null;
  };

  /**
   * Handle input change with auto-detection
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    
    // Call the original onChange
    onChange(event);
    
    // Auto-detect country if callback is provided
    if (onCountryDetected) {
      const detectedCountry = detectCountryFromInput(newValue);
      
      // Only update if we detected a different country
      if (detectedCountry && detectedCountry.code !== selectedCountry.code) {
        onCountryDetected(detectedCountry);
      }
    }
  };

  return (
    <div className="relative min-h-20 md:min-h-22.5">
      {/* Static Label */}
      <label
        className={`block mb-2 text-[1rem] font-medium ${
          error ? "text-[#f22626]" : value ? "text-[#1a73e8]" : "text-[#777]"
        }`}
        htmlFor="phone"
      >
        Contact Number
      </label>

      {/* Input Container with Flag */}
      <div
        className={`
          flex 
          h-12 
          items-center 
          gap-3 
          border-0 
          border-b-2 
          pb-2 
          transition-all 
          duration-300
          ${error 
            ? "border-[#f22626]" 
            : "border-[#9d9d9d] focus-within:border-[#1a73e8]"
          }
        `}
      >
        {/* Country Flag */}
        <ReactCountryFlag
          countryCode={selectedCountry.code}
          svg
          className="h-4 w-6 shrink-0 rounded-sm object-cover transition-all duration-300"
          title={selectedCountry.name}
        />

        {/* Phone Input */}
        <input
          className={`
            h-auto 
            w-full 
            border-0 
            bg-transparent 
            p-0 
            font-[inherit] 
            text-[16px] 
            outline-none 
            transition-all 
            duration-300
            placeholder:text-[#9d9d9d]
            ${error ? "text-[#f22626]" : "text-[#333]"}
          `}
          id="phone"
          name="phone"
          type="tel"
          value={value}
          onChange={handleInputChange}
          placeholder={`${selectedCountry.dial} 9876543210`}
          aria-describedby={error ? "phone-error" : undefined}
          aria-invalid={Boolean(error)}
        />
      </div>

      {/* Error Message */}
      {error && (
        <p 
          id="phone-error"
          className="mt-2 mb-0 text-[0.875rem] tracking-[0.3px] text-[#f22626] animate-fadeIn"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
