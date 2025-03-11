"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
            src="https://avatars.githubusercontent.com/u/48620014?v=4"
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
            i am a FULL STACK WEB DEVELOPER experienced with modern WEB FRAMEWORK and TECHNOLOGIES such as REACT,
            NEXT.JS, REDUX, JAVASCRIPT/TYPESCRIPT for client side development. NODE.JS, MONGO DB, REDIS, WEBSOCKET,
            SOCKET.IO for the server and AWS services such as ECS ,EC2 and experienced on using CI/CD platform such as
            GITHUB ACTIONS to automate deployments.
          </p>
          <p>
            with my expertise i can assure a HIGH QUALITY and ROBUST Web Application that satisfies customer
            expectations!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
