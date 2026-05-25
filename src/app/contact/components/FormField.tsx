/**
 * FormField Component
 * 
 * A reusable form input field with:
 * - Floating label animation
 * - Error state handling
 * - Consistent styling across all form inputs
 * - Accessibility features
 */

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  type?: string;
  error?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormField({
  id,
  name,
  label,
  value,
  type = "text",
  error,
  placeholder,
  onChange,
}: FormFieldProps) {
  const isActive = value.length > 0;

  return (
    <div className="relative min-h-20 md:min-h-22.5">
      {/* Input Field */}
      <input
        className={`
          peer 
          h-14 
          w-full 
          rounded-none 
          border-0 
          border-b-2 
          bg-transparent 
          px-0 
          pt-6 
          pb-2 
          font-[inherit] 
          text-[16px] 
          outline-none 
          transition-all 
          duration-300 
          placeholder:text-transparent
          focus:placeholder:text-[#9d9d9d]
          ${error
            ? "border-[#f22626] text-[#f22626]"
            : "border-[#9d9d9d] focus:border-[#1a73e8] text-[#333]"
          }
        `}
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={Boolean(error)}
      />

      {/* Floating Label */}
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
            : isActive || value
              ? "top-0 text-[0.85rem] text-[#1a73e8] transform scale-90"
              : "top-4 text-[1rem] text-[#777] peer-focus:top-0 peer-focus:text-[0.85rem] peer-focus:text-[#1a73e8] peer-focus:transform peer-focus:scale-90"
          }
        `}
        htmlFor={id}
      >
        {label}
      </label>

      {/* Error Message */}
      {error && (
        <p 
          id={`${id}-error`}
          className="mt-2 mb-0 text-[0.875rem] tracking-[0.3px] text-[#f22626] animate-fadeIn"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
