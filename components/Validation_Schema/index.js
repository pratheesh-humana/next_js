import * as Yup from "yup";

export const patientSignUpSchema = Yup.object({
  patientName: Yup.string()
    .min(3)
    .max(25)
    .required("Please enter patient name"),
  phoneNo: Yup.string()
    .min(10)
    .max(10)
    .required("Please enter your phone number"),
  age: Yup.number().min(1).max(110).required("Please enter a your age"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
});

export const signInSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
});
