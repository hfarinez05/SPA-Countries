import { useDispatch } from "react-redux";

import { alfabeticSort, populationSort } from "../../redux/actions";

const Sort = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const { name } = e.target;
    dispatch(alfabeticSort(name));
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;
    dispatch(populationSort(value));
  };
  return (
    <div>
      <button name="Asce" onClick={handleClick}>
        A-Z
      </button>
      <button name="Desc" onClick={handleClick}>
        Z-A
      </button>
      <select onChange={handleSelectChange}>
        <option value="" disabled>
          Population
        </option>
        <option value="Menor">Ascending</option>
        <option value="Mayor">Descending</option>
      </select>
    </div>
  );
};

export default Sort;
