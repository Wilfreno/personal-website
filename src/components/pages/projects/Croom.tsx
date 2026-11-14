"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CodeXml } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Croom() {
  const items = [
    {
      name: "Github Repository",
      link: "https://github.com/Wilfreno/croom",
      icon: <GitHubLogoIcon className="h-full w-auto p-1" />,
    },
    {
      name: "Website",
      link: "https://croom.wilfreno.site/",
      icon: <CodeXml className="h-full w-auto p-1" />,
    },
  ];

  return (
    <CardContent className="space-y-5 text-sm justify-between">
      {/* Live preview: the iframe renders at 2x the box size and is scaled down,
          so the site lays out like a desktop page instead of a cramped mobile one. */}
      <Link
        href="https://croom.wilfreno.site/"
        target="_blank"
        aria-label="Open Croom"
        className="group relative block aspect-video w-full overflow-hidden rounded-lg border shadow-md"
      >
        <iframe
          src="https://croom.wilfreno.site/"
          title="Croom live preview"
          loading="lazy"
          tabIndex={-1}
          className="pointer-events-none absolute left-0 top-0 h-[200%] w-[200%] origin-top-left scale-50 border-none transition-transform duration-300 group-hover:scale-[0.52]"
        />
      </Link>
      <p>
        A <strong>real-time</strong> chat application to connect and chat with your friends and communities
      </p>
      <ul className="list-disc space-y-3 text-xs">
        <li>
          <strong>One-to-one</strong> and <strong>group</strong> conversations with real-time messaging and photos
          using <strong>Socket.IO</strong>
        </li>
        <li>
          <strong>Video calls</strong> relayed through a <strong>mediasoup</strong> SFU
        </li>
        <li>
          Sign in with <strong>email</strong> (verified by a one-time code) or <strong>Google</strong>, with account
          recovery by email
        </li>
        <li>
          Built with <strong>Next.js</strong> and <strong>NestJS</strong> in a <strong>Turborepo</strong> monorepo
        </li>
      </ul>
      <div className="flex justify-evenly">
        <TooltipProvider>
          {items.map((item) => (
            <Tooltip key={item.name}>
              <TooltipTrigger asChild>
                <Link href={item.link} target="_blank">
                  <Button variant="link" size="icon" className="w-fit">
                    {item.icon}
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>{item.name}</TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </CardContent>
  );
}
