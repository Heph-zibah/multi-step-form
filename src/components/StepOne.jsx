import React, { useState } from 'react'
import { header } from '../hooks/texts'

const StepOne = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSubmit = (e) => {
   
   
  
  }
  return (
   <>
    <div className='steps__container'>
        <h1>{header[0].h1}</h1>
        <p>{header[0].p}</p>
        <form action="" className='form__container1' onSubmit={handleSubmit}> 
                <label htmlFor="name">Name</label>
                <input type="text" id='name' name='name' placeholder='e.g. Stephen King' value={name} onChange={(e) => setName(e.target.value)}/>
                {name ? <p>name required</p> : null}
                <label htmlFor="email">Email Address</label>
                <input type="email" id='email'name='email' placeholder='e.g. stephenking@lorem.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" id='phoneNumber' name='phoneNumber' placeholder='e.g. +1 234 567 890' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
        </form>
        <div className='steps__actions step1'>
          <button  className='btn__goBack' style={{visibility:'hidden'}}> Go back</button>
          <button className='btn__next' onClick={handleSubmit}>Next Step</button>
        </div>  
    </div>
    
   </>
  )
}

export default StepOne 