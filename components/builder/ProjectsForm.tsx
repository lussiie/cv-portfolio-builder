"use client";

import { useState } from "react";


type Project = {
  name: string;
  description: string;
  githubUrl: string;
  demoUrl: string;
};


type Props = {
  projects: Project[];
  setProjects: React.Dispatch<
    React.SetStateAction<Project[]>
  >;
};



export default function ProjectsForm({
  projects,
  setProjects,
}: Props) {


  const [project, setProject] = useState<Project>({
    name: "",
    description: "",
    githubUrl: "",
    demoUrl: "",
  });



  function addProject() {

    if (!project.name) {
      return;
    }


    setProjects([
      ...projects,
      project,
    ]);


    setProject({
      name: "",
      description: "",
      githubUrl: "",
      demoUrl: "",
    });

  }




  function removeProject(index:number) {

    setProjects(
      projects.filter((_,i)=>i !== index)
    );

  }




  return (
    <div className="space-y-5">


      <h2 className="text-2xl font-bold">
        Projects
      </h2>



      <input
        className="w-full rounded border p-3"
        placeholder="Project name"
        value={project.name}
        onChange={(e)=>
          setProject({
            ...project,
            name:e.target.value
          })
        }
      />



      <textarea
        className="w-full rounded border p-3"
        placeholder="Project description"
        value={project.description}
        onChange={(e)=>
          setProject({
            ...project,
            description:e.target.value
          })
        }
      />



      <input
        className="w-full rounded border p-3"
        placeholder="Github URL"
        value={project.githubUrl}
        onChange={(e)=>
          setProject({
            ...project,
            githubUrl:e.target.value
          })
        }
      />



      <input
        className="w-full rounded border p-3"
        placeholder="Demo URL"
        value={project.demoUrl}
        onChange={(e)=>
          setProject({
            ...project,
            demoUrl:e.target.value
          })
        }
      />



      <button
        type="button"
        onClick={addProject}
        className="rounded bg-green-600 px-5 py-2 text-white"
      >
        Add Project
      </button>




      <div className="space-y-3">

        {projects.map((item,index)=>(

          <div
            key={index}
            className="rounded border p-4"
          >


            <div className="flex justify-between">

              <h3 className="font-bold">
                {item.name}
              </h3>


              <button
                type="button"
                onClick={()=>removeProject(index)}
                className="text-red-600"
              >
                Delete
              </button>


            </div>


            <p>
              {item.description}
            </p>


          </div>

        ))}

      </div>


    </div>
  );
}