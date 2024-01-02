import { useState } from "react";
import Header from "./components/Header"
import Output from "./components/Output"
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setUserInput] = useState({
    'initialInvestment': 10000,
    'annualInvestment': 1200,
    'expectedReturn': 6,
    'duration': 10
  });

  const isValidInput = userInput.duration >= 1;

  function handleValueChange(inputIdentifier, newValue) {
    console.log('Executing handle Value Change function')
    setUserInput((prevUserInput) => {
        return {
            ...prevUserInput,
            [inputIdentifier] : parseInt(newValue)
        };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onValueChange={handleValueChange} />
      {isValidInput && <Output userInput={userInput} />}
      {!isValidInput && <p className="center">Enter duration greater than 1</p>}
    </>
  )
}

export default App
