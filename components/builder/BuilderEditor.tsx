"use client";

import PhotoUpload from "@/components/builder/PhotoUpload";
import BuilderSteps from "@/components/builder/BuilderSteps";
import BuilderNavigation from "@/components/builder/BuilderNavigation";
import { Experience } from "@/types/cv";


type Props = {

  step: number;

  nextStep: () => void;

  prevStep: () => void;

  saveCV: () => void;


  personalInfo: any;
  setPersonalInfo: any;


  about: string;
  setAbout: any;


  skills: string[];
  setSkills: any;


  experiences: Experience[];
  setExperiences: any;


  educations: any[];
  setEducations: any;


  projects: any[];
  setProjects: any;


  languages: any[];
  setLanguages: any;


  certificates: any[];
  setCertificates: any;


  interests: string[];
  setInterests: any;


  photo: string;
  setPhoto: any;

};



export default function BuilderEditor({

  step,

  nextStep,

  prevStep,

  saveCV,


  personalInfo,

  setPersonalInfo,


  about,

  setAbout,


  skills,

  setSkills,


  experiences,

  setExperiences,


  educations,

  setEducations,


  projects,

  setProjects,


  languages,

  setLanguages,


  certificates,

  setCertificates,


  interests,

  setInterests,


  photo,

  setPhoto,


}: Props) {



  return (


    <main>


      <div
        className="
          rounded-[32px]
          bg-white
          p-8
          shadow-xl
          border
        "
      >



        <div
          className="
            mb-8
            flex
            items-center
            justify-between
          "
        >


          <div>


            <p
              className="
                text-sm
                font-semibold
                text-blue-600
              "
            >

              Step {step} / 9

            </p>



            <h2
              className="
                mt-2
                text-3xl
                font-bold
                text-slate-900
              "
            >

              Build your resume

            </h2>


          </div>



          <div
            className="
              rounded-2xl
              bg-blue-50
              px-5
              py-3
              font-semibold
              text-blue-700
            "
          >

            Live Editing

          </div>



        </div>





        <div
          className="
            mb-8
            rounded-3xl
            bg-slate-50
            p-6
          "
        >


          <h3
            className="
              mb-5
              text-xl
              font-bold
            "
          >

            Profile Photo

          </h3>



          <PhotoUpload

            photo={photo}

            setPhoto={setPhoto}

          />


        </div>







        <BuilderSteps


          step={step}


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


        />







        <div
          className="
            mt-8
            border-t
            pt-6
          "
        >


          <BuilderNavigation


            step={step}


            nextStep={nextStep}


            prevStep={prevStep}


            saveCV={saveCV}


          />


        </div>





      </div>


    </main>


  );


}