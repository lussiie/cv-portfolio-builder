"use client";

import { useState } from "react";


type Experience = {
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate: string;
};


type Props = {
  experiences: Experience[];
  setExperiences: React.Dispatch<
    React.SetStateAction<Experience[]>
  >;
};



export default function ExperienceForm({
  experiences,
  setExperiences,
}: Props) {


  const [experience, setExperience] = useState<Experience>({
    company: "",
    position: "",
    description: "",
    startDate: "",
    endDate: "",
  });



  function addExperience() {

    if (!experience.company || !experience.position) {
      return;
    }


   setExperiences([
 ...experiences,
 {
   ...experience,
   startDate: experience.startDate || new Date().toISOString(),
   endDate: experience.endDate || "",
 }
]);


    setExperience({
      company: "",
      position: "",
      description: "",
      startDate: "",
      endDate: "",
    });

  }




  function removeExperience(index:number) {

    setExperiences(
      experiences.filter((_,i)=>i !== index)
    );

  }



  return (
    <div className="space-y-5">


      <h2 className="text-2xl font-bold">
        Work Experience
      </h2>



      <input
        className="w-full rounded border p-3"
        placeholder="Company"
        value={experience.company}
        onChange={(e)=>
          setExperience({
            ...experience,
            company:e.target.value
          })
        }
      />



      <input
        className="w-full rounded border p-3"
        placeholder="Position"
        value={experience.position}
        onChange={(e)=>
          setExperience({
            ...experience,
            position:e.target.value
          })
        }
      />



      <textarea
        className="w-full rounded border p-3"
        placeholder="Description"
        value={experience.description}
        onChange={(e)=>
          setExperience({
            ...experience,
            description:e.target.value
          })
        }
      />



      <input
        type="date"
        className="w-full rounded border p-3"
        value={experience.startDate}
        onChange={(e)=>
          setExperience({
            ...experience,
            startDate:e.target.value
          })
        }
      />



      <input
        type="date"
        className="w-full rounded border p-3"
        value={experience.endDate}
        onChange={(e)=>
          setExperience({
            ...experience,
            endDate:e.target.value
          })
        }
      />



      <button
        type="button"
        onClick={addExperience}
        className="rounded bg-green-600 px-5 py-2 text-white"
      >
        Add Experience
      </button>



      <div className="space-y-3">


        {experiences.map((item,index)=>(

          <div
            key={index}
            className="rounded border p-4"
          >

            <div className="flex justify-between">

              <h3 className="font-bold">
                {item.position}
              </h3>


              <button
                type="button"
                onClick={() => removeExperience(index)}
                className="text-red-600"
              >
                Delete
              </button>

            </div>


            <p>
              {item.company}
            </p>


          </div>

        ))}


      </div>


    </div>
  );
}