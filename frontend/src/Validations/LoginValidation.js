import { object, string } from "yup";

const loginSchema = object({
  email: string().email("Invalid email format").required("Email is required"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export default loginSchema;