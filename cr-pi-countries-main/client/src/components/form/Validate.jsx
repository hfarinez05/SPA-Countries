const Validate = (input, setErrors, errors) => {
  if (input.name.legth != 0) {
    if (input.name.length === 0)
      setErrors({ ...errors, name: "this field is required" });
    else if (input.name.length <= 4)
      setErrors({ ...errors, name: "very short name" });
    else if (input.name.length >= 26)
      setErrors({ ...errors, name: "very long name" });
    else return setErrors({ ...errors, name: "" });
  }

  if (input.difficulty.length != 0) {
    if (input.difficulty < 1 || input.difficulty > 5)
      setErrors({
        ...errors,
        difficulty: "The difficulty must be a number between 1 and 5",
      });
    else return setErrors({ ...errors, difficulty: "" });
  }
  if (input.duration) {
    if (input.duration < 24)
      setErrors({ ...errors, duration: "Choose a number up to 24" });
  }
};

export default Validate;
