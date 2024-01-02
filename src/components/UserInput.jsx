import React, { useState } from 'react'

function UserInput() {
    const [userInput, setUserInput] = useState({
        'initialInvestment': 10000,
        'annualInvestment': 1000,
        'expectedReturn': 5,
        'duration': 5
    });

    function handleValueChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier] : newValue
            };
        });
    }

    return (
    <section id='user-input'>
        <div className='input-group'>
            <p >
                <label >Initial Investment</label>
                <input 
                    type="number"
                    required
                    value={userInput.initialInvestment}
                    onChange={(event) => handleValueChange('initialInvestment', event.target.value)}
                />
            </p>
            <p >
                <label >Annual Investment</label>
                <input 
                    type="number"
                    required
                    value={userInput.annualInvestment}
                    onChange={(event) => handleValueChange('annualInvestment', event.target.value)}
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
                    onChange={(event) => handleValueChange('expectedReturn', event.target.value)}    
                />
            </p>
            <p >
                <label >Duration</label>
                <input 
                    type="number"
                    required
                    value={userInput.duration}
                    onChange={(event) => handleValueChange('duration', event.target.value)}    
                />
            </p>
        </div>
    </section>
    )
}

export default UserInput