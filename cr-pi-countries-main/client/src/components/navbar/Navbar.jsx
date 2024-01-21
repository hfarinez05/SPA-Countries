/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import styles from "../navbar/Navbar.module.css";

const Navbar = ({ handleChange, handleSubmit }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.menu}>
        <Link to="/home">
          <li>home</li>
        </Link>
        <Link>
          <li>about</li>
        </Link>
        <Link>
          <li>cursos</li>
        </Link>
        <Link>
          <li>estudios</li>
        </Link>
        <Link>
          <li>contacts</li>
        </Link>
      </div>
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
