import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const signupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),

});

const Signup = () => {


  const loginForm = useFormik(
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
          <form onsubmit={loginForm.handleSubmit}>
            <label htmlFor="">Name</label>
            <input className="form-control mb-4 rounded-3" type="text" name="name" onChange={loginForm.handleChange} value={loginForm.values.name} />
            <label htmlFor="">Email</label>
            <input className="form-control mb-4 rounded-3" type="email" name="email" onChange={loginForm.handleChange} value={loginForm.values.email} />
            <label htmlFor="">Password</label>
            <input className="form-control mb-4 rounded-3" type="password" name="password" onChange={loginForm.handleChange} value={loginForm.values.password} />
            <button className="btn btn-danger w-100 mt-2 rounded-3 ">Submit</button>
          </form>
        </div>
      </div>


    </div>
  )
}

export default Signup;