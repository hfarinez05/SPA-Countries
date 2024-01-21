import { useDispatch } from "react-redux";

import { alfabeticSort, populationSort } from "../../redux/actions";

import styles from "../sortOrder/Sort.module.css";

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
    <div className={styles.mainSort}>
      <div className={styles.buttonsAlphabetic}>
        <button name="Asce" onClick={handleClick}>
          A-Z
        </button>
        <button name="Desc" onClick={handleClick}>
          Z-A
        </button>
      </div>

      <div className={styles.buttonsPopulation}>
        <select onChange={handleSelectChange}>
          <option value="" disabled>
            Population
          </option>
          <option value="Menor">Descending</option>
          <option value="Mayor">Ascending</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
