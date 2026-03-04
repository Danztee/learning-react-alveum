import { useState } from "react";
import "./App.css";
import StepOne from "./components/steps/stepOne";
import StepThree from "./components/steps/StepThree";
import StepTwo from "./components/steps/StepTwo";

function App() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const handleChange = (e) => {
    // console.log(e, "event.....");
    // console.log(e.target.name, e.target.value);

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // console.log(form, "form.....");

  return (
    <>
      <h1>Onboarding Details</h1>

      {step === 1 ? (
        <StepOne setStep={setStep} form={form} handleChange={handleChange} />
      ) : step === 2 ? (
        <StepTwo setStep={setStep} form={form} handleChange={handleChange} />
      ) : (
        <StepThree form={form} handleChange={handleChange} />
      )}
    </>
  );
}

export default App;
