import { object, string, ref } from "yup";

const userSchema = object({
  email: string().email("Invalid email format").required("Email is required"),
  username: string().required("Username is required"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: string()
    .oneOf([ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export default userSchema;
