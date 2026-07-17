import { prisma } from "@/lib/prisma";
import { comparePassword } from "@/utils/password";
import { generateToken } from "@/lib/auth";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, password } = body;


    console.log("LOGIN DATA:", {
      email,
      password,
    });


    if (!email || !password) {
      return Response.json(
        {
          message: "Email and password are required",
        },
        {
          status: 400,
        }
      );
    }



    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });



    console.log("USER FROM DATABASE:", user);



    if (!user) {
      return Response.json(
        {
          message: "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }



    const isPasswordCorrect = await comparePassword(
      password,
      user.password
    );



    console.log(
      "PASSWORD CORRECT:",
      isPasswordCorrect
    );



    if (!isPasswordCorrect) {
      return Response.json(
        {
          message: "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }



    const token = generateToken(user.id);



    const cookieStore = await cookies();



    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 3,
    });



    return Response.json(
      {
        message: "Login successful",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      },
      {
        status: 200,
      }
    );



  } catch (error) {

    console.error("LOGIN ERROR:", error);


    return Response.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );

  }
}