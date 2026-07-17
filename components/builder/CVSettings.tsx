"use client";


type Props = {
  settings: {
    template: string;
    themeColor: string;
    font: string;
  };

  setSettings: React.Dispatch<
    React.SetStateAction<{
      template: string;
      themeColor: string;
      font: string;
    }>
  >;
};



export default function CVSettings({
  settings,
  setSettings,
}: Props) {


  return (

    <div className="rounded-xl border bg-white p-6 shadow">


      <h2 className="mb-6 text-xl font-bold">
        CV Design Settings
      </h2>



      <div className="space-y-6">



        {/* TEMPLATE */}


        <div>


          <label className="mb-3 block font-medium">
            Template
          </label>



          <div className="grid grid-cols-3 gap-3">



            {[
              "modern",
              "minimal",
              "creative",
            ].map((template)=>(


              <button

                key={template}

                onClick={()=>


                  setSettings({

                    ...settings,

                    template,

                  })


                }


                className={`
                  rounded-lg
                  border
                  p-4
                  capitalize
                  transition

                  ${
                    settings.template === template
                    ? "border-blue-600 bg-blue-50"
                    : "hover:bg-gray-50"
                  }

                `}

              >

                {template}


              </button>


            ))}


          </div>


        </div>







        {/* COLORS */}



        <div>


          <label className="mb-3 block font-medium">
            Theme Color
          </label>



          <div className="flex flex-wrap gap-4">



            {[
              {
                name:"blue",
                class:"bg-blue-500",
              },

              {
                name:"green",
                class:"bg-green-500",
              },

              {
                name:"purple",
                class:"bg-purple-500",
              },

              {
                name:"red",
                class:"bg-red-500",
              },

              {
                name:"orange",
                class:"bg-orange-500",
              },

              {
                name:"pink",
                class:"bg-pink-500",
              },

              {
                name:"black",
                class:"bg-black",
              },

              {
                name:"gray",
                class:"bg-gray-500",
              },

            ].map((color)=>(


              <button

                key={color.name}


                onClick={()=>


                  setSettings({

                    ...settings,

                    themeColor:color.name,

                  })


                }



                className={`
                  h-10
                  w-10
                  rounded-full
                  ${color.class}

                  ${
                    settings.themeColor === color.name
                    ? "ring-4 ring-blue-300 scale-110"
                    : ""
                  }

                `}


                title={color.name}

              />

            ))}



          </div>


        </div>








        {/* FONT */}



        <div>


          <label className="mb-3 block font-medium">
            Font
          </label>



          <select

            value={settings.font}


            onChange={(e)=>

              setSettings({

                ...settings,

                font:e.target.value,

              })

            }



            className="w-full rounded-lg border p-2"

          >


            <option value="inter">
              Inter
            </option>


            <option value="roboto">
              Roboto
            </option>


            <option value="poppins">
              Poppins
            </option>


          </select>



        </div>




      </div>


    </div>

  );

}