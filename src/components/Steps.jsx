import React from 'react'
import { informationsStep } from '../hooks/texts'

const Steps = () => {
  return (
    <>
    <aside>
        {informationsStep.map((step) => {
            return <div className='steps__btn' key={step.num}>
                <button>{step.num}</button>
                <div className='steps__btn--info'>
                    <p>step {step.num}</p>
                    <h5>{step.name}</h5>
                </div>
        </div>
        })}
    </aside>
    </>
  )
}

export default Steps