import ReactCountryFlag from "react-country-flag";

import type {
  CountryOption,
} from "../types/contact.types";

interface CountryDropdownProps {
  value: string;
  error?: string;
  countryOpen: boolean;
  countrySearch: string;
  filteredCountries: CountryOption[];
  countryDropdownRef: React.RefObject<HTMLDivElement | null>;

  onSearchChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  
  onSelect: (
    country: CountryOption
  ) => void;

  toggleDropdown: () => void;
}

export default function CountryDropdown({
  value,
  error,
  countryOpen,
  countrySearch,
  filteredCountries,
  countryDropdownRef,
  onSearchChange,
  onSelect,
  toggleDropdown,
}: CountryDropdownProps) {
  const isActive = value.length > 0;
  
  const handleInputFocus = () => {
    if (!countryOpen) {
      toggleDropdown();
    }
  };
  
  return (
    <div
      className="relative min-h-20 md:min-h-22.5"
      ref={countryDropdownRef}
    >

    <label
        className={`
          pointer-events-none 
          absolute 
          left-0 
          z-10 
          m-0 
          origin-top-left 
          leading-none 
          transition-all 
          duration-300 
          ease-out
          ${error 
            ? "text-[#f22626]" 
            : isActive || countryOpen
              ? "top-0 text-[0.85rem] text-[#1a73e8] transform scale-90" 
              : "top-4 text-[1rem] text-[#777] peer-focus:top-0 peer-focus:text-[0.85rem] peer-focus:text-[#1a73e8] peer-focus:transform peer-focus:scale-90"
          }
        `}
        htmlFor="country"
      >
        Country
      </label>

      <div
        className={`
          flex 
          h-14 
          w-full 
          items-center 
          justify-between 
          gap-4 
          border-0 
          border-b-2 
          bg-transparent 
          px-0 
          pt-6 
          pb-2 
          transition-all 
          duration-300
          ${error 
            ? "border-[#f22626]" 
            : "border-[#9d9d9d] focus-within:border-[#1a73e8]"
          }
        `}
      >
        <input
          className={`
            peer
            h-auto 
            w-full 
            border-0 
            bg-transparent 
            p-0 
            text-[16px] 
            font-[inherit] 
            outline-none 
            transition-all 
            duration-300
            placeholder:text-transparent
            focus:placeholder:text-[#9d9d9d]
            ${error ? "text-[#f22626]" : "text-[#333]"}
          `}
          id="country"
          value={countryOpen ? countrySearch : value}
          onChange={onSearchChange}
          onFocus={handleInputFocus}
          placeholder="Select Your Country"
          type="text"
          aria-label="Select your country"
          title="Select your country"
        />

        <button
          aria-label="Toggle country list"
          className={`
            flex 
            h-6 
            w-6 
            cursor-pointer 
            items-center 
            justify-center 
            border-0 
            bg-transparent 
            p-0 
            transition-transform 
            duration-300
            ${countryOpen ? "rotate-180" : "rotate-0"}
          `}
          onClick={toggleDropdown}
          type="button"
        >
          <span
            className="h-0 w-0 border-x-[5px] border-t-[5px] border-x-transparent border-t-[#777]"
            aria-hidden="true"
          />
        </button>
      </div>

      {countryOpen && (
        <div
          className="absolute top-15 right-0 left-0 z-20 max-h-70 overflow-y-auto border border-[#e5e5e5] bg-white shadow-lg scrollbar-none animate-fadeIn"
          id="country-listbox"
          aria-label="Select your country"
          title="Select your country"
          role="listbox"
        >
          {filteredCountries.map((country) => {
            const isSelected = value === country.name;
            return (
              <button
                className="flex min-h-11.25 w-full cursor-pointer items-center gap-4 border-0 bg-white px-5 py-2 text-left text-[15px] font-[inherit] text-[#2d2d2d] transition-colors duration-200 hover:bg-[#f1f1f1]"
                key={country.code}
                onClick={() => onSelect(country)}
                role="option"
                type="button"
                aria-selected={isSelected ? "true" : "false"}
              >
                <ReactCountryFlag
                  countryCode={country.code}
                  svg
                  className="h-4.5 w-7 shrink-0 rounded-xs object-cover"
                />

                <span>{country.name}</span>
              </button>
            );
          })}
        </div>
      )}

      {error && (
        <p className="mt-2 mb-0 text-[0.875rem] tracking-[0.3px] text-[#f22626] animate-fadeIn">
          {error}
        </p>
      )}
    </div>
  );
}
