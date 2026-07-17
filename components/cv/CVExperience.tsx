export default function CVExperience({ cv }: { cv: any }) {


  return (

    <section className="mb-10">


      <h2 className="mb-5 border-b-2 border-slate-900 pb-2 text-2xl font-bold text-slate-900">

        Experience

      </h2>




      <div className="space-y-6">


        {cv.experiences?.map((exp:any)=>(


          <div

            key={exp.id}

            className="relative border-l-2 border-slate-300 pl-6"

          >


            <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-slate-900" />



            <h3 className="text-lg font-bold text-slate-900">

              {exp.position}

            </h3>



            <p className="text-sm text-gray-500">

              {exp.company}

            </p>




            {(exp.startDate || exp.endDate) && (

              <p className="mt-1 text-sm text-gray-400">

                {exp.startDate
                  ? new Date(exp.startDate).toLocaleDateString()
                  : ""
                }

                {" - "}

                {exp.endDate
                  ? new Date(exp.endDate).toLocaleDateString()
                  : "Present"
                }

              </p>

            )}




            <p className="mt-3 leading-6 text-gray-600">

              {exp.description}

            </p>



          </div>


        ))}



      </div>


    </section>

  );

}