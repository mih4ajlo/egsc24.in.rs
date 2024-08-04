import React from "react";
import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { isArray } from "util";

const notToDisplay = ["created_at", "id", "e_mail"];

const bodyJSX = (participants) =>
  participants?.map((partic) => {
    return (
      <tr>
        {Object.entries(partic).map(
          (el) => notToDisplay.indexOf(el[0]) && <td>{el[1]}</td>
        )}
      </tr>
    );
  });

const headJSX = (participants) => {

  if (! Array.isArray(participants) ) {
    return <>prazno</>;
  }
  return participants?.map((partic) => {
    return (
      <tr>
        {Object.entries(partic).map(
          (el) => notToDisplay.indexOf(el[0]) && <th>{el[0]}</th>
        )}
      </tr>
    );
  });
};

const renderTable = (data) => {
  console.log("first", data);


  let headJ = headJSX(data);
  let bodJ = "";
  //bodyJSX(data);

  return (
    <table>
      <thead>{headJ}</thead>
      <tbody>{bodJ}</tbody>
    </table>
  );
};

export default function Participants() {
  let paricArr = [];

  const signIn = async () => {
    "use server";

    const supabase = createClient();

    const { data: participants } = await supabase
      .from("main_participants")
      .select();

    //console.log(participants)

    return participants;

    // participants?.length  ?  participants?.then((d)=> {
    //   renderTable(d);
    // }) : [] ;
  };

  let resp = signIn();

  // const resp1  = Array.isArray(resp)? resp: [];

  // console.log(resp)
  if (resp?.length > 0) {
    renderTable(resp);
  }

  return <div>{renderTable(resp)}</div>;
}
