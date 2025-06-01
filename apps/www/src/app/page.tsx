import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BrowserCTA } from "@/components/browser-cta";

import extPopup from "../../public/images/popup-sample.png"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        <section className="container mx-auto px-6 z-[10]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-8 lg:py-16">
            <div className="flex flex-col justify-center items-center lg:items-start">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-center lg:text-left">
                Your Personal AI Prompt Library
              </h1>
              <p className="text-lg lg:text-xl text-center lg:text-left mt-4">
                A browser extension to save, organize, and reuse your best
                prompts anywhere.
              </p>
              <div className="mt-8">
                <BrowserCTA />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-lg shadow-xl rounded-lg overflow-hidden border border-neutral-200">
                <Image
                  src={extPopup}
                  alt="PromptCache Interface"
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="my-8 lg:my-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {[
                {
                  title: "Quick Access",
                  desc: "Pull up your prompts instantly—no more digging around.",
                  icon: "⚡",
                },
                {
                  title: "Local-First",
                  desc: "No sign-up needed; everything stays safe in your browser.",
                  icon: "🔒",
                },
                {
                  title: "Stay Organized",
                  desc: "Group, star, and search prompts with ease - always find what you need.",
                  icon: "📚",
                },
                {
                  title: "Use Anywhere",
                  desc: "Use your personal prompt library on any site or AI platform.",
                  icon: "🌎",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 rounded-lg p-4 flex flex-col gap-1"
                >
                  <div className="text-4xl">{step.icon}</div>
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-neutral-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* TEMP */}
      <div className="flex-1" />

      <Footer />
    </div>
  );
}
