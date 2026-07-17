"use client";

import CVHeader from "@/components/cv/CVHeader";
import CVSidebar from "@/components/cv/CVSidebar";
import CVAbout from "@/components/cv/CVAbout";
import CVExperience from "@/components/cv/CVExperience";
import CVEducation from "@/components/cv/CVEducation";
import CVProjects from "@/components/cv/CVProjects";
import CVCertificates from "@/components/cv/CVCertificates";



type Props = {
  cv: any;
};


export default function CVPreview({cv}: Props) {


  return (

    <div
      id="cv-preview"
      className="
      mx-auto
      max-w-5xl
      overflow-hidden
      rounded-xl
      bg-white
      shadow-xl
      "
    >

      <CVHeader cv={cv}/>


      <div className="grid md:grid-cols-3">


        <main className="p-10 md:col-span-2">


          <CVAbout cv={cv}/>


          <CVExperience cv={cv}/>


          <CVEducation cv={cv}/>


          <CVProjects cv={cv}/>


          <CVCertificates cv={cv}/>


        </main>


        <CVSidebar cv={cv}/>


      </div>


    </div>

  );

}