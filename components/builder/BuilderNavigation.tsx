"use client";

import { useRouter } from "next/navigation";


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


  const router = useRouter();


  return (

    <div
      className="
        mt-10
        flex
        items-center
        justify-between
      "
    >


      <button

        onClick={() => router.push("/dashboard")}

        className="
          rounded-xl
          bg-[#E8F1FF]
          px-5
          py-2
          font-semibold
          text-[#2563EB]
          hover:bg-[#D8E8FF]
          transition
        "

      >

        ← Dashboard

      </button>





      <div className="flex gap-4">


        {step > 1 && (

          <button

            onClick={prevStep}

            className="
              rounded-xl
              bg-[#F1F5F9]
              px-5
              py-2
              font-semibold
              text-[#475569]
              hover:bg-[#E2E8F0]
              transition
            "

          >

            Back

          </button>

        )}







        {step < 9 && (

          <button

            onClick={nextStep}

            className="
              rounded-xl
              bg-[#2563EB]
              px-5
              py-2
              text-white
              font-semibold
              hover:bg-[#1D4ED8]
              transition
            "

          >

            Next

          </button>

        )}







        {step === 9 && (

          <button

            onClick={saveCV}

            className="
              rounded-xl
              bg-[#0A2540]
              px-5
              py-2
              text-white
              font-semibold
              hover:bg-[#123B63]
              transition
            "

          >

            Save CV

          </button>

        )}


      </div>



    </div>

  );

}