import React, { useState } from 'react'
import styles from './Header.module.css'
import { AiOutlineMenu } from 'react-icons/ai'
import {MobileMenuData} from './MobileMenuData'
import {Link} from 'react-router-dom'
function Header() {
    const [menu, setMenu] = useState(false)
    const onClick = function () {
        setMenu(!menu)
    }
    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.container}>
                    <div id='menu' className={styles.hamburger} onClick={onClick}><AiOutlineMenu size='24' /></div>
                </div>
            </div >
            {menu ? (
                <Mobilemenu />
            ) : (<></>)}
        </div>
    )
}

export default Header

function Mobilemenu() {
    return (
        <div className={styles.mobilemenu}>
            <ul>
            {
                MobileMenuData.map(item=>
                    <li key={item.id}>
                        <Link to={item.path}>
                        {item.icon}{item.title}
                        </Link>
                    </li>
                    )
                    
            }
            </ul>

        </div>
    )
}