"use client";

type Props = {
  data: {
    fullName: string;
    jobTitle: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };

  setData: React.Dispatch<
    React.SetStateAction<{
      fullName: string;
      jobTitle: string;
      email: string;
      phone: string;
      location: string;
      linkedin: string;
      github: string;
    }>
  >;
};


export default function PersonalInfoForm({
  data,
  setData,
}: Props) {


  return (
    <div className="space-y-4">

      <h2 className="text-2xl font-bold">
        Personal Information
      </h2>


      <input
        className="w-full rounded border p-3"
        placeholder="Full name"
        value={data.fullName}
        onChange={(e)=>
          setData({
            ...data,
            fullName:e.target.value
          })
        }
      />


      <input
        className="w-full rounded border p-3"
        placeholder="Job title"
        value={data.jobTitle}
        onChange={(e)=>
          setData({
            ...data,
            jobTitle:e.target.value
          })
        }
      />


      <input
        className="w-full rounded border p-3"
        placeholder="Email"
        value={data.email}
        onChange={(e)=>
          setData({
            ...data,
            email:e.target.value
          })
        }
      />


      <input
        className="w-full rounded border p-3"
        placeholder="Phone"
        value={data.phone}
        onChange={(e)=>
          setData({
            ...data,
            phone:e.target.value
          })
        }
      />


      <input
        className="w-full rounded border p-3"
        placeholder="Location"
        value={data.location}
        onChange={(e)=>
          setData({
            ...data,
            location:e.target.value
          })
        }
      />


      <input
        className="w-full rounded border p-3"
        placeholder="LinkedIn"
        value={data.linkedin}
        onChange={(e)=>
          setData({
            ...data,
            linkedin:e.target.value
          })
        }
      />


      <input
        className="w-full rounded border p-3"
        placeholder="Github"
        value={data.github}
        onChange={(e)=>
          setData({
            ...data,
            github:e.target.value
          })
        }
      />

    </div>
  );
}