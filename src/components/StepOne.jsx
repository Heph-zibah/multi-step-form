import React from 'react'
import { header } from '../hooks/texts'

const StepOne = () => {
  return (
   <>
    <div className='steps__container'>
        <h1>{header[0].h1}</h1>
        <p>{header[0].p}</p>
        <form action="" className='form__container1'> 
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='e.g. Stephen King' />
                <label htmlFor="email">Email Address</label>
                <input type="email" placeholder='e.g. stephenking@lorem.com' />
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" placeholder='e.g. +1 234 567 890'/>
        </form>
        <div className='steps__actions'>
       <button  className='btn__goBack' style={{visibility:'hidden'}}> Go back</button>
        <button className='btn__next'>Next Step</button>
    </div>
    </div>
    
   </>
  )
}

export default StepOne