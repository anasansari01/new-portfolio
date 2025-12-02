import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/sections/HeroSection";
import IntroSection from "../components/sections/IntroSection";
import Projects from "../components/sections/Projects";
import Connect from "../components/sections/Connect";
import { ReactLenis } from "@/lib/lenis";

export default function Page() {
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      <main className="min-h-screen bg-white text-black dark:text-zinc-100 dark:bg-zinc-900">
        <Header />

        {/* HERO SECTION*/}
        <section className="min-h-screen flex items-center justify-center">
          <div className="w-full">
            <HeroSection />
          </div>
        </section>

        {/* INTRO SECTION */}
        <section className="relative py-0">
          <IntroSection />
        </section>

        {/* PROJECTS SECTION */}
        <section className="relative py-20 md:py-32">
          <div className="container mx-auto px-4">
            <Projects />
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="relative py-20 md:py-32 bg-white dark:bg-zinc-900">
          <div className="container mx-auto px-4">
            <Connect />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-zinc-200 dark:border-zinc-800 text-center py-10">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} <span className="font-semibold">Anas Ansari.</span> All rights reserved.
          </p>
        </footer>
      </main>
    </ReactLenis>
  );
}