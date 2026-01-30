import * as Yup from "yup";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long")
    .required("Name is required"),

  contactNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Please enter a valid 10 digit number")
    .required("Contact number is required"),

  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  country: Yup.string(),

  brandName: Yup.string().required("Brand name is required"),

  natureOfBusiness: Yup.string().required("Nature of business is required"),

  category: Yup.string(),

  currentSalesFigure: Yup.string(),

  averageSalesPrice: Yup.string(),

  targetSales: Yup.string(),
});

export default contactSchema;
