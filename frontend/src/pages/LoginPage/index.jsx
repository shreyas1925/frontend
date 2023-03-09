import React, { useState } from "react";
import { useFormik } from "formik";
// import { UserSchema } from '../../schemas';
import axios from "axios";
import "./LoginPage.css"
import people from "../../assets/people.png"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const [token, setToken] = useState("");

  const onSubmit = async (values, action) => {
    console.log(values);
    const res = await axios({
      method: "POST",
      url: "http://localhost:4000/api/login",
      data: values,
    });
    // setToken(res.data);
    action.resetForm();
    // console.log(token);
    // console.log(res.data);
    setToken(res.data);
    navigate("/dashboard")
  };
  console.log(token);

  localStorage.setItem("token", token);

  const { values, errors, handleChange, handleBlur, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      // validationSchema: UserSchema,
      onSubmit,
    });

  console.log(errors);

  return (
    <div className="main--container">
      <div className="left--container">
      <div className="text--container">
            <h1>Design APIs fast,
            </h1>
            <h1>
            Manage content easily</h1>
        </div>
        <div className="image--container">
            <img src={people} alt="" />
        </div>
      </div>
      <div className="right--container">
      <h1>Login to your CMS+ account</h1>
        <form action="" className="form--container" onSubmit={handleSubmit}>
            <p>Email</p>
          <input
            autoComplete="off"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="form--error">{errors.email}</p>
          ) : null}
         <p>Password</p>
          <input
            autoComplete="off"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="form--error">{errors.password}</p>
          ) : null}

          <button type="submit">Login</button>
          <p>Forgot password ? </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
