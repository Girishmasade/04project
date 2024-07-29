import React from 'react'
import { useFormik } from "formik";
import { validateSchema } from './Validation';


const  initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  picked: '',
  check: '',
  selectedOption: '',
  textarea: '',
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
    <div className=''>
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
            {errors.name && touched.name ? (<p style={{color: 'red'}}>{errors.name}</p>) : null}
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
              {errors.email && touched.email ? (<p style={{color: 'red'}}>{errors.email}</p>) : null}
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
              {errors.password && touched.password ? (<p style={{color: 'red'}}>{errors.password}</p>) : null}
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
              {errors.confirm_password && touched.confirm_password ? (<p style={{color: 'red'}}>{errors.confirm_password}</p>) : null}
            </div>
            <div className='my-2'>
              <p>Specify your gender</p>
              <div role="group" aria-labelledby="my-radio-group">
                <div className="container">
                <label htmlFor='picked'>
                  <input
                  type='radio'
                  name='picked'
                  id='picked'
                  value='male'
                  onChange={handleChange}
                  />
                  Male
                </label>
                </div>
                <div className="container">
                <label htmlFor='picked'>
                  <input
                  type='radio'
                  name='picked'
                  id='picked'
                  value='female'
                  onChange={handleChange}
                  />
                  Female
                </label>
                </div>
                <div className="container">
                <label htmlFor='picked'>
                  <input
                  type='radio'
                  name='picked'
                  id='picked'
                  value='other'
                  onChange={handleChange}
                  />
                  Other
                </label>
                </div>
                {errors.picked && touched.picked ? <p style={{color: 'red'}}>{errors.picked}</p> : null} 
              </div>
            </div>

            <div className="checkbox my-2">
              <p>Choose your center for Exam</p>
              <div className='container'>
                <div>
                <label htmlFor='check'>
                  <input
                  type='checkbox'
                  name='check'
                  id='check'
                  value='Nagpur'
                  onChange={handleChange}
                  />
                  Nagpur
                </label>
                </div>
               
                <div>
                <label htmlFor='check'>
                  <input
                  type='checkbox'
                  name='check'
                  id='check'
                  value='Amravati'
                  onChange={handleChange}
                  />
                  Amravati
                </label>
                </div>

                <div>
                <label htmlFor='check'>
                  <input
                  type='checkbox'
                  name='check'
                  id='check'
                  value='Chandrapur'
                  onChange={handleChange}
                  />
                  Chandrapur
                </label>
                </div>

                <div>
                <label htmlFor='check'>
                  <input
                  type='checkbox'
                  name='check'
                  id='check'
                  value='Pune'
                  onChange={handleChange}
                  />
                  Pune
                </label>
                </div>

                <div>
                <label htmlFor='check'>
                  <input
                  type='checkbox'
                  name='check'
                  id='check'
                  value='Delhi'
                  onChange={handleChange}
                  />
                  Delhi
                </label>
                </div>
                {errors.check && touched.check ? <p style={{color: 'red'}}>{errors.check}</p> : null} 
              </div>
            </div>

            <div>
              <label htmlFor="selectedOption">
                Select Your subject
                <select id='subject' name="selectedOption">
                  <option value='Select your Exam'>Select subject</option>
                  <option value='0' name="Physics">Physics</option>
                  <option value='1' name="Chemistry">Chemistry</option>
                  <option value='2' name="Maths">Maths</option>
                  <option value='3' name="Bio">Bio</option>
                </select>
              </label>
              {errors.selectedOption && touched.selectedOption ? <p style={{color: 'red'}}>{errors.selectedOption}</p> : null} 
            </div>

            <div className='py-4'>
              <label htmlFor="textarea">
                Bio: <br /><textarea name='textarea' id='textarea' value={values.textarea} placeholder='Enter the details' style={{width: '300px', height: "100px"}}/>
              </label>
              {errors.textarea && touched.textarea ? <p style={{color: 'red'}}>{errors.textarea}</p> : null} 

            </div>

            <button type="submit" className="btn btn-light my-4">submit</button>
        </div>
      </form>
    </div>
  )
}

export default MyForm
