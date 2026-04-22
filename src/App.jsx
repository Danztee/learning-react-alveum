// import { useRef } from "react";
import { useReducer } from "react";
import "./App.css";
import StepOne from "./components/steps/stepOne";
import StepThree from "./components/steps/StepThree";
import StepTwo from "./components/steps/StepTwo";
import Todo from "./components/Todo";

// const countStep = () => {
//   const [step, setStep] = useState(1);
// };

// "ADD" and "REMOVE" and "CLEAR"
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.item];

    case "REMOVE":
      return state.filter((item, index) => index !== action.index);

    case "CLEAR":
      return [];

    default:
      return state;
  }
}

function App() {
  const [cart, dispatch] = useReducer(reducer, []);

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

  // const ref = useRef(1);

  // const handleClick = (e) => {
  //   e.preventDefault();

  //   ref.current = ref.current + 1;

  //   alert("you clicked me " + ref.current + " times");

  //   console.log("hi");
  //   console.log(ref.current, "ref.....");
  // };

  return (
    <div>
      <h2>CART ITEMS: {cart.length}</h2>

      <button onClick={() => dispatch({ type: "ADD", item: "Shoe" })}>
        Add shoe
      </button>

      <button onClick={() => dispatch({ type: "ADD", item: "Cloth" })}>
        Add cloth
      </button>

      <button onClick={() => dispatch({ type: "REMOVE", index: 0 })}>
        Remove first item
      </button>

      <button onClick={() => dispatch({ type: "CLEAR" })}>clear cart</button>

      <ul>
        {cart.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
