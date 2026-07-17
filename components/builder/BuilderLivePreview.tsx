"use client";

import CVPreview from "@/components/cv/CVPreview";


type Props = {
  personalInfo:any;
  about:string;
  skills:any[];
  experiences:any[];
  educations:any[];
  projects:any[];
  languages:any[];
  certificates:any[];
  interests:any[];
  photo:string;
  settings:any;
};



export default function BuilderLivePreview({

 personalInfo,
 about,
 skills,
 experiences,
 educations,
 projects,
 languages,
 certificates,
 interests,
 photo,
 settings,

}:Props){


const cv = {


  profile:{
    ...personalInfo,
    photo,
  },


  summary:about,


  skills,

  experiences,

  educations,

  projects,

  languages,

  certificates,

  interests,


  template:settings.template,

  themeColor:settings.themeColor,

  font:settings.font,


};



console.log("PREVIEW CV:",cv);



return (

<div
className="
rounded-[32px]
bg-white
p-6
shadow-xl
border
overflow-hidden
"
>


<h2 className="text-xl font-bold">
Live Preview
</h2>


<p className="text-sm text-slate-500 mt-1">
Your CV updates instantly
</p>



<div
className="
mt-6
rounded-3xl
bg-slate-100
p-4
overflow-x-auto
"
>


<CVPreview cv={cv}/>


</div>



</div>


);


}