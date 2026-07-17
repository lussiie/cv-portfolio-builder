"use client";

import { Trash2 } from "lucide-react";


export default function DeleteCVButton({
  id
}:{
  id:string
}) {


  async function deleteCV(){

    const confirmDelete = confirm(
      "Are you sure you want to delete this CV?"
    );


    if(!confirmDelete) return;


    const response = await fetch(
      `/api/cv/${id}`,
      {
        method:"DELETE",
      }
    );


    const data = await response.json();


    if(response.ok){

      alert("CV deleted");

      window.location.reload();

    }else{

      alert(data.message);

    }

  }



  return (

    <button

      onClick={deleteCV}

      className="
      flex
      items-center
      gap-2
      rounded-xl
      bg-red-600
      px-5
      py-2
      text-white
      hover:bg-red-700
      "

    >

      <Trash2 size={18}/>

      Delete

    </button>

  );

}