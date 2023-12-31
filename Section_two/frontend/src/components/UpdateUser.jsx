import { Formik, useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateUser = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [userData, setuserData] = useState(null);

    const fetchUserData = async () => {
        const res = await fetch("http://localhost:5000/user/getid/" + id);

        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setuserData(data);
    };

    useEffect(() => {

        fetchUserData();

    }, []);


    return (
        <div>
            <h2 className='text-center'> User Id:{id}</h2>
            <div className="d-flex justify-content-center align-items-center  vh-100 ">
                <div className="card w-25 shadow-lg rounded-5   ">
                    <div className="card-body  p-5">
                        <i className="fa-solid fa-lock fa-3x d-block text-center " />
                        <h1 className="text-center my-4">Update Form</h1>
                        {
                            userData !== null ? (
                                <Formik initialValues={userData}
                                    onSubmit={async (values) => {
                                        console.log(values);

                                        //sending request  to backend
                                        const res = await fetch('http://localhost:5000/user/update/' + id, {
                                            method: 'PUT',
                                            body: JSON.stringify(values),
                                            headers: {
                                                'Content-Type': 'application/json'
                                            }
                                        });
                                        console.log(res.status)

                                        if (res.status === 200) {
                                            Swal.fire({
                                                icon: 'success',
                                                title: 'Update Success',
                                                text: 'Now Login to continue'
                                            });

                                            navigate('/manageuser');

                                        }
                                        else {
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Oops!!',
                                                text: 'Some Error Occured'
                                            });
                                        }
                                    }}>
                                    {
                                        ({ values, handleSubmit, handleChange, touched, errors }) => (

                                            <form onSubmit={handleSubmit}>
                                                <div>
                                                    <label htmlFor="">Name</label>
                                                    <p className='error-label'>{touched.name ? errors.name : ''}</p>
                                                    <input className="form-control mb-4 rounded-3" type="text" name="name" onChange={handleChange} value={values.name} />
                                                </div>
                                                <div>
                                                    <label htmlFor="">Email</label>
                                                    <p className='error-label'>{touched.email ? errors.email : ''}</p>
                                                    <input className="form-control mb-4 rounded-3" type="email" name="email" onChange={handleChange} value={values.email} />
                                                </div>
                                                <div>
                                                    <label htmlFor="">Password</label>
                                                    <p className='error-label'>{touched.password ? errors.password : ''}</p>
                                                    <input className="form-control mb-0 rounded-3" type="password" name="password" onChange={handleChange} value={values.password} />
                                                </div>

                                                <div>
                                                    <button type='submit' className="btn btn-danger w-100 mt-4 rounded-3 ">Update User</button>
                                                </div>
                                            </form>
                                        )
                                    }
                                </Formik>
                            ) :
                                <h1>Loading ...</h1>
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}

export default UpdateUser;