import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET!;


export function generateToken(userId: string) {

  return jwt.sign(
    {
      userId,
    },
    JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

}



export function verifyToken(token: string) {

  return jwt.verify(token, JWT_SECRET);

}



export async function getCurrentUser() {

  const cookieStore = await cookies();


  const token = cookieStore.get("token")?.value;


  if (!token) {

    return null;

  }



  try {


    const decoded = jwt.verify(
      token,
      JWT_SECRET
    ) as {
      userId:string;
    };



    const user = await prisma.user.findUnique({

      where:{
        id: decoded.userId,
      },


      select:{

        id:true,

        name:true,

        username:true,

        email:true,

        cvs:{

          orderBy:{
            createdAt:"desc",
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

        },

      },


    });



    return user;


  } catch(error) {


    return null;


  }

}