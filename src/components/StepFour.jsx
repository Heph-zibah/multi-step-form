import React from 'react'

const StepFour = () => {
  return (
    <>
        <div className='steps__container'>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
            <strong>Total (per month/year)</strong>
            <div className='steps__actions'>
                <button  className='btn__goBack' style={{visibility:'hidden'}}> Go back</button>
                <button>Confirm</button>
            </div>
        </div>
    </>
  )
}

export default StepFour