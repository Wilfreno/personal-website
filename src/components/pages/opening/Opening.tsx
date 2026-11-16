"use client";

import ThemeToggler from "@/components/ThemeToggler";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { UserCircle } from "lucide-react";
import Link from "next/link";

export default function Opening() {
  async function handleClick() {
    try {
      const resumeURL = process.env.NEXT_PUBLIC_RESUME_URL;
      if (!resumeURL) throw new Error("NEXT_PUBLIC_RESUME_URL does not exist on .env"); 
      const response = await fetch(resumeURL);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Wilfreno.pdf";
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      throw error;
    }
  }

  return (
    <section id="w" className="w-screen h-[100dvh] max-h-screen snap-center grid place-items-center">
      <div className="flex flex-col relative">
        <div className="absolute top-0 right-0">
          <ThemeToggler />
        </div>
        <span className="text-5xl sm:text-7xl space-y-3">
          <h1>Wilfreno</h1>
          <h1>Gayongan</h1>
          <h2 className="font-bold sm:indent-3 text-3xl text-muted-foreground">Web Developer</h2>
        </span>
        <div className="flex gap-5 my-10">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="https://github.com/Wilfreno" target="_blank">
                  <Button variant="ghost" size="lg" className="p-1">
                    <GitHubLogoIcon className="h-full w-auto" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>Github</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="https://www.linkedin.com/in/wgayongan/" target="_blank">
                  <Button variant="ghost" size="lg" className="p-1">
                    <LinkedInLogoIcon className="h-full w-auto" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="lg" className="p-1" onClick={handleClick}>
                  <UserCircle className="h-full w-auto" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Resume</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Button className="p-1 font-bold">
          <Link href="#contact" className="w-full">
            Contact me
          </Link>
        </Button>
      </div>
    </section>
  );
}
