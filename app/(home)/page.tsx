"use client"

import { Navbar } from "./components/navbar";
import CarTabs from "./components/tabs";
import { Tooltip } from "@/components/index.ts";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/index.ts";

export default function Home() {
  return (
    <main className="container">
      <Navbar />
      <section className="grid grid-cols-12 gap-4">
        <section className="col-span-9 border">
          <CarTabs data={["all", "new", "used"]} defaultValue="all" />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>В кредит</TooltipTrigger>
              <TooltipContent>
                <p>hello</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </section>
        <section className="col-span-3 border"></section>
      </section>
    </main>
  );
}
