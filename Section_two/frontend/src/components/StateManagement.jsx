import React from 'react'

const StateManagement = () => {
    let count = 10;
    return (
        <div>
            <div className='container'>
                <h1>Count :  {count} </h1>
                <button onClick={ () => { count++; console.log(count); } } > Add Count </button>
            </div>
        </div>
    )
}

export default StateManagement