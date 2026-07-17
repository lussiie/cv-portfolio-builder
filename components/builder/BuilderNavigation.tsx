"use client";


type Props = {

  step: number;

  nextStep: () => void;

  prevStep: () => void;

  saveCV: () => void;

};



export default function BuilderNavigation({

  step,

  nextStep,

  prevStep,

  saveCV,

}: Props) {


  return (

    <div className="mt-10 flex gap-4">


      {step > 1 && (

        <button

          onClick={prevStep}

          className="rounded bg-gray-300 px-5 py-2"

        >

          Back

        </button>

      )}






      {step < 9 && (

        <button

          onClick={nextStep}

          className="rounded bg-blue-600 px-5 py-2 text-white"

        >

          Next

        </button>

      )}







      {step === 9 && (

        <button

          onClick={saveCV}

          className="rounded bg-green-600 px-5 py-2 text-white"

        >

          Save CV

        </button>

      )}



    </div>

  );

}