import type { FormData, FormErrors } from "../types/contact.types";

export default function validateForm(formData: FormData): FormErrors {
  const nextErrors: FormErrors = {};

  if (!formData.name.trim()) {
    nextErrors.name = "Name is required";
  }

  if (!formData.email.trim()) {
    nextErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    nextErrors.email = "Enter a valid email";
  }

  if (!formData.phone.trim()) {
    nextErrors.phone = "Contact number is required";
  } else if (!formData.phone.startsWith("+")) {
    nextErrors.phone = "Use country code with number";
  } else if (!/^\+\d{6,15}$/.test(formData.phone.replace(/\s/g, ""))) {
    nextErrors.phone = "Enter valid contact number";
  }

   if (!formData.country) {
    nextErrors.country =
      "Country is required";
  }

  if (!formData.brandName.trim()) {
    nextErrors.brandName =
      "Brand Name is Required";
  }

  if (!formData.businessNature.trim()) {
    nextErrors.businessNature =
      "Nature Of Business is Required";
  }

  return nextErrors;
}
