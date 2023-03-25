import React from 'react'
import confirm from '../assets/images/icon-thank-you.svg'

const StepFive = () => {
  return (
    <>
        <div className='steps__container'>
            <img src={confirm} alt="icon" />
            <h1>Thank you!</h1>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. 
                If you ever need support, please feel free to email us at support@loremgaming.com.
            </p>
        </div>
    </>
  )
}

export default StepFive