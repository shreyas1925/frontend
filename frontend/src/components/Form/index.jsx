import React from 'react'

const Form = ({values,errors,handleChange,handleBlur,touched,handleSubmit}) => {
  return (
    <div className='right--container'>
       <form action="" className="form--container" onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? (
          <p className="form--error">{errors.email}</p>
        ) : null}
        
        <input
          autoComplete="off"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? (
          <p className="form--error">{errors.password}</p>
        ) : null}

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Form