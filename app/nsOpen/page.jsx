import Link from "next/link";
import Image from "next/image";


export async function generateMetadata({ params }) {
  return {
    title: 'Novi sad Open ',
    description: 'Novi sad open, 7th - 8th of September',
  }
}


export default function NsOpen() {
  return (
    <>
      <div className="w-1/2 m-auto">
        <ul>
          <li className="py-2">
            Rules: The tournament consists of five rounds McMahon with Candian 
            time, 1 hour basic and 5 minutes for 10 moves, komi 6,5 points.
            Japanese/EGF rules (subject to changes depending on the number of
            participants).
          </li>
          <li className="py-2">
            Participation: 20€ fee per person. For member of Serbian Go federation 15€ per person.  Tournament starts on 7th September at 10:30 am.
          </li>
          <li className="py-2">Prizes: to be announced</li>
        </ul>

        <div className="w-full flex flex-col justify-center text-center">
            <Link href={"/nsOpen/register"}>
              <h2 className="font-bold text-4xl mb-4">Register</h2>
            </Link>{" "}
            or check <br />
            <Link className="underline" href={"/nsOpen/participants"}>registerd participants</Link>
          </div>
      </div>
    </>
  );
}
