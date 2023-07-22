import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),

  password: Yup.string().required('Please Enter your password')
    .matches(
      "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
});

const Signup = () => {

  const signupForm = useFormik(
    {
      initialValues: {
        name: '',
        email: '',
        password: ''
      },
      onSubmit: (values) => {
        console.log(values);
      }
    }
  )
  return (
    <div className="d-flex justify-content-center align-items-center  vh-100 ">
      <div className="card w-25 shadow-lg rounded-3   ">
        <div className="card-body  p-5 ">
          <i className="fa-solid fa-lock fa-3x d-block text-center " />
          <h1 className="text-center my-4  ">Signup Form</h1>
          <form onsubmit={signupForm.handleSubmit}>
            <label htmlFor="">Name</label>
            <input className="form-control mb-4 rounded-3" type="text" name="name" onChange={signupForm.handleChange} value={signupForm.values.name} />
            
            <label htmlFor="">Email</label>
            <input className="form-control mb-4 rounded-3" type="email" name="email" onChange={signupForm.handleChange} value={signupForm.values.email} />
            <p>{signupForm.errors.email}</p>
            <label htmlFor="">Password</label>
            <input className="form-control mb-4 rounded-3" type="password" name="password" onChange={signupForm.handleChange} value={signupForm.values.password} />
            <button className="btn btn-danger w-100 mt-2 rounded-3 ">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Signup;