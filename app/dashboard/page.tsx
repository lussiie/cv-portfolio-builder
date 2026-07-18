import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";
import DeleteCVButton from "@/components/cv/DeleteCVButton";

import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  Clock3,
  FileText,
  Mail,
  Sparkles,
  UserRound,
} from "lucide-react";

import CVPreview from "@/components/cv/CVPreview";
import PrintButton from "@/components/cv/PrintButton";


function getCompletion(cv: any) {
  const sections = [
    !!cv.summary,
    cv.skills?.length > 0,
    cv.experiences?.length > 0,
    cv.educations?.length > 0,
    cv.projects?.length > 0,
    cv.languages?.length > 0,
    cv.certificates?.length > 0,
    cv.interests?.length > 0,
  ];

  const filled = sections.filter(Boolean).length;

  return Math.round((filled / sections.length) * 100);
}


function getRelativeTime(date: Date) {
  const diffMs = Date.now() - new Date(date).getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return "Today";
  if (diffDays === 1) return "1 day ago";
  return `${diffDays} days ago`;
}


export default async function Dashboard() {


  const user = await getCurrentUser();


  if (!user) {
    redirect("/login");
  }




  const cvs = await prisma.cV.findMany({

    where:{
      userId:user.id,
    },

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

    orderBy:{
      createdAt:"desc",
    }

  });





  const displayName =
    user.name ||
    user.email?.split("@")[0] ||
    "there";


  const displayEmail =
    user.email ||
    "No email provided";


  const totalCvs = cvs.length;

  const lastEditedLabel =
    cvs.length > 0
      ? getRelativeTime(cvs[0].createdAt)
      : "—";

  const avgCompletion =
    cvs.length > 0
      ? Math.round(
          cvs.reduce((sum, cv) => sum + getCompletion(cv), 0) / cvs.length
        )
      : 0;





  return (

    <div className="min-h-screen bg-[#F3F6F8] px-4 py-6 sm:px-6 lg:px-8">


      <div className="mx-auto max-w-7xl space-y-6">



        {/* HEADER */}

        <header className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0A2540] to-[#123A5C] p-8 text-white shadow-sm">

          <div className="pointer-events-none absolute -right-4 -top-8 h-32 w-32 rounded-full bg-[#4FA3E3]/10" />
          <div className="pointer-events-none absolute bottom-[-40px] right-36 h-20 w-20 rounded-full bg-[#4FA3E3]/10" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">


            <div>

              <div className="flex items-center gap-2 text-sm font-medium text-[#4FA3E3]">

                <Sparkles className="h-4 w-4"/>

                Premium workspace

              </div>



              <h1 className="mt-4 text-4xl font-bold tracking-tight">

                Dashboard

              </h1>



              <p className="mt-3 text-[#B6C4D1]">

                Welcome {displayName} 👋

              </p>


            </div>





            <Link
              href="/builder"
              className="flex items-center justify-center gap-2 rounded-lg bg-[#0A66C2] px-6 py-3 font-semibold text-white transition hover:bg-[#004182]"
            >

              Create New CV

              <ArrowRight className="h-4 w-4"/>

            </Link>



          </div>


        </header>



        {/* STATS */}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

          <div className="rounded-2xl border border-[#E0E6EB] bg-white p-5">
            <div className="text-xs text-[#5E6C77]">Total CVs</div>
            <div className="mt-1.5 text-2xl font-bold text-[#0A2540]">{totalCvs}</div>
          </div>

          <div className="rounded-2xl border border-[#E0E6EB] bg-white p-5">
            <div className="text-xs text-[#5E6C77]">Last edited</div>
            <div className="mt-1.5 text-2xl font-bold text-[#0A2540]">{lastEditedLabel}</div>
          </div>

          <div className="rounded-2xl border border-[#E0E6EB] bg-white p-5">
            <div className="text-xs text-[#5E6C77]">Avg. completion</div>
            <div className="mt-1.5 text-2xl font-bold text-[#0A66C2]">{avgCompletion}%</div>
          </div>

        </div>




        {/* PROFILE */}


        <section className="rounded-2xl border border-[#E0E6EB] bg-white p-6 shadow-sm">


          <div className="flex items-center gap-4">


            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0A66C2] text-white">

              <UserRound/>

            </div>



            <div>

              <h2 className="text-2xl font-bold text-[#0A2540]">

                {displayName}

              </h2>


              <div className="flex items-center gap-2 text-[#5E6C77]">

                <Mail className="h-4 w-4"/>

                {displayEmail}

              </div>


            </div>


          </div>



        </section>







        {/* CV LIST */}


        <section className="rounded-2xl border border-[#E0E6EB] bg-white p-6 shadow-sm">


          <div className="mb-6 flex items-center justify-between">


            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-[#0A66C2]">

                Your CVs

              </p>


              <h2 className="text-3xl font-bold text-[#0A2540]">

                CV Collection

              </h2>


            </div>



            <Link
              href="/builder"
              className="rounded-lg bg-[#0A66C2] px-5 py-3 font-medium text-white transition hover:bg-[#004182]"
            >

              + New CV

            </Link>


          </div>







          {
            cvs.length === 0 ? (


              <div className="rounded-xl border border-dashed border-[#B6C4D1] bg-[#F3F6F8] p-10 text-center">


                <FileText className="mx-auto h-10 w-10 text-[#0A66C2]"/>


                <h3 className="mt-4 text-xl font-bold text-[#0A2540]">

                  No CV yet

                </h3>


                <p className="mt-2 text-[#5E6C77]">

                  Create your first professional CV

                </p>


              </div>



            ) : (



              <div className="space-y-8">


                {
                  cvs.map((cv)=> {

                    const completion = getCompletion(cv);

                    return (


                    <div
                      key={cv.id}
                      className="overflow-hidden rounded-2xl border border-[#E0E6EB] transition hover:shadow-md"
                    >



                     <div className="mb-0 flex flex-col gap-4 border-b border-[#E0E6EB] bg-[#F8FAFC] p-5 sm:flex-row sm:items-center sm:justify-between">


                        <div>

                          <div className="flex items-center gap-2">

                            <h3 className="text-xl font-bold text-[#0A2540]">

                              {cv.title || "Untitled CV"}

                            </h3>

                            <span
                              className={
                                completion === 100
                                  ? "rounded-full bg-[#DCFCE7] px-2.5 py-0.5 text-xs font-semibold text-[#15803D]"
                                  : "rounded-full bg-[#FEF3C7] px-2.5 py-0.5 text-xs font-semibold text-[#B45309]"
                              }
                            >
                              {completion === 100 ? "Complete" : "Draft"}
                            </span>

                          </div>


                          <p className="mt-1 flex items-center gap-1.5 text-sm text-[#5E6C77]">

                            <Clock3 className="h-3.5 w-3.5"/>
                            Created:
                            {" "}
                            {new Date(cv.createdAt).toLocaleDateString()}

                          </p>


                        </div>



                        <div className="flex items-center gap-2">

  <Link
    href={`/builder?cv=${cv.id}`}
    className="rounded-lg bg-[#0A66C2] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#004182]"
  >
    Edit
  </Link>


  <DeleteCVButton id={cv.id}/>

</div>




                      </div>



                      <div className="px-5 pt-4">

                        <div className="mb-1.5 flex items-center justify-between text-xs text-[#5E6C77]">
                          <span>Profile completion</span>
                          <span>{completion}%</span>
                        </div>

                        <div className="h-1.5 rounded-full bg-[#E6F0FA]">
                          <div
                            className="h-1.5 rounded-full bg-[#0A66C2]"
                            style={{ width: `${completion}%` }}
                          />
                        </div>

                      </div>



                     <div className="flex items-center justify-between px-5 pt-4">
  <span className="text-xs font-semibold uppercase tracking-widest text-[#5E6C77]">
    Preview
  </span>
                        <PrintButton />
</div>



                      <div className="p-5">


                        <CVPreview cv={cv}/>


                      </div>



                    </div>


                    );

                  })
                }



              </div>



            )
          }



        </section>




      </div>



    </div>

  );

}