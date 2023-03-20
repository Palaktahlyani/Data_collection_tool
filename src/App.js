import "./App.css";
import { useFormik } from "formik";
import { signupSchema } from "./schemas/index2";
import React from "react";

const initialValues = {
  hospital_name: "",
  hospital_website: "",
  area: "",
  cityname: "",
  state: "",
  zipcode: "",
  country: "",
  contact_name: "",
  contact_number: "",
  contact_email: "",
  general: "",
  specialty: "",
  children: "",
  women: "",
  rehabilitation: "",
  psychiatric: "",
  other_hospital: "",
  emergency: "",
  surgery: "",
  obstretrics: "",
  pediatrics: "",
  oncology: "",
  cardiology: "",
  neurology: "",
  orthopedics: "",
  radiology: "",
  other_service: "",
  icu: "",
  nicu: "",
  bloodbank: "",
  pharmacy: "",
  laboratory: "",
  cafeteria: "",
  parking: "",
  insurance: "",
  addinfo: "",
};

function App() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        console.log("🚀Submitted ~ values", values);

        action.resetForm();
      },
    });

  console.log("🚀Submitted ~ errors", errors);

  // const [isCheked, setIsChecked] = useState(false);

  return (
    <div className="container">
      <div className="header">
        <h2 className="heading">
          Few Steps Away From Creating an <br /> Impact...
        </h2>

        <p className="para">
          Welcome. Within a few minutes, you will be part of our family. This
          form filling will take a few moments of you but can give lives to
          millions. <br /> Let's make this world a better place.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="form" id="form">
        {/* hospital name  */}
        <div className="flow-control">
          <label htmlFor="hospital_name">Hospital Name</label>
          <input
            className="linebox"
            placeholder="Name of Hospital"
            type="text"
            id="hospital_name"
            name="hospital_name"
            autoComplete="off"
            value={values.hospital_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.hospital_name && touched.hospital_name ? (
            <p className="form-error">{errors.hospital_name}</p>
          ) : null}
        </div>
        {/* hospital URL  */}
        <div className="flow-control">
          <label htmlFor="hospital_website">Hospital Website</label>
          <input
            className="linebox"
            placeholder="Enter your Website"
            type="text"
            id="hospital_website"
            autoComplete="off"
            name="hospital_website"
            value={values.hospital_website}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.hospital_website && touched.hospital_website ? (
            <p className="form-error">{errors.hospital_website}</p>
          ) : null}
        </div>
        {/* Address details  */}
        <h4>Address Details</h4>
        <br />
        <div className="flow-control">
          <label htmlFor="area">Area</label>
          <input
            className="linebox"
            placeholder="Enter Area"
            type="text"
            id="area"
            name="area"
            autoComplete="off"
            value={values.area}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.area && touched.area ? (
            <p className="form-error">{errors.area}</p>
          ) : null}
        </div>
        <div className="flow-control">
          <label htmlFor="cityname">City</label>
          <input
            className="linebox"
            placeholder="Enter City"
            type="text"
            id="cityname"
            name="cityname"
            autoComplete="off"
            value={values.cityname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.cityname && touched.cityname ? (
            <p className="form-error">{errors.cityname}</p>
          ) : null}
        </div>
        <div className="flow-control">
          <label htmlFor="state">State/Province</label>
          <input
            className="linebox"
            placeholder="Enter State"
            type="text"
            id="state"
            name="state"
            autoComplete="off"
            value={values.state}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.state && touched.state ? (
            <p className="form-error">{errors.state}</p>
          ) : null}
        </div>
        <div className="flow-control">
          <label htmlFor="zipcode">Zip/Postal Code</label>
          <input
            className="linebox"
            placeholder="Enter Zip Code"
            type="text"
            id="zipcode"
            name="zipcode"
            autoComplete="off"
            value={values.zipcode}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.zipcode && touched.zipcode ? (
            <p className="form-error">{errors.zipcode}</p>
          ) : null}
        </div>
        <div className="flow-control">
          <label htmlFor="country">Country</label>
          <input
            className="linebox"
            placeholder="Enter country"
            type="text"
            id="country"
            name="country"
            autoComplete="off"
            value={values.country}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.country && touched.country ? (
            <p className="form-error">{errors.country}</p>
          ) : null}
        </div>
        {/* contact details  */}
        <h4>Contact Details</h4>
        <br />
        <div className="flow-control">
          <label hmtlFor="contact_name">Contact Person Name</label>
          <input
            className="linebox"
            placeholder="Enter Name"
            type="text"
            id="contact_name"
            name="contact_name"
            autoComplete="off"
            value={values.contact_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.contact_name && touched.contact_name ? (
            <p className="form-error">{errors.contact_name}</p>
          ) : null}
        </div>
        <div className="flow-control">
          <label hmtlFor="contact_number">Contact Person Number</label>
          <input
            className="linebox"
            placeholder="Enter Number"
            type="text"
            id="contact_number"
            name="contact_number"
            autoComplete="off"
            value={values.contact_number}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.contact_number && touched.contact_number ? (
            <p className="form-error">{errors.contact_number}</p>
          ) : null}
        </div>
        <div className="flow-control">
          <label htmlFor="contact_email">Contact Person Email</label>
          <input
            className="linebox"
            placeholder="Enter Email"
            type="text"
            id="contact_email"
            name="contact_email"
            autoComplete="off"
            value={values.contact_email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.contact_email && touched.contact_email ? (
            <p className="form-error">{errors.contact_email}</p>
          ) : null}
        </div>
        {/* Type of Hospital */}
        <div className="flow-control">
          <h4>Type of Hospital</h4>

          <div className="fields">
            <div className="checkbox-content">
              <label htmlFor="general">General Hospital</label>
              <input
                className="box"
                type="checkbox"
                id="general"
                name="general"
                autoComplete="off"
                value={values.general}
                onChange={handleChange}
                // checked={isCheked}
                onBlur={handleBlur}
              />
            </div>

            <div className="checkbox-content">
              <label htmlFor="specialty">Specialty Hospital</label>
              <input
                type="checkbox"
                id="specialty"
                name="specialty"
                value={values.specialty}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
            </div>

            <div className="checkbox-content">
              <label htmlFor="children">Children's Hospital</label>
              <input
                type="checkbox"
                id="children"
                name="children"
                value={values.children}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
            </div>

            <div className="checkbox-content">
              <label htmlFor="women">Women's Hospital</label>
              <input
                type="checkbox"
                id="women"
                name="women"
                value={values.women}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
            </div>

            <div className="checkbox-content">
              <label htmlFor="rehabilitation">Rehabilitation Hospital</label>
              <input
                type="checkbox"
                id="rehabilitation"
                name="rehabilitation"
                value={values.rehabilitation}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
            </div>

            <div className="checkbox-content">
              <label htmlFor="psychiatric">Psychiatric Hospital</label>
              <input
                type="checkbox"
                id="psychiatric"
                name="psychiatric"
                value={values.psychiatric}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
            </div>

            <div className="checkbox-content">
              <label htmlFor="other_hospital">other</label>
              <input
                type="checkbox"
                id="other_hospital"
                name="other_hospital"
                autoComplete="off"
                value={values.other_hospital}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
        </div>
        {/* Services Offered */}
        <div className="flow-control">
          <h4>Services Offered</h4>

          <div className="fields">
            <div className="checkbox-content">
              <label hmtlFor="emergency">Emergency Services</label>
              <input
                type="checkbox"
                id="emergency"
                name="emergency"
                value={values.emergency}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
            </div>

            <div className="checkbox-content">
              <label hmtlFor="surgery">Surgery</label>
              <input
                type="checkbox"
                id="surgery"
                name="surgery"
                value={values.surgery}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
            </div>

            <div className="checkbox-content">
              <label htmlFor="obst  etrics">Obstetrics and Gynecology</label>
              <input
                type="checkbox"
                id="obstetrics"
                name="obstretrics"
                value={values.obstretrics}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
            </div>

            <div className="checkbox-content">
              <label htmlFor="pediatrics">Pediatrics</label>
              <input
                type="checkbox"
                id="pediatrics"
                name="pediatrics"
                value={values.pediatrics}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
            </div>

            <div className="checkbox-content">
              <label htmlFor="oncology">Oncology</label>
              <input
                type="checkbox"
                id="oncology"
                name="oncology"
                value={values.oncology}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
            </div>

            <div className="checkbox-content">
              <label htmlFor="cardiology">Cardiology</label>
              <input
                type="checkbox"
                id="cardiology"
                name="cardiology"
                value={values.cardiology}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
            </div>

            <div className="checkbox-content">
              <label htmlFor="neurology">Neurology</label>
              <input
                type="checkbox"
                id="neurology"
                name="neurology"
                value={values.neurology}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
            </div>

            <div className="checkbox-content">
              <label htmlFor="orthopedics">Orthopedics</label>
              <input
                type="checkbox"
                id="orthopedics"
                name="orthopedics"
                value={values.orthopedics}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
            </div>

            <div className="checkbox-content">
              <label htmlFor="radiology">Radiology</label>
              <input
                type="checkbox"
                id="radiology"
                name="radiology"
                value={values.radiology}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
            </div>

            <div className="checkbox-content">
              <label htmlFor="other_service">other</label>
              <input
                type="checkbox"
                id="other_service"
                name="other_service"
                autoComplete="off"
                value={values.other_service}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
        </div>
        {/* facilities Avialable */}
        <div className="flow-control">
          <h4>facilities Avialable</h4>

          <div className="fields">
            <div className="checkbox-content">
              <label htmlFor="icu">Intensive Care Unit</label>
              <input
                type="checkbox"
                id="icu"
                name="icu"
                value={values.icu}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
            </div>

            <div className="checkbox-content">
              <label htmlFor="nicu">Neonatal Intensive Care Unit</label>
              <input
                type="checkbox"
                id="nicu"
                name="nicu"
                value={values.nicu}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
            </div>

            <div className="checkbox-content">
              <label hmtlFor="bloodbank">Blood Bank</label>
              <input
                type="checkbox"
                id="bloodbank"
                name="bloodbank"
                value={values.bloodbank}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
            </div>

            <div className="checkbox-content">
              <label htmlFor="pharmacy">Pharmacy</label>
              <input
                type="checkbox"
                id="pharmacy"
                name="pharmacy"
                value={values.pharmacy}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
            </div>

            <div className="checkbox-content">
              <label hmtlFor="laboratory">Laboratory</label>
              <input
                type="checkbox"
                id="laboratory"
                name="laboratory"
                value={values.laboratory}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
            </div>

            <div className="checkbox-content">
              <label hmtlFor="cafeteria">Cafeteria</label>
              <input
                type="checkbox"
                id="cafeteria"
                name="cafeteria"
                value={values.cafeteria}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
            </div>

            <div className="checkbox-content">
              <label hmtlFor="parking">Parking</label>
              <input
                type="checkbox"
                id="parking"
                name="parking"
                value={values.parking}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        {/* insurance */}
        <div className="flow-control">
          <h4>Does the hospital accept insurance?</h4>

          <div className="fields insurance">
            <input
              type="radio"
              autoComplete="off"
              id="insurance"
              name="insurance"
              value="yes"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.insurance === "yes"}
            />
            <label className="insurance_field" htmlFor="insurance2">
              Yes
            </label>
            <input
              type="radio"
              autoComplete="off"
              id="insurance2"
              name="insurance"
              value="no"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.insurance === "no"}
            />
            <label className="insurance_field" htmlFor="insurance2">
              No
            </label>
            <br />
            <br />
          </div>
        </div>
        {/* additional info  */}
        <div className="flow-control">
          <h4>
            Please provide any additional information you would like us to know.
          </h4>
          <textarea
            className="extra_info"
            autoComplete="off"
            name="addinfo"
            id="addinfo"
            cols="62"
            rows="5"
            placeholder="Enter text here..."
            value={values.addinfo}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.addinfo && touched.addinfo ? (
            <p className="form-error">{errors.addinfo}</p>
          ) : null}
        </div>
        <input type="submit" value="Submit" className="btn" name="" />
        <input type="reset" value="reset" className="btn" name="" />

        <br />
      </form>

      {/* logo  */}
      <img
        className="logo"
        src="/logo/result.png"
        width="80"
        height="80"
        alt=""
      />
    </div>
  );
}

export default App;
