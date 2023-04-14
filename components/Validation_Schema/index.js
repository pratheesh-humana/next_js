import * as Yup from "yup";

export const patientSignUpSchema = Yup.object({
  patientName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .min(3, "Name must be at least 3 characters")
    .max(25)
    .required("Please enter patient name"),
  phoneNo: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8, "Phone Number must be greater than or equal to 8")
    .required("Phone number is required"),
  age: Yup.number()
    .min(1, "Age must be greater than or equal to 1")
    .max(120, "Age must be less than or equal to 120")
    .required("Please enter your age"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  country: Yup.string().required("Please select the country"),
});

export const signInSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});
