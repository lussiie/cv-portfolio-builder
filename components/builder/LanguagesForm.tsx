"use client";

import { useState } from "react";


type Language = {
  name: string;
  level: string;
};


type Props = {
  languages: Language[];
  setLanguages: React.Dispatch<
    React.SetStateAction<Language[]>
  >;
};



export default function LanguagesForm({
  languages,
  setLanguages,
}: Props) {


  const [language, setLanguage] = useState<Language>({
    name: "",
    level: "",
  });



  function addLanguage() {

    if (!language.name) {
      return;
    }


    setLanguages([
      ...languages,
      language,
    ]);


    setLanguage({
      name: "",
      level: "",
    });

  }



  function removeLanguage(index:number) {

    setLanguages(
      languages.filter((_,i)=>i !== index)
    );

  }



  return (
    <div className="space-y-5">


      <h2 className="text-2xl font-bold">
        Languages
      </h2>



      <input
        className="w-full rounded border p-3"
        placeholder="Language (English)"
        value={language.name}
        onChange={(e)=>
          setLanguage({
            ...language,
            name:e.target.value
          })
        }
      />



      <input
        className="w-full rounded border p-3"
        placeholder="Level (Native, B2, C1...)"
        value={language.level}
        onChange={(e)=>
          setLanguage({
            ...language,
            level:e.target.value
          })
        }
      />



      <button
        type="button"
        onClick={addLanguage}
        className="rounded bg-green-600 px-5 py-2 text-white"
      >
        Add Language
      </button>



      <div className="space-y-3">

        {languages.map((item,index)=>(

          <div
            key={index}
            className="flex justify-between rounded border p-4"
          >

            <div>
              <h3 className="font-bold">
                {item.name}
              </h3>

              <p>
                {item.level}
              </p>
            </div>


            <button
              type="button"
              onClick={()=>removeLanguage(index)}
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