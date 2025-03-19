import Image from "next/Image";
import { SiGooglechrome } from "@icons-pack/react-simple-icons";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>

        <div className="relative">
          <div className="absolute inset-0 text-[#000]/5 z-[-1]">
            <svg
              className="absolute text-primary/5 top-1/4 -left-8 w-16 h-16 transform rotate-12"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <polygon points="50,0 100,100 0,100" />
            </svg>
            <svg
              className="absolute top-[10%] right-1/2 w-16 h-16 transform rotate-12"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M50,0 L63,38 L100,38 L69,62 L81,100 L50,76 L19,100 L31,62 L0,38 L37,38 Z" />
            </svg>
            <svg
              className="absolute text-primary/5 top-1/3 right-0 w-20 h-20 transform translate-x-1/3"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <svg
              className="absolute text-primary/5 top-10 left-1/4 w-12 h-12"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <svg
              className="absolute text-primary/5 top-1/2 right-1/3 w-16 h-16 transform -rotate-50"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <polygon points="25,0 50,50 0,50" />
            </svg>
            <svg
              className="absolute text-primary/5 top-12 left-12 w-12 h-12 transform rotate-12"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <rect x="0" y="0" width="100" height="100" />
            </svg>
            <svg
              className="absolute text-primary/5 bottom-24 right-12 w-12 h-12 transform rotate-45"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <polygon points="50,0 100,50 50,100 0,50" />
            </svg>
            <svg
              className="absolute text-primary/5 bottom-1/2 left-[60%] w-16 h-16 transform rotate-45"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <polygon points="50,0 100,100 0,100" />
            </svg>
          </div>
        </div>
        <div className="container mx-auto px-6 z-[10]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16">
            <div className="flex flex-col justify-center items-center lg:items-start">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-center lg:text-left">
                Your Personal AI Prompt Library
              </h1>
              <p className="mt-4 text-lg lg:text-xl text-center lg:text-left">
                A browser extension to save, organize, and reuse your best
                prompts anywhere.
              </p>
              {/* TODO: Determine button based on browser? */}
              <div className="mt-6 flex gap-4">
                {/* TODO: Swap out with button */}
                <a href="" target="_blank">
                  <div className="rounded bg-[#171717] font-bold text-white px-5 py-3 flex items-center shadow-lg hover:shadow-none hover:bg-black">
                    <SiGooglechrome className="mr-2 size-5" />
                    <span>Add to Chrome</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-lg shadow-xl rounded-lg overflow-hidden border border-neutral-200">
                {/* TODO: Swap out with real image */}
                <Image
                  src="placeholder.svg"
                  alt="PromptCache Interface"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Cards */}
      <section className="mt-8 lg:mt-16">
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

      {/* TEMP */}
      <div className="flex-1" />

      <Footer />
    </div>
  );
}
