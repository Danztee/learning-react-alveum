import { useRef, useState } from "react";
import "./App.css";
import StepOne from "./components/steps/stepOne";
import StepThree from "./components/steps/StepThree";
import StepTwo from "./components/steps/StepTwo";
import Todo from "./components/Todo";

// const countStep = () => {
//   const [step, setStep] = useState(1);
// };

function App() {
  // const [step, setStep] = useState(1);

  // const ref = useRef("1");

  // ref.current = "2";

  // // console.log(ref.current);

  // const [form, setForm] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   address: "",
  //   city: "",
  // });

  // const handleChange = (e) => {
  //   // console.log(e, "event.....");
  //   // console.log(e.target.name, e.target.value);

  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  // console.log(form, "form.....");

  const ref = useRef(1);

  const handleClick = (e) => {
    e.preventDefault();

    ref.current = ref.current + 1;

    alert("you clicked me " + ref.current + " times");

    console.log("hi");
    console.log(ref.current, "ref.....");
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>

      <p>number : {ref.current}</p>

      {/* / <Todo /> */}
    </>
    // <>
    //   <h1>Onboarding Details</h1>

    //   {step === 1 ? (
    //     <StepOne setStep={setStep} form={form} handleChange={handleChange} />
    //   ) : step === 2 ? (
    //     <StepTwo setStep={setStep} form={form} handleChange={handleChange} />
    //   ) : (
    //     <StepThree form={form} handleChange={handleChange} />
    //   )}
    // </>
  );
}

export default App;
