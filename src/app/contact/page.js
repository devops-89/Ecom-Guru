"use client";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import styles from "./contact.module.css";
import LeftBar from "@/components/LeftBar";
import RightSidebar from "@/components/RightSidebar";
import BrandGrid from "@/components/BrandGrid/BrandGrid";
import Partners from "@/components/Partners/Partners";
import Services from "@/components/Services/Services";
import contactSchema from "./schema/contactSchema";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import LabSection from "@/components/LabSection/LabSection";
import { countries } from "@/utils/countries";

// MUI Imports
import {
  TextField,
  Select,
  MenuItem,
  InputAdornment,
  FormControl,
  InputLabel,
  FormHelperText,
  ThemeProvider,
  createTheme,
} from "@mui/material";

// Helper for Flag Emoji
const getFlagEmoji = (countryCode) => {
  if (!countryCode || countryCode === "globe") return "🌐";
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
};

// Custom Black Theme for MUI to match design
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // Black focus color
    },
    text: {
      primary: "#111",
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          backgroundColor: "#fff",
          transition: "all 0.2s ease-in-out",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e2e8f0", // Lighter, cleaner border
            transition: "border-color 0.2s",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#cbd5e1",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#000",
            borderWidth: "1.5px",
          },
          "&.Mui-focused": {
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)", // Subtle shadow on focus
          },
        },
        input: {
          padding: "12px 16px",
          fontSize: "15px",
          "&::placeholder": {
            color: "#94a3b8",
            opacity: 1,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#334155",
          fontSize: "14px",
          fontWeight: 600,
          marginBottom: "8px", // Space below label
          position: "relative",
          transform: "none", // Reset MUI positioning
          "&.Mui-focused": {
            color: "#000",
          },
        },
        shrink: {
          transform: "none", // Prevent MUI shrink logic
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: "4px",
          marginTop: "2px",
          position: "absolute",
          bottom: "-18px",
          fontSize: "11px",
        },
      },
    },
  },
});

