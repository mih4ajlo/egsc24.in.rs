"use client";

import {useEffect, useState} from 'react';
import Link from "next/link";
import classes from "./header.module.css";

export default function Menu() {

  const [clicked, setClicked] = useState(false);

  const stlyeTme = {'display':  `${"block"}`}
//clicked? "none":


  return (
    // <nav classNameN{classes.me}"w-full flex justify-center border-b border-b-foreground/10 h-16">
    //     <div classNameN{classes.me}"w-full max-w-4xl flex justify-between items-center p-3 text-sm">

    //     </div>
    // </nav>
    <>
      <header className={classes.header}>
        <a href="/" className={classes.logo}>
          EGSC 2024
        </a>
        <div>
          <input className={classes.menuBtn} type="checkbox" id="menuBtn"  />
          <label className={classes.menuIcon} htmlFor="menuBtn" onClick={(ev)=>setClicked(true)}>
            <span className={classes.navicon}></span>
          </label>
          <ul className={classes.menu} style={stlyeTme}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/register">Registration</Link>
            </li>
            <li>
              <Link href="/participants">Participants</Link>
            </li>
            <li>
              <Link href="/rules">Rules</Link>
            </li>
            <li>
              <Link href="/details">Other info</Link>
            </li>
            <li>
              <Link href="/nsOpen">NS Open</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
