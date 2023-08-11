import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Profile = () => {

    const { id } = useParams();

    const fetchUserData = async () => {
        const res = await fetch("http://localhost:5000/user/getid/" + id);

        console.log(res.status);

        const data = await res.json();
        console.log(data);
    };

    useEffect(() => {

        fetchUserData();

    }, []);


  return (
    <div>
        
        <h1>Profile  file</h1>

    </div>
  )
}
export default Profile;