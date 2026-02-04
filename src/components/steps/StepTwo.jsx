import React from "react";

const StepTwo = ({ setStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setStep(3);
  };

  return (
    <div>
      <h2>Step Two</h2>

      <form
        onSubmit={handleSubmit}
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" />
        </div>

        <div>
          <label htmlFor="phone">Phone Number: </label>
          <input type="tel" id="phone" />
        </div>

        <button
          type="submit"
          style={{
            width: "fit-content",
          }}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default StepTwo;
