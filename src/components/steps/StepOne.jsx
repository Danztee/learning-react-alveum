import React from "react";

const StepOne = ({ setStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setStep(2);
  };

  return (
    <div>
      <h2>Step One</h2>

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
          <label htmlFor="firstName">First Name: </label>
          <input type="text" id="firstName" />
        </div>

        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input type="text" id="lastName" />
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

export default StepOne;
