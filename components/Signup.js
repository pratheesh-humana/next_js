import Link from "next/link";
import { useRouter } from "next/router";

import { useFormik } from "formik";
import { useQuery, gql } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { patientSignUpSchema } from "./Validation_Schema";
import styles from "../styles/Signup.module.css";
import pino from "../logger";

const QUERY = gql`
  query Countries {
    countries {
      name
      code
    }
  }
`;

const initialValues = {
  patientName: "",
  phoneNo: "",
  age: "",
  email: "",
  password: "",
  country: "",
};

const Signup = () => {
  const router = useRouter();

  const notifyError = () =>
    toast.error("Invalid Input, Cannot Regsiter!", {
      position: toast.POSITION.TOP_CENTER,
    });
  const notify = () =>
    toast.success("Patient Registered successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: patientSignUpSchema,
      onSubmit: (values, action) => {
        try {
          localStorage.setItem("registration", JSON.stringify([values]));
          action.resetForm();
          notify();
          setTimeout(() => {
            router.push("/");
          }, 3000);
        } catch (error) {
          notifyError();
        }
      },
    });

  const { data, error } = useQuery(QUERY);

  if (error) {
    pino.error(`error ${error}`);
    return null;
  }

  const countries = data?.countries?.slice(100, 110);

  return (
    <div className={styles.form_container} onSubmit={handleSubmit}>
      <form className={styles.form}>
        <header className={styles.heading}>
          <h1>Patient Registration</h1>
        </header>
        <div className={`mb-3 ${styles.form_control}`}>
          <input
            type="text"
            className={`form-control`}
            id="patient-name"
            aria-describedby="emailHelp"
            name="patientName"
            placeholder="Patient Name"
            autoComplete="off"
            value={values.patientName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.patientName && touched.patientName ? (
            <p className={styles.form_error}>{errors.patientName}</p>
          ) : null}
        </div>
        <div className={`mb-3 ${styles.form_control}`}>
          <input
            type="text"
            className={`form-control`}
            id="Phone-No"
            aria-describedby="emailHelp"
            name="phoneNo"
            placeholder="Phone Number"
            autoComplete="off"
            value={values.phoneNo}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phoneNo && touched.phoneNo ? (
            <p className={styles.form_error}>{errors.phoneNo}</p>
          ) : null}
        </div>
        <div className={`mb-3 ${styles.form_control}`}>
          <input
            type="number"
            className={`form-control`}
            id="patient-age"
            aria-describedby="emailHelp"
            name="age"
            placeholder="Patient Age"
            autoComplete="off"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.age && touched.age ? (
            <p className={styles.form_error}>{errors.age}</p>
          ) : null}
        </div>
        <div className={`mb-3 ${styles.form_control}`}>
          <input
            type="email"
            className={`form-control`}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            placeholder="Email Address"
            autoComplete="off"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className={styles.form_error}>{errors.email}</p>
          ) : null}
        </div>
        <div className={`mb-3 ${styles.form_control}`}>
          <input
            type="password"
            className={`form-control`}
            id="exampleInputPassword1"
            name="password"
            placeholder="Password"
            autoComplete="off"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className={styles.form_error}>{errors.password}</p>
          ) : null}
        </div>
        <div className={styles.custom_select}>
          <select
            className={styles.select_country}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.country}
            name="country"
            id="country-id"
            placeholder="Select Country"
          >
            <option value="">Select Country</option>
            {countries?.map((res) => {
              const { name, code } = res;
              return (
                <option className="dropdrown" key={code} value={res.name}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.custom_margin}>
          {errors.country && touched.country ? (
            <p className={styles.form_error}>{errors.country}</p>
          ) : null}
        </div>
        <div className={`mb-3 ${styles.form_check}`}>
          <Link href="/" className={styles.accountcolor}>
            I am already registered
          </Link>
        </div>
        <div className={`d-grid gap-2`}>
          <button
            type="submit"
            className={`btn btn-primary ${styles.button_arjust}`}
            disabled={
              !values.patientName ||
              !values.phoneNo ||
              !values.age ||
              !values.email ||
              !values.password ||
              !values.country
            }
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
