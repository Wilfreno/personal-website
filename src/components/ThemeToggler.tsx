"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import { forwardRef, useEffect, useState } from "react";

const ThemeToggler = forwardRef(function () {
  const [is_dark, setIsDark] = useState(true);
  const { setTheme } = useTheme();
  useEffect(() => {
    if (is_dark) setTheme("dark");
    else setTheme("light");
  }, [is_dark]);

  return (
    <Button variant="ghost" size="sm" onClick={() => setIsDark((prev) => !prev)} className="p-1">
      {!is_dark && <SunIcon className=" h-full w-auto " />}
      {is_dark && <MoonIcon className=" h-full w-auto" />}
    </Button>
  );
});

export default ThemeToggler;
