import * as Yup from "yup";

export const validateSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Password must match"),
  picked: Yup.string().required("Gender is required"),
  check: Yup.string().required("City is required"),
  selectedOption: Yup.string().required('Please select an option'),
  textarea: Yup.string().min(50).max(100).required("Please fill the text"),
});