import Header from "@/components/Header";
import Menu from "@/components/menu";
import Link from "next/link";

export default async function Index() {
  return (
    <div className="flex-1  flex flex-col gap-20 items-center">
      <div className="flex-1 flex flex-col gap-20 w-8/12 max-w-[99vw] px-3">
        
          <p>
            Welcome to Novi Sad, Serbia, for the European Student Championship
            in Go, happening on September 7th and 8th! This year's tournament
            (14th by count) is hosted in the beautiful University of Novi Sad
            rectorate building, located in the scenic park near Danube. We are
            delighted to host this prestigious event in our dynamic city, where
            tradition and modernity blend seamlessly. Nestled on the banks of
            the Danube River, Novi Sad is celebrated for its cultural vibrancy
            and historical charm, offering an inspiring backdrop for your
            strategic battles on the Go board.   During your stay, we encourage you to take some time to experience
            the local culture and attractions. The city is home to the
            impressive Petrovaradin Fortress, often referred to as the
            "Gibraltar on the Danube," which offers stunning panoramic views and
            a glimpse into our historical past.
          </p>

          

          <p>
            Whether you're here to compete, cheer, or simply
            enjoy the vibrant atmosphere, we hope you have an unforgettable
            experience. Welcome to Novi Sad, and let's make these two days of
            competition and camaraderie truly remarkable!
            Please check <Link className="underline" href={"/rules"}>rules page</Link> to see if you are eligible to participate
          </p>
          <div className="w-full flex flex-col justify-center text-center">
            <Link href={"/register"}>
              <h2 className="font-bold text-4xl mb-4">Register</h2>
            </Link>{" "}
            or check <br />
            <Link className="underline" href={"/participants"}>registerd participants</Link>
          </div>

          <div> If you are not student but you want to compete in Novi Sad - we got you covered. As a side tournament we are organizing Novi Sad open - and everyone can participate with no restrictions.
            Please check <Link href={'/nsOpen'}>tournament page for details</Link> 
          </div>
        
      </div>
    </div>
  );
}
