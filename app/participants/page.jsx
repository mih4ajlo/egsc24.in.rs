import React from "react";
import { createClient } from "@/utils/supabase/server";

const notToDisplay = ["created_at", "id", "e_mail", "faculty","degree", "note"];

const maping = {
  "first_name": "Name", 
  "last_name":"Last name",
  "category":"Category",
  "rating":"Rating",
  "university": "University",
  "country":"Country"
}


const bodyJSX = (participants) =>{

  const arrLa = [];
   participants?.forEach(( partic, ind) => {  
    
    let tempPar = Object.entries(partic);
    
    tempPar = [...[['','#']],...tempPar]
    
    

    const tem =  (
      <tr>
        {tempPar.map(
          (el) => {
            if(el[1]==='#') {
              
              return <td>{ind +1}</td>;}
              return notToDisplay.indexOf(el[0]) == -1 ? (<td>{el[1]}</td>) : null},
              ind
            )}
      </tr>
    );
    arrLa.push(tem);
  });

  return arrLa;
}

const headJSX = (participants) => {

  if (! Array.isArray(participants) ) {
    return <>no entries</>;
  }

  let tempPar = Object.entries(participants[0])

  tempPar = [...[['#','']],...tempPar]

  return (
      <tr>
        {tempPar.map(
          (el, i) => {
            if(el[0]==='#')return <th>  #</th>;
            return notToDisplay.indexOf(el[0]) == -1 ? (<th>{ maping[el[0]] }</th>) : null
          }
        )}
      </tr>
    );
  
};

const renderTable = (data) => {

  

  let headJ = headJSX(data);
  let bodJ =  bodyJSX(data);

  return (
    <table >
      <thead>{headJ}</thead>
      <tbody>{bodJ}</tbody>
    </table>
  );
};

export default function Participants() {
  let paricArr = [];

  const getParticipants = async () => {
    "use server";

    const supabase = createClient();

    const { data: participants } = await supabase
      .from("main_participants")
      .select();


    return renderTable(participants);

  };

  let resp = getParticipants();



  return <div className="overflow-x-auto max-w-[95%]">{(resp)}</div>;
}
