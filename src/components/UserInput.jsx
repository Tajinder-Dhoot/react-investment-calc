import React, { useState } from 'react'

function UserInput({userInput, onValueChange}) {
    return (
    <section id='user-input'>
        <div className='input-group'>
            <p >
                <label >Initial Investment</label>
                <input 
                    type="number"
                    required
                    min={0}
                    value={userInput.initialInvestment}
                    onChange={(event) => onValueChange('initialInvestment', event.target.value)}
                />
            </p>
            <p >
                <label >Annual Investment</label>
                <input 
                    type="number"
                    required
                    min={0}
                    value={userInput.annualInvestment}
                    onChange={(event) => onValueChange('annualInvestment', event.target.value)}
                />
            </p>
        </div>
        <div className='input-group'>
            <p >
                <label >Expected Return</label>
                <input 
                    type="number"
                    required
                    value={userInput.expectedReturn}
                    onChange={(event) => onValueChange('expectedReturn', event.target.value)}    
                />
            </p>
            <p >
                <label >Duration</label>
                <input 
                    type="number"
                    required
                    value={userInput.duration}
                    onChange={(event) => onValueChange('duration', event.target.value)}    
                />
            </p>
        </div>
    </section>
    )
}

export default UserInput