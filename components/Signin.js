import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { signInSchema } from "./Validation_Schema";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  email: "",
  password: "",
};

const Signin = () => {
  const router = useRouter();

  const notifyError = () =>
    toast.error("Invalid Credentials!", {
      position: toast.POSITION.TOP_CENTER,
    });
  const notify = () =>
    toast.success("Patient login successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signInSchema,
      onSubmit: (values, action) => {
        console.log("values", values);
        action.resetForm();
        const getUserData = localStorage.getItem("registration");
        if (getUserData && getUserData.length) {
          const userData = JSON.parse(getUserData);
          const userLogin = userData.filter((res, key) => {
            return (
              res.email === values.email && res.password === values.password
            );
          });
          if (userLogin.length === 0) {
            notifyError();
          } else {
            localStorage.setItem("user_login", JSON.stringify(getUserData));
            notify();
            setTimeout(() => {
              router.push("/patient");
            }, 3000);
          }
        }
      },
    });

  return (
    <div className="form_container">
      <form className="form_signin" onSubmit={handleSubmit}>
        <h1 className="heading">Login</h1>
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
          <label className="form-check-label" htmlFor="exampleCheck1">
            <Link href="/registration" className="accountcolor">
              Create an account
            </Link>
          </label>
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

export default Signin;
