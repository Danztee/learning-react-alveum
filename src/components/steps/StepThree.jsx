import React from "react";

const StepThree = ({ form, handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Step Three Submitted");
    console.log(form, "form.....");
  };

  return (
    <div>
      <h2>Step Three</h2>

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
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={handleChange}
            value={form.address}
          />
        </div>

        <div>
          <label htmlFor="city">City: </label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={handleChange}
            value={form.city}
          />
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

export default StepThree;
