import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import {useNavigate} from "react-router-dom";

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

  const navigate =useNavigate();

  const signupForm = useFormik(
    {
      initialValues: {
        name: '',
        email: '',
        password: ''
      },
      onSubmit: async (values) => {
        console.log(values);

        //sending request  to backend
        const res = await fetch('http://localhost:5000/user/add', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(res.status)

        if (res.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Signup Success',
            text: 'Now Login to continue'
          });
          navigate('/login');
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops!!',
            text: 'Some Error Occured'
          });
        }

      },
      validationSchema: signupSchema

    });

    const uploadFile = async(e) => {
      let file = e.target.files[0];

      const fd = new FormData();
      fd.append('myfile', file);

      const res = await fetch ('http://localhost:5000/util/uploadfile',{
        method: 'POST',
        body: fd
      });
      console.log(res.status);
    }

  return (
    <div className="d-flex justify-content-center align-items-center  vh-100 ">
      <div className="card w-25 shadow-lg rounded-5  ">
        <div className="card-body  p-5">
          <i className="fa-solid fa-lock fa-3x d-block text-center " />
          <h1 className="text-center my-4">Signup Form</h1>
          <form onSubmit={signupForm.handleSubmit}>
            <div>
              <label htmlFor="">Name</label>
              <p className='error-label'>{signupForm.touched.name ? signupForm.errors.name : ''}</p>
              <input className="form-control mb-4 rounded-3" type="text" name="name" onChange={signupForm.handleChange} value={signupForm.values.name} />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <p className='error-label'>{signupForm.touched.email ? signupForm.errors.email : ''}</p>
              <input className="form-control mb-4 rounded-3" type="email" name="email" onChange={signupForm.handleChange} value={signupForm.values.email} />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <p className='error-label'>{signupForm.touched.password ? signupForm.errors.password : ''}</p>
              <input className="form-control mb-0 rounded-3" type="password" name="password" onChange={signupForm.handleChange} value={signupForm.values.password} />
            </div>

            <div>
              <label htmlFor="Upload File"></label>
              <input type="file" onChange={uploadFile} />
            </div>
            <div>
              <button type='submit' className="btn btn-danger w-100 mt-4 rounded-3 ">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;