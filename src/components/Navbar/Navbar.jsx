import React, { useState } from 'react'

import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <div>
                <a className={styles.title} href="/"><img src="assets/logo/Logo.svg" alt="Ahmad Portfolio Website Logo" />
                </a>
            </div>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={menuOpen ? getImageUrl("/assets/nav/closeIcon.png") : getImageUrl("/assets/nav/menuIcon.png")}
                    alt='menu-button'
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav >
    )
}

export default Navbar