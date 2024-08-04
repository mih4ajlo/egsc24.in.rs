import React from 'react';
import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


export default function Participants() {


    const signIn = async () => {
        "use server";
    
        const supabase = createClient();
    
        const { data: notes } = await supabase.from("main_participants").select();

        return <pre>{JSON.stringify(notes, null, 2)}</pre>
      };

    const data =  signIn();

  return (
    <div>
      {data}
    </div>
  )
}
