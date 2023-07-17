import React from 'react'

export const EventHandling = () => {
  return (
    <div className='container'>
        <h1 className='text-center fw-bold'>Event Handling</h1>
        <hr />

        <h3>Click Event Handling</h3>
        <button className='btn btn-primary mt-3' onClick={ ()=> { alert('button clicked') } } >Click Event</button>

        <h3>Change Event Handling</h3>
        <input type="text" onChange={ ()=> {console.log('Something Change')  }} />


    </div>
  )
}

export default EventHandling;
