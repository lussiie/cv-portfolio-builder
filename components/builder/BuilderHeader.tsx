"use client";

import Link from "next/link";

export default function BuilderHeader() {

  return (

    <header
      className="
      mb-8
      flex
      items-center
      justify-between
      rounded-[32px]
      bg-white
      px-8
      py-6
      shadow-xl
      border
      "
    >


      <div className="flex items-center gap-4">


        <div
          className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-blue-600
          text-2xl
          font-bold
          text-white
          "
        >
          CV
        </div>



        <div>

          <p className="
          text-sm
          font-semibold
          text-blue-600
          ">
            Resume Builder
          </p>



          <h1 className="
          text-2xl
          font-bold
          text-slate-900
          ">
            Create your professional CV
          </h1>


          <p className="
          text-sm
          text-slate-500
          ">
            Build a modern resume that stands out
          </p>


        </div>


      </div>





      <Link

        href="/dashboard"

        className="
        rounded-2xl
        bg-slate-900
        px-6
        py-3
        font-semibold
        text-white
        transition
        hover:bg-blue-600
        "

      >

        Back to Dashboard

      </Link>



    </header>

  );

}