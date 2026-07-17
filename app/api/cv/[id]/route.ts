import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";


export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {


  try {


    const user = await getCurrentUser();



    if (!user) {

      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status:401,
        }
      );

    }



    const { id } = await params;



    const cv = await prisma.cV.findFirst({

      where:{
        id,
        userId:user.id,
      },

    });



    if(!cv){

      return NextResponse.json(
        {
          message:"CV not found",
        },
        {
          status:404,
        }
      );

    }





    await prisma.$transaction([


  prisma.profile.deleteMany({
    where:{
      cvId:cv.id,
    },
  }),


  prisma.skill.deleteMany({
    where:{
      cvId:cv.id,
    },
  }),


  prisma.experience.deleteMany({
    where:{
      cvId:cv.id,
    },
  }),


  prisma.education.deleteMany({
    where:{
      cvId:cv.id,
    },
  }),


  prisma.project.deleteMany({
    where:{
      cvId:cv.id,
    },
  }),


  prisma.language.deleteMany({
    where:{
      cvId:cv.id,
    },
  }),


  prisma.certificate.deleteMany({
    where:{
      cvId:cv.id,
    },
  }),


  prisma.interest.deleteMany({
    where:{
      cvId:cv.id,
    },
  }),



  prisma.cV.delete({

    where:{
      id:cv.id,
    },

  }),


]);

    ;





    return NextResponse.json({

      message:"CV deleted successfully",

    });




  } catch(error:any) {


  console.log("CV SAVE ERROR:", error);


  return NextResponse.json(
    {
      message:error.message,
    },
    {
      status:500,
    }
  );

}
  }

