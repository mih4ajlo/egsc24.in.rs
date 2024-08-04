import React from "react";
import { createClient } from "@/utils/supabase/server";

const notToDisplay = ["created_at", "id", "e_mail"];

const bodyJSX = (participants) =>
  participants?.map((partic) => {
    return (
      <tr>
        {Object.entries(partic).map(
          (el) => {return notToDisplay.indexOf(el[0]) == -1 ? (<td>{el[1]}</td>) : null}
        )}
      </tr>
    );
  });

const headJSX = (participants) => {

  if (! Array.isArray(participants) ) {
    return <>prazno</>;
  }
  return (
      <tr>
        {Object.entries(participants[0]).map(
          (el) => {return notToDisplay.indexOf(el[0]) == -1 ? (<td>{el[0]}</td>) : null}
        )}
      </tr>
    );
  
};

const renderTable = (data) => {


  let headJ = headJSX(data);
  let bodJ =  bodyJSX(data);

  return (
    <table>
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



  return <div>{(resp)}</div>;
}
