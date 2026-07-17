"use client";

import { useState } from "react";


type Education = {
  school: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
};


type Props = {
  educations: Education[];
  setEducations: React.Dispatch<
    React.SetStateAction<Education[]>
  >;
};



export default function EducationForm({
  educations,
  setEducations,
}: Props) {


  const [education, setEducation] = useState<Education>({
    school: "",
    degree: "",
    field: "",
    startYear: "",
    endYear: "",
  });



  function addEducation() {

    if (!education.school || !education.degree) {
      return;
    }


    setEducations([
      ...educations,
      education,
    ]);


    setEducation({
      school: "",
      degree: "",
      field: "",
      startYear: "",
      endYear: "",
    });

  }



  function removeEducation(index:number) {

    setEducations(
      educations.filter((_,i)=>i !== index)
    );

  }



  return (
    <div className="space-y-5">


      <h2 className="text-2xl font-bold">
        Education
      </h2>



      <input
        className="w-full rounded border p-3"
        placeholder="School / University"
        value={education.school}
        onChange={(e)=>
          setEducation({
            ...education,
            school:e.target.value
          })
        }
      />



      <input
        className="w-full rounded border p-3"
        placeholder="Degree"
        value={education.degree}
        onChange={(e)=>
          setEducation({
            ...education,
            degree:e.target.value
          })
        }
      />



      <input
        className="w-full rounded border p-3"
        placeholder="Field of study"
        value={education.field}
        onChange={(e)=>
          setEducation({
            ...education,
            field:e.target.value
          })
        }
      />



      <input
        className="w-full rounded border p-3"
        placeholder="Start year"
        value={education.startYear}
        onChange={(e)=>
          setEducation({
            ...education,
            startYear:e.target.value
          })
        }
      />



      <input
        className="w-full rounded border p-3"
        placeholder="End year"
        value={education.endYear}
        onChange={(e)=>
          setEducation({
            ...education,
            endYear:e.target.value
          })
        }
      />



      <button
        type="button"
        onClick={addEducation}
        className="rounded bg-green-600 px-5 py-2 text-white"
      >
        Add Education
      </button>



      <div className="space-y-3">

        {educations.map((item,index)=>(

          <div
            key={index}
            className="rounded border p-4"
          >

            <div className="flex justify-between">

              <h3 className="font-bold">
                {item.school}
              </h3>


              <button
                type="button"
                onClick={()=>removeEducation(index)}
                className="text-red-600"
              >
                Delete
              </button>

            </div>


            <p>
              {item.degree}
            </p>


            <p>
              {item.field}
            </p>

          </div>

        ))}

      </div>


    </div>
  );
}