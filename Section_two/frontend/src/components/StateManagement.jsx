import React, { useState } from 'react'

const StateManagement = () => {

    const [likes, setLikes] = useState(0);

    // const [Dislikes, setDisLikes] = useState(0);

    const [imgUrl, setImgUrl] = useState('');

    


    let count = 10;

    
    const selectFile = (e) => {
        const file=e.target.files[0];
        console.log(file);
        //reading file
        const reader =new FileReader(file);

        reader.onload= (data) => {
            console.log(data.target.result);
            setImgUrl(data.target.result);
        } ;

        reader.readAsDataURL(file);

    }

    return (
        <div>
            <div className='container'>
                <h1>Count :  {count} </h1>
                <button onClick={() => { count++; console.log(count); }} > Add Count </button>

                <h1>Likes : {likes} </h1>
                {/* <h1>DisLikes : {Dislikes} </h1> */}
                
                <button className='btn btn-primary' onClick={() => { setLikes(likes + 1)}}> Add Likes</button>
                <button className='btn btn-danger' onClick={() => { setLikes(likes - 1)}}> DisLikes</button>
            
                <input type="file" onChange={selectFile} />

                <img className="m-auto d-block w-50" src={imgUrl} alt="" />
            </div>
        </div>
    )
}

export default StateManagement