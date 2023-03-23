import React from 'react'

const StepOne = () => {
  return (
   <>
    <form action="" className='form__step--one'>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
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
        <button className='formBtn--step--one'>Next Step</button>
        
    </form>
   </>
  )
}

export default StepOne