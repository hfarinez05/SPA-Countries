/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "../navbar/Navbar.module.css";

const Navbar = ({ handleChange, handleSubmit }) => {
  return (
    <div className={styles.mainnavbar}>
      <form onChange={handleChange}>
        <input type="search" placeholder="Busqueda" />
        <button type="submit" onClick={handleSubmit}>
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Navbar;
