import CVHeader from "./CVHeader";
import CVSidebar from "./CVSidebar";
import CVAbout from "./CVAbout";
import CVExperience from "./CVExperience";
import CVEducation from "./CVEducation";
import CVProjects from "./CVProjects";
import CVCertificates from "./CVCertificates";


type Props = {
  cv:any;
};



export default function CVPreview({cv}:Props){


  console.log("PREVIEW RECEIVED:", cv);


  return (

    <div
      id="cv-preview"
      className="
      mx-auto
      w-full
      overflow-hidden
      rounded-xl
      bg-white
      shadow-xl
      "
    >


      <CVHeader cv={cv}/>



      <div className="grid md:grid-cols-3">


        <main
          className="
          p-10
          md:col-span-2
          "
        >


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