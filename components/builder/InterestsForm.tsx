"use client";

import { useState } from "react";


type Props = {
  interests: string[];
  setInterests: React.Dispatch<
    React.SetStateAction<string[]>
  >;
};



export default function InterestsForm({
  interests,
  setInterests,
}: Props) {


  const [interestInput, setInterestInput] = useState("");



  function addInterest() {

    const value = interestInput.trim();

    if (!value) return;


    setInterests([
      ...interests,
      value,
    ]);


    setInterestInput("");

  }




  function removeInterest(index:number) {

    setInterests(
      interests.filter((_,i)=>i !== index)
    );

  }




  return (
    <div className="space-y-5">


      <h2 className="text-2xl font-bold">
        Interests & Hobbies
      </h2>



      <div className="flex gap-3">

        <input
          className="flex-1 rounded border p-3"
          placeholder="Reading, Football, Open Source..."
          value={interestInput}
          onChange={(e)=>
            setInterestInput(e.target.value)
          }
        />


        <button
          type="button"
          onClick={addInterest}
          className="rounded bg-green-600 px-5 py-2 text-white"
        >
          Add
        </button>


      </div>




      <div className="space-y-2">


        {interests.map((item,index)=>(

          <div
            key={index}
            className="flex justify-between rounded border p-3"
          >

            <span>
              {item}
            </span>


            <button
              type="button"
              onClick={()=>removeInterest(index)}
              className="text-red-600"
            >
              Delete
            </button>


          </div>

        ))}


      </div>


    </div>
  );
}