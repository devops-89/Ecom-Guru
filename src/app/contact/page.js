"use client";
import { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./contact.module.css";
import LeftBar from "@/components/LeftBar";
import RightSidebar from "@/components/RightSidebar";
import BrandGrid from "@/components/BrandGrid/BrandGrid";
import Partners from "@/components/Partners/Partners";
import Services from "@/components/Services/Services";
import contactSchema from "./schema/contactSchema";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import LabSection from "@/components/LabSection/LabSection";

export default function ContactPage() {
  const initialValues = {
    name: "",
    contactNumber: "",
    email: "",
    country: "",
    brandName: "",
    natureOfBusiness: "",
    category: "",
    currentSalesFigure: "",
    averageSalesPrice: "",
    targetSales: "",
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    console.log("Contact form submitted:", values);
    setSubmitting(false);
    resetForm();
  };

  return (
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
            happy to assist you. Feel free to contact us by telephone or email,
            and we will be sure to get back to you as soon as possible.
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
                2nd Floor, D-320, Sector 63, Noida, Uttar Pradesh – 201307 INDIA
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
            {({ errors, touched, isSubmitting }) => (
              <Form className={styles.contactForm} noValidate>
                <div className={styles.formGrid}>
                  {/* LEFT COLUMN */}
                  <div className={styles.formColumn}>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>
                        Name <span className={styles.required}>*</span>
                      </label>
                      <Field
                        name="name"
                        placeholder="Your Name"
                        className={`${styles.input} ${errors.name && touched.name ? styles.inputError : ""}`}
                      />
                      <ErrorMessage name="name">
                        {(msg) => <div className={styles.errorMsg}>{msg}</div>}
                      </ErrorMessage>
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.label}>
                        Email <span className={styles.required}>*</span>
                      </label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="Enter Email Address"
                        className={`${styles.input} ${errors.email && touched.email ? styles.inputError : ""}`}
                      />
                      <ErrorMessage name="email">
                        {(msg) => <div className={styles.errorMsg}>{msg}</div>}
                      </ErrorMessage>
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.label}>
                        Brand Name <span className={styles.required}>*</span>
                      </label>
                      <Field
                        name="brandName"
                        placeholder="Enter Brand Name"
                        className={`${styles.input} ${errors.brandName && touched.brandName ? styles.inputError : ""}`}
                      />
                      <ErrorMessage name="brandName">
                        {(msg) => <div className={styles.errorMsg}>{msg}</div>}
                      </ErrorMessage>
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Category</label>
                      <Field
                        name="category"
                        placeholder="Ex. Apparel"
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.label}>
                        Average Sales Price
                      </label>
                      <Field
                        name="averageSalesPrice"
                        placeholder="Enter ASP/ product"
                        className={styles.input}
                      />
                    </div>
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className={styles.formColumn}>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>
                        Contact Number{" "}
                        <span className={styles.required}>*</span>
                      </label>
                      <Field
                        name="contactNumber"
                        placeholder="Enter your 10 digit number"
                        className={`${styles.input} ${errors.contactNumber && touched.contactNumber ? styles.inputError : ""}`}
                      />
                      <ErrorMessage name="contactNumber">
                        {(msg) => <div className={styles.errorMsg}>{msg}</div>}
                      </ErrorMessage>
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Country</label>
                      <Field
                        name="country"
                        placeholder="Enter your country name"
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.label}>
                        Nature of Business{" "}
                        <span className={styles.required}>*</span>
                      </label>
                      <Field
                        name="natureOfBusiness"
                        placeholder="Ex. Manufacturer"
                        className={`${styles.input} ${errors.natureOfBusiness && touched.natureOfBusiness ? styles.inputError : ""}`}
                      />
                      <ErrorMessage name="natureOfBusiness">
                        {(msg) => <div className={styles.errorMsg}>{msg}</div>}
                      </ErrorMessage>
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.label}>
                        Current Sales Figure
                      </label>
                      <Field
                        name="currentSalesFigure"
                        placeholder="Enter number of SKU sold online per day"
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Target Sales</label>
                      <Field
                        name="targetSales"
                        placeholder="Enter daily sales you would like us to achieve"
                        className={styles.input}
                      />
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
  );
}
