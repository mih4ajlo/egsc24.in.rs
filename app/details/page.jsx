import Image from "next/image";

import holPic from "../../public/slike/hol.webp";
import mapa from "../../public/slike/mapa.png";

export default function page() {
  return (
    <div className="sm:w-2/3 w-1/3 m-auto">
      <div>
        <h1 className="text-[2rem] pb-2">Venue</h1>

        <p className="pb-4">
          New rectorate building has opened some 10 years ago. Building has
          range of dedicated spaces such as administrative offices, meeting
          rooms, and conference facilities, all strategically organized to
          facilitate smooth workflows and communication. The building’s
          open-plan design encourages transparency and collaboration, with
          easily accessible areas for both staff and visitors. Advanced
          technology is integrated throughout, featuring high-speed internet,
          state-of-the-art audiovisual systems, and automated climate control,
          which supports both administrative tasks and academic events. The
          inclusion of flexible meeting spaces and seminar rooms allows for a
          variety of functions, from formal presentations to informal
          discussions. Additionally, the building’s design incorporates
          intuitive signage and accessibility features, ensuring that all areas
          are easily navigable for people of all abilities. Overall, the new
          Rectorate Building is engineered to support the university’s
          operational needs while promoting a productive and collaborative
          academic atmosphere.
        </p>

        <p>Address: Bulevar Zorana Djindjica 1</p>
        <a href="https://maps.app.goo.gl/fk7tomHgxMGMQSbD6">
          <Image src={mapa} width={"w-1/3"} />
        </a>
      </div>
      <div>
        <h1 className="text-[2rem] pb-2">Accomodation</h1>
        <p>
          Novi Sad is a regional center and it's home to one of the biggest
          music festival in this part of Europe - Exit; it's shouldn't be a
          problem to find decent accomodation 
        </p>
        <a
          className="underline"
          href="https://www.booking.com/searchresults.en-gb.html?ss=Novi+Sad%2C+Vojvodina%2C+Serbia&efdco=1&aid=2311236&lang=en-gb&sb=1&src_elem=sb&src=index&dest_id=-90313&dest_type=city&checkin=2024-09-06&checkout=2024-09-08&group_adults=2&no_rooms=1&group_children=0"
        >
          Please check Booking for accomodation
        </a>
      </div>

      <div className="my-4">
        <h1 className="text-[2rem] pb-2 mt">Getting to Novi sad</h1>
        {/* <p>It's a one hour ride from Belgrade airport </p> */}
        Check{" "}
        <a href="https://global.flixbus.com/" className="underline">
          FlixBus
        </a>{" "}
        or{" "}
        <a className="underline" href="https://beg.aero/eng">
          Belgrade airport
        </a>
      </div>

      <div className="my-4">
        <h1 className="text-[2rem] pb-2">Other info</h1>
        <p>
          In Serbia officialy currency is dinar and excange rate for euro is
          ~117 din / 1 eur. Paying cards are widely accepted, and there is a lot
          of excange service places in the city
        </p>
      </div>
    </div>
  );
}
