import React, { useState } from "react";
import styles from "./Header.module.css";
import { NavLink } from 'react-router-dom';

const Header = () => {




    return (
        <div className={styles.header_container}>
            <h1 className={styles.textLogo}>Diaz | <span>Dev</span> </h1>


            <nav className={styles.responsiveMenu} >
                <ul  >
                    <li  ><NavLink to={"/"} end className={({ isActive }) => isActive ? styles.active : styles.deactivate}>Home</NavLink></li>
                    <li ><NavLink to={"/about"} className={({ isActive }) => isActive ? styles.active : styles.deactivate}>Sobre</NavLink></li>
                    <li ><NavLink to={"/projects"} className={({ isActive }) => isActive ? styles.active : styles.deactivate}>Projetos</NavLink></li>
                    <li ><NavLink to={"/contacts"} className={({ isActive }) => isActive ? styles.active : styles.deactivate}>Contato</NavLink></li>

                </ul>
            </nav>

        </div>
    );
};

export default Header;
