"use client";
import React, { useState } from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { supabase } from "@/lib/supabase";
import { SignUp } from "@clerk/nextjs";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { useUser } from "@clerk/clerk-react";

export default function SignupFormDemo() {
  const { isSignedIn, user, isLoaded } = useUser();

  const [data, setData] = useState({
    username: "",
    nickname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if password and confirm password match
    if (data.password !== data.confirmpassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // Insert data into Supabase database
      const { data: insertedData, error } = await supabase
        .from("users")
        .insert([
          {
            username: data.username,
            nickname: data.nickname,
            email: data.email,
            password: data.password, // Note: Storing password in plaintext is not recommended in production
          },
        ]);

      if (insertedData) {
        console.log("Data inserted successfully:", insertedData);
        // Redirect the user to the profile page
      } else if (error) {
        console.error("Error inserting data:", error.message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  if (!isLoaded) {
    // Handle loading state however you like
    return <div>loading</div>;
  }
  if (isSignedIn) {
    redirect("/task");
  }
  return (
    <div className="overflow-hidden bg-neutral-950 w-full">
      <BackgroundBeams />
      <div className="overflow-hidden bg-neutral-950 w-full">
        <MacbookScroll
          title={
            <span className="text-zinc-200">
              Let us know about you <br /> The respectful citizen of the world
            </span>
          }
          src={`/logo.png`}
          showGradient={true}
        />
      </div>
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl my-2 p-4 md:p-8 shadow-input bg-[#20202651]">
        <h2 className="font-bold text-xl text-neutral-200 dark:text-neutral-200 text-center">
          Welcome to NEVERMORE
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          We need to know more about you so that we can create the customized
          goal for you.
        </p>
        <SignUp />
        <BottomGradient />
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
