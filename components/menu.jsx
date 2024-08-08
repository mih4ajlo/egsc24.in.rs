import Link from "next/link";
import icon from "./icon.svg";
import classes from "./header.module.css";

export default function Menu() {
  return (
    // <nav classNameN{classes.me}"w-full flex justify-center border-b border-b-foreground/10 h-16">
    //     <div classNameN{classes.me}"w-full max-w-4xl flex justify-between items-center p-3 text-sm">

    //     </div>
    // </nav>
    <>
      <header className={classes.header}>
        <a href="" className={classes.logo}>
          EGSC 2024
        </a>
        <div>
          <input className={classes.menuBtn} type="checkbox" id="menuBtn" />
          <label className={classes.menuIcon} htmlFor="menuBtn">
            <span className={classes.navicon}></span>
          </label>
          <ul className={classes.menu}>
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
              <Link href="#">Rules</Link>
            </li>
            <li>
              <Link href="#">Accomodation</Link>
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
