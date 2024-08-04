import React from 'react';
import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


export default function Participants() {

    let paricArr = [];

    const signIn = async () => {
        "use server";
    
        const supabase = createClient();
    
        const { data: participants } = await supabase.from("main_participants").select();


        const notToDisplay = ['created_at', 'id', 'e_mail']

        return (participants
           && participants?.map((partic:Array<any>   ) => {
                return (<tr>
                  {  
                    ( Object.entries(partic).map(el=>
                      notToDisplay.indexOf(el[0]) &&  (<td>{el[1]}</td>))
          
                   ) 
                }
                </tr>)
              })
        ) ;
      };


      let partArr:  any = signIn();
     

      

  return (
    <div>
      <table>
        <thead></thead>
        <tbody>
         {partArr }
        </tbody>
      </table>
      
    </div>
  )
}
