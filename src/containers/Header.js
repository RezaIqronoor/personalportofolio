import React from 'react'
import s from './Header.module.css'

const Header = ({}) => {
    return(
        <div className={s.container}>
            <a href="#home" className={s.headerLogoText}>
                IQRONOOR
            </a>
            <Hr size={32}/>
            <a href="#home" className={s.headerMenu}>
                Home
            </a>
            <Hr size={32}/>
            <a href="#aboutMe" className={s.headerMenu}>
                About Me
            </a>
            <Hr size={32}/>
            <a href="#myWorks" className={s.headerMenu}>
                My Works
            </a>
        </div>
    )
}

const Hr = ({ size }) => {
    return(
        <div style={{width: size}}/>
    )
}

export default Header