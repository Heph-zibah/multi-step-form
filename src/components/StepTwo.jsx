import React from 'react'
import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'

const StepTwo = () => {
  return (
    <>
        <div>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <div>
                <div>
                    <img src={arcade} alt="icon" />
                    <div>
                        <strong>Arcade</strong>
                        <small>$9/mo</small>
                    </div>
                </div>
                <div>
                    <img src={advanced} alt="icon" />
                    <div>
                        <strong>Advanced</strong>
                        <small>$12/mo</small>
                    </div>
                </div>
                <div>
                    <img src={pro} alt="icon" />
                    <div>
                        <strong>Pro</strong>
                        <small>$15/mo</small>
                    </div>
                </div>
            </div>
            <div>
                <strong>Monthly</strong>
                <strong>Yearly</strong>
            </div>
            <div>
                <button>
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