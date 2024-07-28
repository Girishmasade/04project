import React from 'react'
import { useFormik } from "formik";
import { validateSchema } from './Validation';

const  initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
}

const MyForm = () => {
  const { handleSubmit, touched,  handleChange, handleBlur, values, errors} = 
  useFormik({
    initialValues,
        validationSchema: validateSchema,
        onSubmit: (values, action) => {
          console.log(
            "file: Registration.jsx ~ line 11 ~ Registration ~ values",
            values
          );
          action.resetForm();
        },
    });
    
   
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="w-100 my-2 mx-2">
            <div className="container my-4">
            <label htmlFor="username" className='px-3'>UserName</label>
            <input 
            type="text" 
            autoComplete='off'
            name='name'
            id='name'
            placeholder='enter your name'
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            {errors.username && touched.username ? (<p>{errors.username}</p>) : null}
            </div>
            <div className="container my-4">
            <label htmlFor="email" className='px-3'>UserEmail</label>
            <input 
            type="email" 
            autoComplete='off'
            name='email'
            id='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            />
              {errors.email && touched.email ? (<p>{errors.email}</p>) : null}
            </div>
            <div className="container my-4">
            <label htmlFor="password" className='px-3'>password</label> 
            <input 
            type="password"
            autoComplete="off"
            name="password"
            id="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            />
              {errors.password && touched.password ? (<p>{errors.password}</p>) : null}
            </div>
            <div className="container my-4">
            <label htmlFor="confirm_password" className='px-3'>confirm password</label>
            <input 
            type="password"
            autoComplete="off"
            name='confirm_password'
            id='confirm_password'
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
            />
              {errors.confirm_password && touched.confirm_password ? (<p>{errors.confirm_password}</p>) : null}
            </div>
            <div className='my-4'>
            
            </div>
            <button type="submit" className="btn btn-light my-2">submit</button>
        </div>
        <div>

        </div>
      </form>
    </div>
  )
}

export default MyForm
