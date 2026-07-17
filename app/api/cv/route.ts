import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function GET() {

  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  const cv = await prisma.cV.findFirst({

    where: {
      userId: user.id,
    },

    include: {
      profile: true,
    },

    orderBy: {
      createdAt: "desc",
    },

  });

  return NextResponse.json(cv);
}

export async function POST(req: Request) {

  try {

    const user = await getCurrentUser();


    if (!user) {

      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );

    }


    const body = await req.json();


    const {
      title,
      summary,
      template,
      themeColor,
      font,
      photo,
      profile,
      skills,
      experiences,
      educations,
      projects,
      languages,
      certificates,
      interests,
    } = body;



    const cv = await prisma.cV.create({

      data: {

        title: title || "Untitled CV",

        summary,

        template: template || "modern",

        themeColor: themeColor || "blue",

        font: font || "inter",


        userId: user.id,



        profile: {

          create: {

            ...profile,

            photo,

          },

        },



        skills: {

          create: skills.map((skill:string)=>({

            name: skill,

          })),

        },



       experiences: {

  create: experiences.map((exp:any)=>({

    company: exp.company,

    position: exp.position,

    description: exp.description,

    startDate: new Date(exp.startDate),

    endDate: exp.endDate
      ? new Date(exp.endDate)
      : null,

  })),

},


        educations: {

          create: educations.map((edu:any)=>({

            ...edu,

            startYear: Number(edu.startYear) || 0,

            endYear: edu.endYear
              ? Number(edu.endYear)
              : null,

          })),

        },



        projects: {

          create: projects,

        },



        languages: {

          create: languages,

        },



        certificates: {

          create: certificates,

        },



        interests: {

          create: interests.map((name:string)=>({

            name,

          })),

        },


      },



      include: {

        profile:true,
        skills:true,
        experiences:true,
        educations:true,
        projects:true,
        languages:true,
        certificates:true,
        interests:true,

      },


    });



    return NextResponse.json(cv);



  } catch(error) {


    console.log(error);



    return NextResponse.json(

      {
        message:"Server error",
      },

      {
        status:500,
      }

    );


  }
  
  

}
export async function DELETE() {

  try {

    const user = await getCurrentUser();


    if (!user) {

      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );

    }



    const cv = await prisma.cV.findFirst({

      where: {
        userId: user.id,
      },

    });



    if (!cv) {

      return NextResponse.json(
        {
          message: "CV not found",
        },
        {
          status: 404,
        }
      );

    }



    await prisma.cV.delete({

      where: {
        id: cv.id,
      },

    });



    return NextResponse.json({

      message: "CV deleted successfully",

    });



  } catch(error) {


    console.log(error);



    return NextResponse.json(

      {
        message:"Server error",
      },

      {
        status:500,
      }

    );


  }

}