export default function CVEducation({ cv }: { cv: any }) {

  return (

    <section className="mb-10">

      <h2 className="mb-5 border-b-2 border-slate-900 pb-2 text-2xl font-bold text-slate-900">
        Education
      </h2>


      <div className="space-y-5">


        {cv.educations?.map((edu:any)=>(

          <div key={edu.id}>


            <h3 className="text-lg font-bold text-slate-900">
              {edu.degree}
            </h3>


            <p className="text-gray-500">
              {edu.school}
            </p>


            {(edu.startYear || edu.endYear) && (

              <p className="text-sm text-gray-400">
                {edu.startYear} - {edu.endYear || "Present"}
              </p>

            )}


          </div>

        ))}


      </div>


    </section>

  );

}