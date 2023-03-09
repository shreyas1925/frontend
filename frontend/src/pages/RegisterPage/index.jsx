import React from "react";
import { Form } from "../../components";
import axios from "axios";
import { useFormik } from "formik";
import "./RegisterPage.css"
import people from "../../assets/people.png"
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();
    const initialValues = {
        email: '',
        password:''
    };

    const { values, errors, handleChange, handleBlur, touched, handleSubmit } =
    useFormik({
        initialValues: initialValues,
        // validationSchema: UserSchema,
        onSubmit: (values,action) => {
            console.log(values);
            axios({
                method: 'POST',
                url: 'http://localhost:4000/api/register',
                data: values
            })
                .then(function (res) {
                    console.log(res);
                    alert('Successfully registered!');  
                })
                .catch(function (res) {
                    console.log(res);
                });
        
            action.resetForm();
            navigate("/login")
        },
      
    });

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
      <div className='right--container'>
        <h1>Register to your CMS+ account</h1>
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

        <button type="submit" className="btn">Register</button>

        <div className="form--footer">
        <p>Already an user ? </p> <a href="/login">Login</a>
        </div>
      </form>
    </div>
    </div>
  );
};

export default RegisterPage;
