import Header from "@/components/Header";
import Menu from "@/components/menu";
import Link from "next/link";

export default async function Index() {
  return (
    <div className="flex-1  flex flex-col gap-20 items-center">
      <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3">
        
          <p>
            Welcome to Novi Sad, Serbia, for the European Student Championship
            in Go, happening on September 7th and 8th! This year's tournament
            (14th by count) is hosted in the beautiful University of Novi Sad
            rectorate building, located in the scenic park near Danube. We are
            delighted to host this prestigious event in our dynamic city, where
            tradition and modernity blend seamlessly. Nestled on the banks of
            the Danube River, Novi Sad is celebrated for its cultural vibrancy
            and historical charm, offering an inspiring backdrop for your
            strategic battles on the Go board. As you engage in this
            intellectually stimulating competition, we hope you also take a
            moment to enjoy the city's rich heritage and warm hospitality.
          </p>

          <p>
            During your stay, we encourage you to take some time to experience
            the local culture and attractions. The city is home to the
            impressive Petrovaradin Fortress, often referred to as the
            "Gibraltar on the Danube," which offers stunning panoramic views and
            a glimpse into our historical past. The lively atmosphere of the
            city center, along with its array of restaurants and shops, ensures
            there is always something new to discover. We hope that your visit
            will be as memorable off the field as it is on it.
          </p>

          <p>
            As we kick off this exciting tournament, we want to extend our
            deepest gratitude for your participation and enthusiasm. Your
            presence helps make this event a celebration of sportsmanship and
            community spirit. Whether you're here to compete, cheer, or simply
            enjoy the vibrant atmosphere, we hope you have an unforgettable
            experience. Welcome to Novi Sad, and let's make these two days of
            competition and camaraderie truly remarkable!
          </p>
          <div className="w-[50rem] text-center">
            <Link href={"/register"}>
              <h2 className="font-bold text-4xl mb-4">Register</h2>
            </Link>{" "}
            or check <br />
            <Link className="underline" href={"/participants"}>registerd participants</Link>
          </div>
        
      </div>
    </div>
  );
}
