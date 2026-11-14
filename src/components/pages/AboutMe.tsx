"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function AboutMe() {
  const [width, setWidth] = useState<number>();
  useEffect(() => {
    setWidth(window.innerWidth);
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="me" className="h-[100dvh] w-screen snap-center grid grid-rows-[auto_1fr]">
      <h2 className="justify-self-center mt-10 text-xl">About me</h2>

      <div className="flex flex-col sm:flex-row justify-evenly items-center">
        <div>
          <Image
            src="https://avatars.githubusercontent.com/u/48620014?s=400&u=26f2d161c5120f10b60552efff0ec5bf8218fa03&v=4"
            alt="Wilfreno Gayongan"
            width={500}
            className="aspect-square h-auto w-[50vw] sm:w-[20vw] rounded-full"
            height={500}
            priority
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, x: -50, transition: { duration: 0.3 } }}
          className="prose text-primary"
        >
          <p>
            I am a FULL STACK WEB DEVELOPER with nearly 2 YEARS of PROFESSIONAL EXPERIENCE building a MULTI-TENANT
            platform, where I worked across the whole stack with NEXT.JS on the front end and NESTJS on the back end.
          </p>
          <p>
            Beyond that, I work with REACT, REDUX and TYPESCRIPT on the client side, NODE.JS, MONGO DB, REDIS and
            WEBSOCKETS / SOCKET.IO on the server, and AWS services such as ECS and EC2, with GITHUB ACTIONS for CI/CD
            and automated deployments.
          </p>
          <p>I care about building HIGH QUALITY, ROBUST web applications that meet what clients actually need.</p>
        </motion.div>
      </div>
    </section>
  );
}
