# Contact Module

This module contains all components, utilities, and data related to the contact page functionality.

## 📁 Folder Structure

```
contact/
├── components/          # Reusable UI components
│   ├── ContactHero.tsx     # Hero section with main heading
│   ├── ContactForm.tsx     # Main contact form container
│   ├── FormField.tsx       # Reusable form input with floating label
│   ├── PhoneInput.tsx      # Phone input with country flag
│   ├── CountryDropdown.tsx # Searchable country selector
│   ├── OfficeList.tsx      # List of office locations
│   └── OfficeCard.tsx      # Individual office card
├── data/               # Static data and constants
│   ├── Office.ts          # Office locations data
│   └── Countries.ts       # Countries list with dial codes
├── hooks/              # Custom React hooks
│   └── UseCountryDropdown.ts # Outside click handling for dropdown
├── types/              # TypeScript type definitions
│   └── contact.types.ts   # All contact-related types
├── utils/              # Utility functions
│   ├── ValidateForm.ts    # Form validation logic
│   └── FilterCountries.ts # Country search filtering
├── page.tsx            # Main contact page component
└── README.md           # This documentation file
```

## 🎯 Key Features

### Form Components
- **FormField**: Floating label animation, error handling, accessibility
- **PhoneInput**: Country flag display, static label, focus highlighting
- **CountryDropdown**: Searchable dropdown, flag icons, keyboard navigation

### Data Management
- **Form State**: Managed with React useState
- **Country Selection**: Default to India, dynamic flag updates
- **Validation**: Real-time validation with error messages

### Styling
- **Tailwind CSS**: All components use Tailwind for styling
- **Animations**: Smooth transitions and floating label effects
- **Responsive**: Mobile-first responsive design

## 🔧 Component Usage

### FormField
```tsx
<FormField
  id="name"
  name="name"
  label="Name*"
  value={formData.name}
  error={errors.name}
  placeholder="Your Name"
  onChange={handleChange}
/>
```

### PhoneInput
```tsx
<PhoneInput
  value={formData.phone}
  error={errors.phone}
  selectedCountry={selectedCountry}
  onChange={handleChange}
/>
```

### CountryDropdown
```tsx
<CountryDropdown
  value={formData.country}
  error={errors.country}
  countryOpen={countryOpen}
  countrySearch={countrySearch}
  filteredCountries={filteredCountries}
  countryDropdownRef={countryDropdownRef}
  onSearchChange={handleCountrySearchChange}
  onSelect={handleCountrySelect}
  toggleDropdown={toggleCountryDropdown}
/>
```

## 📋 Form Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | text | Yes | User's full name |
| email | email | Yes | User's email address |
| phone | tel | No | Phone number with country code |
| country | select | No | Country selection |
| brandName | text | Yes | Brand/company name |
| businessNature | text | Yes | Type of business |
| category | text | No | Business category |
| currentSales | text | No | Current sales figures |
| averageSalesPrice | text | No | Average product price |
| targetSales | text | No | Target sales goals |

## 🎨 Design System

### Colors
- **Primary Blue**: `#1a73e8` (focus states)
- **Error Red**: `#f22626` (error states)
- **Text Gray**: `#333` (main text)
- **Border Gray**: `#9d9d9d` (default borders)
- **Placeholder Gray**: `#9d9d9d` (placeholder text)

### Typography
- **Font Size**: 16px (inputs), 14px (labels), 14px (errors)
- **Font Weight**: Normal (400), Medium (500), Black (900)
- **Line Height**: 1.45 (paragraphs), 0.95 (headings)

### Spacing
- **Container Height**: 80px (mobile), 90px (desktop)
- **Input Height**: 56px (14 * 4)
- **Padding**: 24px (pt-6), 8px (pb-2)
- **Margins**: 8px (mt-2), 32px (gap-8)

## 🔄 State Management

### Form State
```tsx
const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
const [errors, setErrors] = useState<FormErrors>({});
const [submitted, setSubmitted] = useState(false);
```

### Country State
```tsx
const [selectedCountry, setSelectedCountry] = useState<CountryOption>(indiaCountry);
const [countryOpen, setCountryOpen] = useState(false);
const [countrySearch, setCountrySearch] = useState("");
```

## 🧪 Validation Rules

- **Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Brand Name**: Required, minimum 2 characters
- **Business Nature**: Required, minimum 2 characters
- **Phone**: Optional, but if provided must be valid format
- **Country**: Optional, but affects phone validation

## 🚀 Performance Optimizations

1. **Memoized Country Filtering**: Countries are filtered and sorted efficiently
2. **Debounced Search**: Country search is optimized for performance
3. **Lazy Loading**: Components are loaded only when needed
4. **Minimal Re-renders**: State updates are optimized to prevent unnecessary renders

## 🎯 Accessibility Features

- **ARIA Labels**: All form elements have proper ARIA attributes
- **Error Announcements**: Error messages are announced to screen readers
- **Keyboard Navigation**: Full keyboard support for all interactions
- **Focus Management**: Proper focus handling and visual indicators
- **Semantic HTML**: Proper use of form elements and labels

## 🔧 Development Notes

### Adding New Form Fields
1. Add field to `FormData` type in `contact.types.ts`
2. Add field to `INITIAL_FORM` constant in `page.tsx`
3. Add validation rule in `ValidateForm.ts`
4. Add field to `ContactForm.tsx` component

### Customizing Validation
- Edit `utils/ValidateForm.ts` to modify validation rules
- Add new error types to `FormErrors` type
- Update error messages as needed

### Styling Changes
- All styles use Tailwind CSS classes
- Color scheme can be updated by changing color values
- Animations can be modified by adjusting transition durations

## 📚 Dependencies

- **react-country-flag**: For country flag icons
- **tailwindcss**: For styling
- **react**: Core React functionality
- **typescript**: Type safety

## 🐛 Known Issues

None currently. All components are fully functional and tested.

## 🔮 Future Enhancements

1. **Form Persistence**: Save form data to localStorage
2. **Multi-step Form**: Break form into multiple steps
3. **File Upload**: Add support for file attachments
4. **Real-time Validation**: Validate fields as user types
5. **Integration**: Connect to actual backend API