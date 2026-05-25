import FormField from "./FormField";
import PhoneInput from "./PhoneInput";
import CountryDropdown from "./CountryDropdown";

import type {
  FormData,
  FormErrors,
  CountryOption,
} from "../types/contact.types";

interface ContactFormProps {
  formData: FormData;
  errors: FormErrors;
  submitted: boolean;
  selectedCountry: CountryOption;
  countryOpen: boolean;
  countrySearch: string;
  filteredCountries: CountryOption[];
  allCountries: CountryOption[]; // Add this for phone auto-detection
  countryDropdownRef: React.RefObject<HTMLDivElement | null>;

  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => void;
  onCountrySearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCountrySelect: (country: CountryOption) => void;
  toggleCountryDropdown: () => void;
}

export default function ContactForm({
  formData,
  errors,
  submitted,
  selectedCountry,
  countryOpen,
  countrySearch,
  filteredCountries,
  allCountries,
  countryDropdownRef,
  onChange,
  onSubmit,
  onCountrySearchChange,
  onCountrySelect,
  toggleCountryDropdown,
}: ContactFormProps) {
  return (
    <form
      className="flex flex-col gap-10"
      onSubmit={onSubmit}
      noValidate
    >
      <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">

        <FormField
          id="name"
          name="name"
          label="Name*"
          value={formData.name}
          error={errors.name}
          placeholder="Your Name"
          onChange={onChange}
        />

        <PhoneInput
          value={formData.phone}
          error={errors.phone}
          selectedCountry={selectedCountry}
          allCountries={allCountries}
          onChange={onChange}
          onCountryDetected={onCountrySelect}
        />

        <FormField
          id="email"
          name="email"
          type="email"
          label="Email*"
          value={formData.email}
          error={errors.email}
          placeholder="Your Email"
          onChange={onChange}
        />

        <CountryDropdown
          value={formData.country}
          error={errors.country}
          countryOpen={countryOpen}
          countrySearch={countrySearch}
          filteredCountries={filteredCountries}
          countryDropdownRef={countryDropdownRef}
          onSearchChange={onCountrySearchChange}
          onSelect={onCountrySelect}
          toggleDropdown={toggleCountryDropdown}
        />

        <FormField
          id="brandName"
          name="brandName"
          label="Brand Name*"
          value={formData.brandName}
          error={errors.brandName}
          placeholder="Your Brand Name"
          onChange={onChange}
        />

        <FormField
          id="businessNature"
          name="businessNature"
          label="Nature of Business*"
          value={formData.businessNature}
          error={errors.businessNature}
          placeholder="Your Nature of Business"
          onChange={onChange}
        />

        <FormField
          id="category"
          name="category"
          label="Category"
          value={formData.category}
          placeholder="Your Category"
          onChange={onChange}
        />

        <FormField
          id="currentSales"
          name="currentSales"
          label="Current Sales Figure"
          value={formData.currentSales}
          placeholder="Your Current Sales Figure"
          onChange={onChange}
        />

        <FormField
          id="averageSalesPrice"
          name="averageSalesPrice"
          label="Average Sales Price"
          value={formData.averageSalesPrice}
          placeholder="Your Average Sales Price"
          onChange={onChange}
        />

        <FormField
          id="targetSales"
          name="targetSales"
          label="Target Sales"
          value={formData.targetSales}
          placeholder="Your Target Sales"
          onChange={onChange}
        />

      </div>

      <div className="flex min-h-16.5 items-center gap-4.5">
        <button
          className="h-16.25 w-full cursor-pointer border-0 bg-[#111] text-[1.12rem] font-bold text-white transition duration-250 hover:-translate-y-0.5 hover:border hover:border-[#111] hover:bg-white hover:text-[#111] md:w-47"
          type="submit"
        >
          Submit
        </button>
        {submitted && (
          <p className="m-0 text-[0.95rem] text-[#247d39]">
            Thank you. Your enquiry has been received.
          </p>
        )}
      </div>
    </form>
  );
}
