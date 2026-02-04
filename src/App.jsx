import { useState } from "react";
import "./App.css";
import StepOne from "./components/steps/stepOne";
import StepThree from "./components/steps/StepThree";
import StepTwo from "./components/steps/StepTwo";

function App() {
  const [step, setStep] = useState(1);

  return (
    <>
      <h1>Onboarding Details</h1>

      {step === 1 ? (
        <StepOne setStep={setStep} />
      ) : step === 2 ? (
        <StepTwo setStep={setStep} />
      ) : (
        <StepThree />
      )}
    </>
  );
}

export default App;
