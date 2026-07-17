import { prisma } from "@/lib/prisma";


type Props = {
  params: Promise<{
    username: string;
  }>;
};


export default async function PortfolioPage({ params }: Props) {


  const { username } = await params;



  const user = await prisma.user.findFirst({

    where: {
      username:{
        equals: username,
        mode:"insensitive",
      },
    },


    include:{
      cvs:{
        include:{
          profile:true,
          skills:true,
          experiences:true,
          educations:true,
          projects:true,
          languages:true,
          certificates:true,
          interests:true,
        },
      },
    },

  });




  if(!user){

    return (

      <div className="p-10">

        <h1 className="text-3xl font-bold">
          User Not Found
        </h1>

      </div>

    );

  }





  const cv = user.cvs[0];





  if(!cv){

    return (

      <div className="p-10">

        <h1 className="text-3xl font-bold">
          CV Not Found
        </h1>

      </div>

    );

  }





  return (

    <main className="mx-auto max-w-5xl p-10">


      <section className="flex items-center gap-6">


        {cv.profile?.photo && (

          <img
            src={cv.profile.photo}
            alt="profile"
            className="h-32 w-32 rounded-full object-cover"
          />

        )}



        <div>


          <h1 className="text-5xl font-bold">

            {cv.profile?.fullName || "Your Name"}

          </h1>



          <p className="text-xl text-gray-600">

            {cv.profile?.jobTitle}

          </p>



          <p>
            {cv.profile?.email}
          </p>


          <p>
            {cv.profile?.location}
          </p>


        </div>


      </section>






      <section className="mt-10">


        <h2 className="text-2xl font-bold">
          About
        </h2>


        <p className="mt-3">

          {cv.summary || "No information"}

        </p>


      </section>






      <section className="mt-10">

        <h2 className="text-2xl font-bold">
          Skills
        </h2>


        <div className="flex flex-wrap gap-3 mt-4">


          {
            cv.skills.map(skill=>(

              <span
                key={skill.id}
                className="rounded-full bg-gray-200 px-4 py-2"
              >

                {skill.name}

              </span>

            ))
          }


        </div>


      </section>






      <section className="mt-10">

        <h2 className="text-2xl font-bold">
          Experience
        </h2>



        {
          cv.experiences.map(exp=>(

            <div
              key={exp.id}
              className="mt-4 rounded-lg border p-4"
            >

              <h3 className="font-bold">

                {exp.position}

              </h3>


              <p>
                {exp.company}
              </p>


              <p>
                {exp.description}
              </p>


              <p>

                {new Date(exp.startDate).toLocaleDateString()}
                {" - "}
                {
                  exp.endDate
                  ?
                  new Date(exp.endDate).toLocaleDateString()
                  :
                  "Present"
                }

              </p>


            </div>

          ))
        }


      </section>






      <section className="mt-10">

        <h2 className="text-2xl font-bold">
          Education
        </h2>


        {
          cv.educations.map(edu=>(

            <div
              key={edu.id}
              className="mt-4 border p-4 rounded"
            >

              <h3 className="font-bold">
                {edu.school}
              </h3>


              <p>
                {edu.degree}
              </p>


              <p>
                {edu.startYear} - {edu.endYear || "Present"}
              </p>


            </div>

          ))
        }


      </section>







      <section className="mt-10">


        <h2 className="text-2xl font-bold">
          Projects
        </h2>


        {
          cv.projects.map(project=>(

            <div
              key={project.id}
              className="mt-4 border p-4 rounded"
            >

              <h3 className="font-bold">

                {project.name}

              </h3>


              <p>
                {project.description}
              </p>


            </div>

          ))
        }


      </section>



    </main>

  );

}