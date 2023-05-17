import { Fragment, useState } from "react";
import styles from "./navbar.module.css";

export function Navbar(){
    const [design, setdesign]=useState(false)

    function hambergermenu(){
        setdesign(!design)
    }

    return(
        <Fragment>
            <div className={styles.div1}>
                <div id={styles.div2}>
                <h1 className={styles.h1}>A</h1><h4 className={styles.h4}>RIHANT</h4><h1 className={styles.h1}> M</h1><h4 className={styles.h4}>OBILE</h4>
                </div>
                <ul className={design?styles.navbarMobile:styles.navbar}>
                    <li className={styles.li}><a href="/">Home</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="/aboutus">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <button className={styles.btn} onClick={hambergermenu}><img className={styles.img} src="hamburgermenu.png" alt="menubar"/></button>

            </div>
            
        </Fragment>
    )
}