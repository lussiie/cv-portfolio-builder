export default function CVCertificates({ cv }: { cv: any }) {


  return (

    <section className="mb-10">


      <h2 className="mb-5 border-b-2 border-slate-900 pb-2 text-2xl font-bold text-slate-900">
        Certificates
      </h2>



      <div className="space-y-4">


        {cv.certificates?.map((cert:any)=>(


          <div key={cert.id}>


            <h3 className="font-bold text-slate-900">
              {cert.name}
            </h3>


            <p className="text-gray-500">
              {cert.issuer}
            </p>


          </div>


        ))}


      </div>


    </section>

  );

}