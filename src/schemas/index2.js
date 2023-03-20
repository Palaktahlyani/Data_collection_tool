import * as Yup from "yup";
import "yup-phone";

export const signupSchema = Yup.object({
  hospital: Yup.array(),
  hospital_name: Yup.string()
    .min(3)
    .max(100)
    .required("*Please enter the name"),
  addinfo: Yup.string().min(3),
  hospital_website: Yup.string().url().required("*Please enter the email"),
  area: Yup.string().min(3).max(100).required("*Please enter the area"),
  cityname: Yup.string().min(2).max(100).required("*Please enter the city"),
  state: Yup.string().min(2).max(100).required("*Please enter the state"),
  zipcode: Yup.number().required("*Please enter the zip code"),
  country: Yup.string().min(3).max(100).required("*Please enter the country"),
  contact_name: Yup.string().min(3).max(100).required("*Please enter the name"),
  contact_number: Yup.string().required("*Please enter the number"),
  contact_email: Yup.string()
    .email("invalid email")
    .required("*Please enter the email"),
});
