import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/utils/password";


export async function POST(request: Request) {

  try {

    const body = await request.json();


    const {
      name,
      username,
      email,
      password
    } = body;



    if (!name || !username || !email || !password) {

      return Response.json(
        {
          message: "All fields are required",
        },
        {
          status: 400,
        }
      );

    }



    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });



    if (existingUser) {

      return Response.json(
        {
          message: "User already exists",
        },
        {
          status: 400,
        }
      );

    }



    const existingUsername = await prisma.user.findUnique({
      where: {
        username,
      },
    });



    if (existingUsername) {

      return Response.json(
        {
          message: "Username already exists",
        },
        {
          status: 400,
        }
      );

    }




    const hashedPassword = await hashPassword(password);



    console.log("Before create");

    console.log({
      name,
      username,
      email,
      password: hashedPassword,
    });





    const user = await prisma.user.create({

      data: {

        name,

        username,

        email,

        password: hashedPassword,

      },

    });




    console.log("After create", user);




    return Response.json(

      {

        message: "User created successfully",

        user: {

          id: user.id,

          name: user.name,

          username: user.username,

          email: user.email,

        },

      },

      {
        status: 201,
      }

    );



  } catch (error) {


    console.error(error);


    return Response.json(

      {
        message: "Something went wrong",
      },

      {
        status:500,
      }

    );

  }

}