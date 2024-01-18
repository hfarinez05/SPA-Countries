import { useState } from "react";

import Validate from "./Validate";

//import styles from "../form/Form.module.css";

const Form = () => {
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const [errors, setErrors] = useState({
    name: "obligatorio",
    difficulty: "",
    duration: "",
    season: "obligatorio",
    countries: [],
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setInput({
      ...input,
      [property]: value,
    });
    Validate(
      {
        ...input,
        [property]: value,
      },
      setErrors,
      errors
    );
  };

  //{  ...input,   [property]: value,  }

  const submitHandler = (event) => {
    event.preventDefault(event);
    alert("SUBMIT EXITOSO");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={input.value}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.name}</p>
        </div>
        <div>
          <label htmlFor="difficulty">Difficulty: </label>
          <input
            type="text"
            name="difficulty"
            value={input.value}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.difficulty}</p>
        </div>
        <div>
          <label htmlFor="duration">Duration: </label>
          <input
            type="text"
            name="duration"
            value={input.value}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="season">Season: </label>
          <input
            type="text"
            name="season"
            value={input.value}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.season}</p>
        </div>
        <div>
          <label htmlFor="countries">Countries: </label>
          <input
            type="text"
            name="countries"
            value={input.value}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
