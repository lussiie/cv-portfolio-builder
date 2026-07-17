"use client";

import { useState } from "react";


type Certificate = {
  name: string;
  issuer: string;
  date: string;
  url: string;
};


type Props = {
  certificates: Certificate[];
  setCertificates: React.Dispatch<
    React.SetStateAction<Certificate[]>
  >;
};



export default function CertificatesForm({
  certificates,
  setCertificates,
}: Props) {


  const [certificate, setCertificate] = useState<Certificate>({
    name: "",
    issuer: "",
    date: "",
    url: "",
  });



  function addCertificate() {

    if (!certificate.name) {
      return;
    }


    setCertificates([
      ...certificates,
      certificate,
    ]);


    setCertificate({
      name: "",
      issuer: "",
      date: "",
      url: "",
    });

  }




  function removeCertificate(index:number) {

    setCertificates(
      certificates.filter((_,i)=>i !== index)
    );

  }




  return (
    <div className="space-y-5">


      <h2 className="text-2xl font-bold">
        Certificates
      </h2>



      <input
        className="w-full rounded border p-3"
        placeholder="Certificate name"
        value={certificate.name}
        onChange={(e)=>
          setCertificate({
            ...certificate,
            name:e.target.value
          })
        }
      />



      <input
        className="w-full rounded border p-3"
        placeholder="Issuer"
        value={certificate.issuer}
        onChange={(e)=>
          setCertificate({
            ...certificate,
            issuer:e.target.value
          })
        }
      />



      <input
        className="w-full rounded border p-3"
        placeholder="Date"
        value={certificate.date}
        onChange={(e)=>
          setCertificate({
            ...certificate,
            date:e.target.value
          })
        }
      />



      <input
        className="w-full rounded border p-3"
        placeholder="Certificate URL"
        value={certificate.url}
        onChange={(e)=>
          setCertificate({
            ...certificate,
            url:e.target.value
          })
        }
      />



      <button
        type="button"
        onClick={addCertificate}
        className="rounded bg-green-600 px-5 py-2 text-white"
      >
        Add Certificate
      </button>




      <div className="space-y-3">

        {certificates.map((item,index)=>(

          <div
            key={index}
            className="flex justify-between rounded border p-4"
          >

            <div>

              <h3 className="font-bold">
                {item.name}
              </h3>

              <p>
                {item.issuer}
              </p>

            </div>


            <button
              type="button"
              onClick={()=>removeCertificate(index)}
              className="text-red-600"
            >
              Delete
            </button>

          </div>

        ))}

      </div>


    </div>
  );
}