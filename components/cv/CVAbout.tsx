export default function CVAbout({ cv }: { cv: any }) {


  const profile = cv?.profile;


  return (

    <section className="mb-10">


      <h2 className="mb-4 border-b-2 border-slate-900 pb-2 text-2xl font-bold text-slate-900">

        About Me

      </h2>



      <p className="leading-7 text-gray-600">

        {profile?.about || cv.summary || "About me"}

      </p>


    </section>

  );

}