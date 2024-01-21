import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCountries, postActivity } from "../../redux/actions";

import styles from "../create/Create.module.css";

const Create = () => {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countriesCopy);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const season = ["Spring", "Summer", "Autumn", "Winter"];

  const validate = (errors, name) => {
    if (name === "name") {
      if (errors.name === "") setErrors({ ...errors, name: "Name required" });
      else if (errors.name.length >= 20)
        setErrors({ ...errors, name: "Name is very long" });
      else if (errors.name.length <= 4)
        setErrors({ ...errors, name: "Name is very short" });
      else setErrors({ ...errors, name: "" });
    }
    if (name === "difficulty") {
      if (isNaN(Number(errors.difficulty)))
        setErrors({ ...errors, difficulty: "Must be a number" });
      else if (errors.difficulty > 5)
        setErrors({ ...errors, difficulty: "Choose a number 1 - 5" });
      else if (errors.difficulty < 0)
        setErrors({
          ...errors,
          difficulty: "Negative numbers are not allowed",
        });
      else if (errors.difficulty === "0")
        setErrors({ ...errors, difficulty: "Choose a valid difficulty" });
      else setErrors({ ...errors, difficulty: "" });
    }
    if (name === "duration") {
      setErrors({ ...errors, duration: "" });
    }
    if (name === "season") {
      if (errors.season === "")
        setErrors({ ...errors, season: "Choose one season" });
      else setErrors({ ...errors, season: "" });
    }
    if (name === "countries") {
      if (errors.countries.length === 0)
        setErrors({ ...errors, countries: "Choose at least one country" });
      else setErrors({ ...errors, countries: "" });
    }
  };

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;

    if (property === "countries") {
      const selectedCountry = countries.find((c) => c.name === value);
      if (selectedCountry) {
        setInput({
          ...input,
          countries: [...input.countries, selectedCountry.name],
        });
      }
    } else {
      const newInput = { ...input, [property]: value };
      setInput(newInput);
      validate({ ...errors, [property]: value }, property);
    }
  };

  const remove = (e) => {
    const { id } = e.target;
    setInput({
      ...input,
      countries: input.countries.filter((c) => c !== id),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postActivity(input));
    resetState();
  };

  const resetState = () => {
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });

    setErrors({
      name: "Name required",
      difficulty: "Difficulty required",
      duration: "Duration required",
      season: "Season required",
      countries: "Countries required",
    });
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
          <p style={{ color: "red", font: "small-caption" }}>{errors.name}</p>
        </div>
        <div>
          <label htmlFor="difficulty">Difficulty</label>
          <input
            type="text"
            name="difficulty"
            value={input.difficulty}
            onChange={handleChange}
          />
          <p style={{ color: "red", font: "small-caption" }}>
            {errors.difficulty}
          </p>
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            name="duration"
            value={input.duration}
            onChange={handleChange}
          />
          <p style={{ color: "red", font: "small-caption" }}>
            {errors.duration}
          </p>
        </div>
        <div>
          <label htmlFor="season">Season</label>
          <select name="season" value={input.season} onChange={handleChange}>
            <option value="" disabled>
              Choose
            </option>
            {season.map((s) => (
              <option value={s} key={s}>
                {s}
              </option>
            ))}
          </select>
          <p style={{ color: "red" }}>{errors.season}</p>
        </div>
        <div>
          <label htmlFor="countries">Countries</label>
          <select name="countries" value="" onChange={handleChange}>
            <option value="" disabled>
              Choose
            </option>
            {countries.map((c) => (
              <option value={c.name} key={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          <div className="">
            {input.countries.map((c, index) => (
              <div className="" key={index}>
                <img
                  src={countries.find((country) => country.name === c)?.image}
                  alt={c}
                />
                <div>{c}</div>
                <button className="" onClick={remove} type="button" id={c}>
                  X
                </button>
              </div>
            ))}
          </div>
          <p style={{ color: "red" }}>{errors.countries}</p>
        </div>
        <button type="submit">Create Activity</button>
      </form>
    </div>
  );
};

export default Create;
