import React from 'react'

const StepThree = () => {
  return (
    <>
        <div>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <form action="">
                <div>
                    <input type="checkbox" />
                    <div>
                        <label htmlFor="service">Online Service</label>
                        <small>Access to multiplayer games</small>
                    </div>
                    <strong>+$1/mo</strong>
                </div>
                <div>
                    <input type="checkbox" />
                    <div>
                        <label htmlFor="storage">Larger storage</label>
                        <small>Extra 1TB of cloud</small>
                    </div>
                    <strong>+$2/mo</strong>
                </div>
                <div>
                    <input type="checkbox" />
                    <div>
                        <label htmlFor="profile">Customizable Profile</label>
                        <small>Custom theme on your profile</small>
                    </div>
                    <strong>+$2/mo</strong>
                </div>
            </form>
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

export default StepThree