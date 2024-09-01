import React from "react";

export default function page() {
  return (
    <div className="w-1/2 m-auto">
      <ul>
        <li className="py-2">
          Rules: The tournament consists of five rounds McMahon with Fischer
          time, 45 minutes basic / 20 seconds per move, komi 6,5 points.
          Japanese/EGF rules (subject to changes depending on the number of
          participants).
        </li>
        <li className="py-2">
          Participation: 20€ fee per person. Eligible are all amateur players
          that are university student and born in 1995 or later with a
          citizenship of an EGF member-country. Players starting to study in
          fall 2024 are also eligible but have to show an appropriate university
          document. Tournament starts on 7th September at 9:30 am.
        </li>
        <li className="py-2">Prizes: 

          <p className="ml-8">
            I place : 100 eur <br/> II place: 50 eur <br/> III place: 30 eur  
          </p>
        </li>
      </ul>
    </div>
  );
}
