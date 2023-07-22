import React from 'react'
import { useFormik} from 'formik'

const Login = () => {
  
 const loginForm=useFormik(
  {
    intialValues :{
      email : '',
      password :''
    },
    onsubmit : (values) => {
      console.log(values);
    }
  }
 )



  

  return (
    <div className="d-flex justify-content-center align-items-center  vh-100 ">
      <div className="card w-25 shadow-lg rounded-3   ">
        <div className="card-body  p-5 ">
          <i className="fa-solid fa-lock fa-3x d-block text-center " />
          <h1 className="text-center my-4  ">Login Form</h1>
          <form onsubmit={loginForm.handleSubmit} >
            <label htmlFor="">Email</label>
            <input className="form-control mb-4 rounded-3" type="email" name="email" onchange={loginForm.handleChange} value={loginForm.Values.email} />
            <label htmlFor="">Password</label>
            <input className="form-control mb-4 rounded-3" type=" password" name="password" onchange={loginForm.handleChange} value={loginForm.Values.password} />
            <button  type="submit" className="btn btn-danger w-100 mt-2 rounded-3 ">Submit</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login;