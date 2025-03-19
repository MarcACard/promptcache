import Link from "next/Link";
import { SiGithub, SiGooglechrome } from "@icons-pack/react-simple-icons";

export function Header() {
  return (
    <header className="">
      <div className="container mx-auto p-5">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <div className="inline-flex gap-2 items-center">
                <div className="bg-[#444] size-5 rounded-full" />
                <span className="font-black text-xl">PromptCache</span>
              </div>
            </Link>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href="/changelog"
              className="text-neutral-600 hover:text-inherit"
            >
              Changelog
            </Link>
            <a href="https://github.com/MarcACard/promptcache" target="_blank">
              <SiGithub className="size-6 text-neutral-600 hover:text-inherit" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
