"use client";

import { useEffect, useState } from "react";
import BuilderSidebar from "@/components/builder/BuilderSidebar";
import BuilderEditor from "@/components/builder/BuilderEditor";
import BuilderProfileCard from "@/components/builder/BuilderProfileCard";
import BuilderLivePreview from "@/components/builder/BuilderLivePreview";

import { Experience } from "@/types/cv";


export default function BuilderPage() {


  const [step, setStep] = useState(1);


  const [settings, setSettings] = useState({

    template: "modern",

    themeColor: "blue",

    font: "inter",

  });



  const [personalInfo, setPersonalInfo] = useState({

    fullName: "",

    jobTitle: "",

    email: "",

    phone: "",

    location: "",

    linkedin: "",

    github: "",

  });



  const [about, setAbout] = useState("");

  const [skills, setSkills] = useState<string[]>([]);

  const [experiences, setExperiences] =
    useState<Experience[]>([]);

  const [educations, setEducations] =
    useState<any[]>([]);

  const [projects, setProjects] =
    useState<any[]>([]);

  const [languages, setLanguages] =
    useState<any[]>([]);

  const [certificates, setCertificates] =
    useState<any[]>([]);

  const [interests, setInterests] =
    useState<string[]>([]);

  const [photo, setPhoto] =
    useState("");

useEffect(() => {

  async function loadCV() {

    try {

      const response = await fetch("/api/cv");

      if (!response.ok) {
        return;
      }

      const cv = await response.json();

      if (cv?.profile?.photo) {
        setPhoto(cv.profile.photo);
      }

    } catch (error) {

      console.log(error);

    }

  }

  loadCV();

}, []);



  function nextStep(){

    if(step < 9){

      setStep(step + 1);

    }

  }



  function prevStep(){

    if(step > 1){

      setStep(step - 1);

    }

  }





  async function saveCV(){


    try{


      const response = await fetch("/api/cv",{

        method:"POST",

        headers:{

          "Content-Type":"application/json",

        },


        body:JSON.stringify({

          title:personalInfo.jobTitle,

          summary:about,

          photo,

          profile:personalInfo,

          skills,

          experiences,

          educations,

          projects,

          languages,

          certificates,

          interests,

        }),


      });



      const data = await response.json();


      console.log(data);



      if(response.ok){

  sessionStorage.removeItem("cv-photo");

        alert("CV saved successfully");

      }else{

        alert(data.message);

      }


    }catch(error){

      console.log(error);

      alert("Something went wrong");

    }


  }





  return (


    <div
      className="
        min-h-screen
        bg-[#F3F6F8]
        px-6
        py-8
      "
    >


      <div
        className="
          mx-auto
          max-w-[1800px]
        "
      >



        <header
          className="
            mb-8
            rounded-2xl
            bg-[#0A2540]
            p-8
            text-white
            shadow-sm
          "
        >


          <h1
            className="
              text-3xl
              font-bold
              tracking-tight
            "
          >

            Create your professional CV

          </h1>


        </header>





        <div
          className="
            grid
            gap-8
            xl:grid-cols-[280px_1fr_600px]
          "
        >



          <BuilderSidebar

            step={step}

            setStep={setStep}

          />






          <BuilderEditor


            step={step}

            nextStep={nextStep}

            prevStep={prevStep}

            saveCV={saveCV}


            personalInfo={personalInfo}

            setPersonalInfo={setPersonalInfo}


            about={about}

            setAbout={setAbout}


            skills={skills}

            setSkills={setSkills}


            experiences={experiences}

            setExperiences={setExperiences}


            educations={educations}

            setEducations={setEducations}


            projects={projects}

            setProjects={setProjects}


            languages={languages}

            setLanguages={setLanguages}


            certificates={certificates}

            setCertificates={setCertificates}


            interests={interests}

            setInterests={setInterests}


            photo={photo}

            setPhoto={setPhoto}


          />








          <div
            className="
              space-y-6
            "
          >



           <div
  className="
    space-y-6
  "
>

  <BuilderProfileCard
    photo={photo}
    personalInfo={personalInfo}
  />

<BuilderLivePreview

  personalInfo={personalInfo}

  about={about}

  skills={skills}

  experiences={experiences}

  educations={educations}

  projects={projects}

  languages={languages}

  certificates={certificates}

  interests={interests}

  photo={photo}

  settings={settings}

/>
  
</div>
      </div>




        </div>



      </div>



    </div>


  );


}