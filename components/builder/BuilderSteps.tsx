"use client";

import PersonalInfoForm from "@/components/builder/PersonalInfoForm";
import AboutForm from "@/components/builder/AboutForm";
import SkillsForm from "@/components/builder/SkillsForm";
import ExperienceForm from "@/components/builder/ExperienceForm";
import EducationForm from "@/components/builder/EducationForm";
import ProjectsForm from "@/components/builder/ProjectsForm";
import LanguagesForm from "@/components/builder/LanguagesForm";
import CertificatesForm from "@/components/builder/CertificatesForm";
import InterestsForm from "@/components/builder/InterestsForm";


type Props = {

  step: number;

  personalInfo: any;

  setPersonalInfo: any;

  about: string;

  setAbout: any;

  skills: string[];

  setSkills: any;

  experiences: any[];

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

};



export default function BuilderSteps({

  step,

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

}: Props) {



  return (


    <>


      {step === 1 && (

        <PersonalInfoForm

          data={personalInfo}

          setData={setPersonalInfo}

        />

      )}





      {step === 2 && (

        <AboutForm

          about={about}

          setAbout={setAbout}

        />

      )}






      {step === 3 && (

        <SkillsForm

          skills={skills}

          setSkills={setSkills}

        />

      )}






      {step === 4 && (

        <ExperienceForm

          experiences={experiences}

          setExperiences={setExperiences}

        />

      )}






      {step === 5 && (

        <EducationForm

          educations={educations}

          setEducations={setEducations}

        />

      )}






      {step === 6 && (

        <ProjectsForm

          projects={projects}

          setProjects={setProjects}

        />

      )}






      {step === 7 && (

        <LanguagesForm

          languages={languages}

          setLanguages={setLanguages}

        />

      )}






      {step === 8 && (

        <CertificatesForm

          certificates={certificates}

          setCertificates={setCertificates}

        />

      )}






      {step === 9 && (

        <InterestsForm

          interests={interests}

          setInterests={setInterests}

        />

      )}



    </>


  );

}