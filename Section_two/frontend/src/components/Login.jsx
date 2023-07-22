import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({

  email: Yup.string().email('Invalid email').required('Required'),

  password: Yup.string().required('Please Enter your password')
    .matches(
      "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )

});

const Login = () => {

  //initialix=zinf formik
  const loginForm = useFormik(
    {
      initialValues: {
        email: '',
        password: ''
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: LoginSchema
    });

  return (
    <div className="d-flex justify-content-center align-items-center  vh-100 ">
      <div className="card w-25 shadow-lg rounded-3   ">
        <div className="card-body  p-5 ">
          <i className="fa-solid fa-lock fa-3x d-block text-center " />
          <h1 className="text-center my-4  ">Login Form</h1>
          <form onSubmit={loginForm.handleSubmit} >
            <label htmlFor="">Email</label>
            <input className="form-control mb-4 rounded-3" type="email" name="email" onChange={loginForm.handleChange} value={loginForm.values.email} />
            <p>{loginForm.errors.email}</p>
            <label htmlFor="">Password</label>
            <input className="form-control mb-4 rounded-3" type=" password" name="password" onChange={loginForm.handleChange} value={loginForm.values.password} />
           <span> <p >{loginForm.errors.password}</p></span>
            <button type="submit" className="btn btn-danger w-100 mt-2 rounded-3 ">Submit</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login;