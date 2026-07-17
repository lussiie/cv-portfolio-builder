export default function CVProjects({ cv }: { cv: any }) {


  return (

    <section className="mb-10">


      <h2 className="mb-5 border-b-2 border-slate-900 pb-2 text-2xl font-bold text-slate-900">
        Projects
      </h2>



      <div className="space-y-5">


        {cv.projects?.map((project:any)=>(


          <div key={project.id}>


            <h3 className="text-lg font-bold text-slate-900">
              {project.name}
            </h3>


            <p className="mt-2 text-gray-600">
              {project.description}
            </p>



            {project.githubUrl && (

              <a

                href={project.githubUrl}

                target="_blank"

                className="mt-2 inline-block text-blue-600 hover:underline"

              >
                Project Link
              </a>

            )}



          </div>


        ))}


      </div>


    </section>

  );

}