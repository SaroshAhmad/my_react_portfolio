import React from 'react'

import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div>
                <a className={styles.title} href="/"><img src="assets/logo/Logo1.svg" alt="Ahmad Portfolio   Website Logo" />
                </a>
            </div>
            <div className={styles.menu}>
                <ul className={styles.menuItems}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar