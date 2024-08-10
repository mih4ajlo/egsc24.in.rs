import Image from "next/image";

import holPic from "../public/slike/hol.webp";
import GossSVG from "../public/GoSS_logo.svg";

import trgPic from "../public/slike/trg.webp";
import GoPic from "../public/slike/go_tabla.jpg";
import Link from "next/link";
import classes from "./header.module.css";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center">
        {/* <Image src={holPic} alt="asd" width={400} height={400} /> */}

        {/* <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <Image src={GossSVG} alt="asd" width={200} height={200} />
        </a> */}
        <div className="relative">
          <Image
            src={trgPic}
            alt="novi sad square"
            width={800}
            className={`${classes.mask} `}
          />
          <Image
            src={GoPic}
            alt="hand of player placing go stone"
            width={800}
            className={` ${classes.maskOverlap}`}
          />
        </div>
      </div>

      {/* <Image src={centarPic} alt="asd" width={1200} height={400} className={classes.mask} /> */}
      <h1 className="sr-only">European Go Student Championship 2024 page</h1>

      <div className="text-2xl  lg:text-4xl !leading-tight mx-auto max-w-[70rem] text-center">
        <p className="text-3xl font-bold mb-4">
          European Go Student Championship 2024
        </p>
        and
        <p className="mt-4">
          <Link href={"/nsOpen"} className="underline ">
            {" "}
            Novi Sad Open - 1st edition
          </Link>
        </p>
      </div>

      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-2" />
    </div>
  );
}
