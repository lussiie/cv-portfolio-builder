"use client";


type Props = {

  photo: string;

  personalInfo: {

    fullName?: string;

    jobTitle?: string;

  };

};



export default function BuilderProfileCard({

  photo,

  personalInfo,

}: Props) {



  return (


    <div
      className="
        rounded-2xl
        bg-white
        p-4
        border
        border-[#E0E6EB]
      "
    >



      <div
        className="
          flex
          items-center
          gap-4
        "
      >




        <div
          className="
            h-14
            w-14
            overflow-hidden
            rounded-full
            bg-[#F3F6F8]
            flex
            items-center
            justify-center
            shrink-0
          "
        >


          {
            photo ? (


              <img

                src={photo}

                alt="profile"

                className="
                  h-full
                  w-full
                  object-cover
                "

              />


            ) : (


              <span
                className="
                  text-xs
                  text-[#5E6C77]
                "
              >
                Photo
              </span>


            )
          }



        </div>





        <div className="min-w-0">


          <h3
            className="
              truncate
              text-base
              font-semibold
              text-[#0A2540]
            "
          >

            {
              personalInfo.fullName ||
              "Your Name"
            }

          </h3>




          <p
            className="
              truncate
              text-sm
              text-[#5E6C77]
            "
          >

            {
              personalInfo.jobTitle ||
              "Professional Title"
            }

          </p>



        </div>




      </div>




    </div>


  );


}