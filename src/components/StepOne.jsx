import React from 'react'
import { header } from '../hooks/texts'

const StepOne = () => {
  return (
   <>
    <div className='steps__container'>
        <h1>{header[0].h1}</h1>
        <p>{header[0].p}</p>
        <form action="">
            <div className='formGroup__step--one'>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='e.g. Stephen King' />
            </div>
            <div className='formGroup__step--one'>
                <label htmlFor="email">Email Address</label>
                <input type="email" placeholder='e.g. stephenking@lorem.com' />
            </div>
            <div className='formGroup__step--one'>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" placeholder='e.g. +1 234 567 890'/>
            </div>
        </form>
        
    </div>
    <div>
        <button className='formBtn--step--one'>Next Step</button>
    </div>
   </>
  )
}

export default StepOne