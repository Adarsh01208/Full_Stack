import React, { useState } from 'react'
import laptopData from './dummyData';

const Browse = () => {

    const [laptopList, setLaptopList] = useState(laptopData);

    const displayLaptopData = () => {
        if (laptopList.length === 0) return <h1 className='text-center'>No Data Found</h1>
        return laptopList.map((laptop) => (<div className='col-md-3 mb-4'>
            <div className='card'>
                <img src={laptop.image} alt="" />
                <div className='card-body'>
                    <h4>{laptop.title}</h4>
                    <p>{laptop.rating} avg rating</p>
                    <h2>{laptop.price}</h2>
                </div>
            </div>
        </div>))
    }
    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>{displayLaptopData()} </div>
            </div>
        </div>
    )
}

export default Browse;