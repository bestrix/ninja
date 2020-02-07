import React from 'react';
import s from "./nav.module.css";

function Nav(){
    return(
        <nav className={s.nav}>
        <div className={s.item}><a>Profile</a></div>
        <div className={s.item}><a>Message</a></div>
        <div className={s.item}><a>News</a></div>
        <div className={`${s.item} ${s.active}`}><a>Profile</a></div>
        <div className={s.item}><a>Musik</a></div>
        <div className={s.item}><a>Settings</a></div>
      </nav>
    )
}

export default Nav;