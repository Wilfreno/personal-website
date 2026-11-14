"use client";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ThemeToggler from "./ThemeToggler";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Header() {
  const router = useRouter();
  const pages = [
    { name: "About Me", link: "me" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  useEffect(() => {
    if (!window) return;
    window.location.hash.substring(1) && router.push(window.location.hash);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main > section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const hash = "#" + entry.target.id;
          if (window.location.hash !== hash) {

            window.history.replaceState(window.history.state, "", hash);
          }
        }
      },
      { threshold: 0.6 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 w-screen flex py-3 sm:py-0  px-3 sm:px-5 bg-transparent">
      <nav className="hidden w-full sm:inline-flex justify-between items-center">
        <ThemeToggler />
        <div className="flex items-center space-x-5 sm:backdrop-blur-lg py-3 rounded-lg">
          {pages.map((page) => (
            <Link key={page.name} href={"#" + page.link}>
              <Button variant="ghost" key={page.name} type="button" className={cn("font-semibold")}>
                {page.name}
              </Button>
            </Link>
          ))}
        </div>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary" size="icon" className="sm:hidden p-1 ">
            <Menu className="h-full w-auto" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="space-y-5 grid py-5">
            <Link href="#w">
              <Button type="button" variant="ghost" className="font-semibold w-full justify-start">
                Top
              </Button>
            </Link>
            {pages.map((page) => (
              <Link key={page.name} href={"#" + page.link}>
                <Button variant="ghost" key={page.name} type="button" className="font-semibold w-full justify-start">
                  {page.name}
                </Button>
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
