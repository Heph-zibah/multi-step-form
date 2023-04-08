import React from 'react'
import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'
import { header } from '../hooks/texts'
import ToggleBtn from './ToggleBtn'

const StepTwo = () => {
  return (
    <>
        <div className='steps__container'>  
            <h1>{header[1].h1}</h1>
            <p>{header[1].p}</p>
            <div className='plans__section'>
                <div className='plan__div'>
                    <img src={arcade} alt="icon" />
                    <div>
                        <strong>Arcade</strong>
                        <small>$9/mo</small>
                    </div>
                </div>
                <div  className='plan__div'>
                    <img src={advanced} alt="icon" />
                    <div>
                        <strong>Advanced</strong>
                        <small>$12/mo</small>
                    </div>
                </div>
                <div  className='plan__div'>
                    <img src={pro} alt="icon" />
                    <div>
                        <strong>Pro</strong>
                        <small>$15/mo</small>
                    </div>
                </div>
            </div>
            <div className='plan__action'>
                <strong>Monthly</strong>
                <ToggleBtn/>
                <strong>Yearly</strong>
            </div>
             <div className='steps__actions'>
                <button className='btn__goBack'>
                    Go back
                </button>
                <button>
                    Next Step
                </button>
        </div>
        </div>
        
    </>
  )
}

export default StepTwo