export default function ContactPage() {
  // Logic for defaults
  const [selectedPhoneCountry, setSelectedPhoneCountry] = useState(
    countries.find((c) => c.code === "US") || countries[0],
  );

  const initialValues = {
    name: "",
    contactNumber: "",
    email: "",
    country: "", // Initialize country as empty string for MUI Select
    brandName: "",
    natureOfBusiness: "",
    category: "",
    currentSalesFigure: "",
    averageSalesPrice: "",
    targetSales: "",
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    const fullData = {
      ...values,
      contactNumber: `${selectedPhoneCountry.dial_code} ${values.contactNumber}`,
      country: values.country, // Use the country value directly from Formik state
    };
    console.log("Contact form submitted:", fullData);
    setSubmitting(false);
    resetForm();
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.contactPage}>
        <LeftBar />

        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <h2>Contact Us</h2>
          <p>
            Got a question? Need a little help? Then you're in the right place.
          </p>
          <RightSidebar />
        </section>

        <section className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <h2>WE’D LOVE TO HEAR FROM YOU. LET’S TALK ABOUT IT!</h2>
            <p>
              If you have any questions or concerns, a member of staff will be
              happy to assist you. Feel free to contact us by telephone or
              email, and we will be sure to get back to you as soon as possible.
            </p>
            <ul>
              <li>
                <FaEnvelope className={styles.contactIcon} />
                <a href="mailto:info@theecomguru.com"> info@theecomguru.com</a>
              </li>
              <li>
                <FaPhoneAlt className={styles.contactIcon} />
                <a href="tel:+919717300851"> +9197173 00851 </a>
              </li>
              <li className={styles.addressLine}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <a
                  href="https://www.google.com/maps/place/2nd+Floor,+D-320,+Sector+63,+Noida,+Uttar+Pradesh+201307/@28.574222,77.275366,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce567641b2c0d:0x23c5c3b3b3b3b3b3!8m2!3d28.574222!4d77.277555"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  2nd Floor, D-320, Sector 63, Noida, Uttar Pradesh – 201307
                  INDIA
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.formWrapper}>
            <Formik
              initialValues={initialValues}
              validationSchema={contactSchema}
              onSubmit={handleSubmit}
            >
              {({
                errors,
                touched,
                isSubmitting,
                handleChange,
                handleBlur,
                values,
                setFieldValue,
              }) => (
                <Form className={styles.contactForm} noValidate>
                  <div className={styles.formGrid}>
                    {/* LEFT COLUMN */}
                    <div className={styles.formColumn}>
                      <div className={styles.inputGroup}>
                        <FormControl fullWidth>
                          <InputLabel shrink className={styles.label}>
                            Name *
                          </InputLabel>
                          <TextField
                            fullWidth
                            variant="outlined"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                          />
                        </FormControl>
                      </div>

                      <div className={styles.inputGroup}>
                        <FormControl fullWidth>
                          <InputLabel shrink className={styles.label}>
                            Email *
                          </InputLabel>
                          <TextField
                            fullWidth
                            variant="outlined"
                            id="email"
                            name="email"
                            placeholder="Enter Email Address"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                          />
                        </FormControl>
                      </div>

                      <div className={styles.inputGroup}>
                        <FormControl fullWidth>
                          <InputLabel shrink className={styles.label}>
                            Brand Name *
                          </InputLabel>
                          <TextField
                            fullWidth
                            variant="outlined"
                            id="brandName"
                            name="brandName"
                            placeholder="Enter Brand Name"
                            value={values.brandName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              touched.brandName && Boolean(errors.brandName)
                            }
                            helperText={touched.brandName && errors.brandName}
                          />
                        </FormControl>
                      </div>

                      <div className={styles.inputGroup}>
                        <FormControl fullWidth>
                          <InputLabel shrink className={styles.label}>
                            Category
                          </InputLabel>
                          <TextField
                            fullWidth
                            variant="outlined"
                            id="category"
                            name="category"
                            placeholder="Ex. Apparel"
                            value={values.category}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.category && Boolean(errors.category)}
                            helperText={touched.category && errors.category}
                          />
                        </FormControl>
                      </div>

                      <div className={styles.inputGroup}>
                        <FormControl fullWidth>
                          <InputLabel shrink className={styles.label}>
                            Average Sales Price
                          </InputLabel>
                          <TextField
                            fullWidth
                            type="text"
                            inputProps={{ inputMode: "numeric" }}
                            variant="outlined"
                            id="averageSalesPrice"
                            name="averageSalesPrice"
                            placeholder="Enter ASP/ product"
                            value={values.averageSalesPrice}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              touched.averageSalesPrice &&
                              Boolean(errors.averageSalesPrice)
                            }
                            helperText={
                              touched.averageSalesPrice &&
                              errors.averageSalesPrice
                            }
                          />
                        </FormControl>
                      </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className={styles.formColumn}>
                      {/* Phone Number with Prefix */}
                      <div className={styles.inputGroup}>
                        <FormControl
                          fullWidth
                          error={
                            touched.contactNumber &&
                            Boolean(errors.contactNumber)
                          }
                        >
                          <InputLabel shrink className={styles.label}>
                            Contact Number *
                          </InputLabel>
                          <TextField
                            fullWidth
                            variant="outlined"
                            id="contactNumber"
                            name="contactNumber"
                            placeholder="1234 567 890"
                            value={values.contactNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              touched.contactNumber &&
                              Boolean(errors.contactNumber)
                            }
                            helperText={
                              touched.contactNumber && errors.contactNumber
                            }
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Select
                                    variant="outlined"
                                    value={selectedPhoneCountry.code}
                                    onChange={(e) => {
                                      const country = countries.find(
                                        (c) => c.code === e.target.value,
                                      );
                                      setSelectedPhoneCountry(country);
                                    }}
                                    sx={{
                                      marginRight: 1,
                                      minWidth: 70,
                                      "& .MuiOutlinedInput-notchedOutline": {
                                        border: "none",
                                      }, // No internal border for the prefix select
                                      "& .MuiSelect-select": { paddingLeft: 0 },
                                    }}
                                    renderValue={(value) => {
                                      const c = countries.find(
                                        (c) => c.code === value,
                                      );
                                      return (
                                        <div
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 4,
                                          }}
                                        >
                                          <span>{getFlagEmoji(c?.code)}</span>
                                          <span
                                            style={{
                                              fontSize: "14px",
                                              color: "#000",
                                            }}
                                          >
                                            {c?.dial_code}
                                          </span>
                                        </div>
                                      );
                                    }}
                                  >
                                    {countries.map((c) => (
                                      <MenuItem key={c.code} value={c.code}>
                                        <span style={{ marginRight: 8 }}>
                                          {getFlagEmoji(c.code)}
                                        </span>
                                        {c.name} ({c.dial_code})
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </FormControl>
                      </div>

                      {/* Country Dropdown */}
                      <div className={styles.inputGroup}>
                        <FormControl
                          fullWidth
                          variant="outlined"
                          error={touched.country && Boolean(errors.country)}
                        >
                          <InputLabel
                            shrink
                            id="country-label"
                            className={styles.label}
                          >
                            Country
                          </InputLabel>
                          <Select
                            labelId="country-label"
                            id="country"
                            name="country"
                            value={values.country || ""}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            displayEmpty
                            renderValue={(selected) => {
                              if (!selected) {
                                return (
                                  <span
                                    style={{ color: "#94a3b8", fontSize: 14 }}
                                  >
                                    Select Your Country
                                  </span>
                                );
                              }
                              const c = countries.find(
                                (co) => co.name === selected,
                              );
                              return (
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                  }}
                                >
                                  <span>{getFlagEmoji(c?.code)}</span>
                                  {selected}
                                </div>
                              );
                            }}
                          >
                            <MenuItem value="" disabled>
                              <em>Select Your Country</em>
                            </MenuItem>
                            {countries.map((c) => (
                              <MenuItem key={c.code} value={c.name}>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                  }}
                                >
                                  <span>{getFlagEmoji(c.code)}</span>
                                  {c.name}
                                </div>
                              </MenuItem>
                            ))}
                          </Select>
                          <FormHelperText>
                            {touched.country && errors.country}
                          </FormHelperText>
                        </FormControl>
                      </div>

                      <div className={styles.inputGroup}>
                        <FormControl fullWidth>
                          <InputLabel shrink className={styles.label}>
                            Nature of Business *
                          </InputLabel>
                          <TextField
                            fullWidth
                            variant="outlined"
                            id="natureOfBusiness"
                            name="natureOfBusiness"
                            placeholder="Ex. Manufacturer"
                            value={values.natureOfBusiness}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              touched.natureOfBusiness &&
                              Boolean(errors.natureOfBusiness)
                            }
                            helperText={
                              touched.natureOfBusiness &&
                              errors.natureOfBusiness
                            }
                          />
                        </FormControl>
                      </div>

                      <div className={styles.inputGroup}>
                        <FormControl fullWidth>
                          <InputLabel shrink className={styles.label}>
                            Current Sales Figure
                          </InputLabel>
                          <TextField
                            fullWidth
                            type="text"
                            inputProps={{ inputMode: "numeric" }}
                            variant="outlined"
                            id="currentSalesFigure"
                            name="currentSalesFigure"
                            placeholder="Enter number of SKU sold online per day"
                            value={values.currentSalesFigure}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              touched.currentSalesFigure &&
                              Boolean(errors.currentSalesFigure)
                            }
                            helperText={
                              touched.currentSalesFigure &&
                              errors.currentSalesFigure
                            }
                          />
                        </FormControl>
                      </div>

                      <div className={styles.inputGroup}>
                        <FormControl fullWidth>
                          <InputLabel shrink className={styles.label}>
                            Target Sales
                          </InputLabel>
                          <TextField
                            fullWidth
                            type="text"
                            inputProps={{ inputMode: "numeric" }}
                            variant="outlined"
                            id="targetSales"
                            name="targetSales"
                            placeholder="Enter daily sales you would like us to achieve"
                            value={values.targetSales}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              touched.targetSales && Boolean(errors.targetSales)
                            }
                            helperText={
                              touched.targetSales && errors.targetSales
                            }
                          />
                        </FormControl>
                      </div>
                    </div>
                  </div>

                  <div className={styles.formFooter}>
                    <button
                      type="submit"
                      className={styles.submitBtn}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </section>
        <Services />
        <Partners />
        <LabSection />
        <BrandGrid />
      </div>
    </ThemeProvider>
  );
}
