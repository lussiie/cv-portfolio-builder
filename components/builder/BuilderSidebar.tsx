"use client";

import React from "react";


type Props = {
  step: number;
  setStep: (step: number) => void;
};



export default function BuilderSidebar({
  step,
  setStep,
}: Props) {


  const sections = [
    "Personal Information",
    "About",
    "Skills",
    "Experience",
    "Education",
    "Projects",
    "Languages",
    "Certificates",
    "Interests",
  ];



  return (

    <aside
      className="
        sticky
        top-8
        h-fit
        rounded-[32px]
        bg-white
        p-6
        shadow-xl
        border
      "
    >


      <h2
        className="
          text-xl
          font-bold
          text-slate-900
        "
      >
        CV Sections
      </h2>



      <p
        className="
          mt-1
          text-sm
          text-slate-500
        "
      >
        Complete your profile step by step
      </p>




      <div
        className="
          mt-6
          space-y-3
        "
      >


        {
          sections.map((section,index)=>(

            <button

              key={section}

              type="button"

              onClick={() => setStep(index + 1)}

              className={`
                flex
                w-full
                items-center
                justify-between
                rounded-2xl
                px-5
                py-4
                text-left
                transition

                ${
                  step === index + 1

                  ? 
                  "bg-blue-600 text-white shadow-lg"

                  :

                  "bg-slate-50 text-slate-600 hover:bg-blue-50"

                }
              `}

            >


              <span className="font-semibold">
                {section}
              </span>



              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-black/10
                  text-xs
                  font-bold
                "
              >
                {index + 1}
              </span>



            </button>

          ))
        }



      </div>



    </aside>

  );

}