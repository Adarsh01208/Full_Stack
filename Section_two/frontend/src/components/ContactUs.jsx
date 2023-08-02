import React from 'react'
import { useFormik } from 'formik'

const ContactUs = () => {

  const contactForm = useFormik(
    {
      initialValues: {
        name: '',
        email: '',
        description: ''
      },
      onSubmit: async (values) => {
        console.log(values);
        //sending request  to backend
        await fetch('http://localhost:5000/user/add', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        // console.log(res.status)
      }
    });

  return (
    <div className="d-flex justify-content-center align-items-center  vh-100 ">
      <div className="card w-25 shadow-lg rounded-3   ">
        <div className="card-body  px-4 py-3 ">
          <i className="fa-solid fa-lock fa-3x d-block text-center " />
          <h1 className="text-center my-4  ">Contact Form</h1>
          <form onSubmit={contactForm.handleSubmit}>
            <div>
              <label htmlFor="">Name</label>
              <input className="form-control mb-4 rounded-3" type="text" name="name" onChange={contactForm.handleChange} value={contactForm.values.name} />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input className="form-control mb-4 rounded-3" type="email" name="email" onChange={contactForm.handleChange} value={contactForm.values.email} />
            </div>
            <div>
              <label htmlFor="">Description</label>
              <textarea className="form-control mb-4 rounded-3" rows={3} cols={30} required="" defaultValue={""} name="description" onChange={contactForm.handleChange} value={contactForm.values.description} />
            </div>
            <div>
              <button type='submit' className="btn btn-danger w-100 mt-2 rounded-3 mb-4 ">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default ContactUs