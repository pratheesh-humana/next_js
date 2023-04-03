import Link from "next/link";
import { useFormik } from "formik";
import { patientSignUpSchema } from "./Validation_Schema";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  patientName: "",
  phoneNo: "",
  age: "",
  email: "",
  password: "",
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
          console.log(error);
        }
      },
    });

  return (
    <div className="form_container" onSubmit={handleSubmit}>
      <form className="form">
        <h1 className="heading">Registration</h1>
        <div className="mb-3 form_control">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Patient Name
          </label>
          <input
            type="text"
            className="form-control"
            id="patient-name"
            aria-describedby="emailHelp"
            name="patientName"
            autoComplete="off"
            value={values.patientName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.patientName && touched.patientName ? (
            <p className="form-error">{errors.patientName}</p>
          ) : null}
        </div>
        <div className="mb-3 form_control">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="Phone-No"
            aria-describedby="emailHelp"
            name="phoneNo"
            autoComplete="off"
            value={values.phoneNo}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phoneNo && touched.phoneNo ? (
            <p className="form-error">{errors.phoneNo}</p>
          ) : null}
        </div>
        <div className="mb-3 form_control">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Patient Age
          </label>
          <input
            type="number"
            className="form-control"
            id="patient-age"
            aria-describedby="emailHelp"
            name="age"
            autoComplete="off"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.age && touched.age ? (
            <p className="form-error">{errors.age}</p>
          ) : null}
        </div>
        <div className="mb-3 form_control">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            autoComplete="off"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 form_control">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            autoComplete="off"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="form-error">{errors.password}</p>
          ) : null}
        </div>
        <div className="mb-3 form-check">
          <Link href="/" className="accountcolor">
            I am already register
          </Link>
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary button_arjust">
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
