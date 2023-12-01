import React, { useState } from 'react'

const ShortCircuits = () => {
    const [test,setTest] = useState(5);
   
  return (
    <>
        {/* <div className="container text-center">
        <h1>
            {test && 'Hello from the AND operator'}
        </h1>
        <h1>
            {test || 'Hello from the OR operator'}
        </h1>
        </div> */}
        
       {
        test >= 5 ? <h1 className='text-success'>Greater than 5</h1> : <h5 className='text-danger'>Smaller than 5</h5>
       }
      

    </>
  )
}

export default ShortCircuits