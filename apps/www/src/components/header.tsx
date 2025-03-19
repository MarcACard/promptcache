import Link from "next/link";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { PromptCacheWordmarkPanda } from "./prompt-cache-branding";

export function Header() {
  return (
    <header>
      <div className="container mx-auto p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <PromptCacheWordmarkPanda className="h-7" />
            </Link>
            <span className="ml-2 text-xs font-bold tracking-wider px-2 py-1 rounded-lg bg-linear-to-t from-neutral-200 to-neutral-10 text-neutral-600 shadow-xs inset-shadow-xs">
              BETA
            </span>
          </div>
          <nav className="flex items-center gap-6">
            {/* <Link
              href="/changelog"
              className="text-neutral-600 hover:text-inherit"
            >
              Changelog
            </Link> */}
            <a href="https://github.com/MarcACard/promptcache" target="_blank">
              <SiGithub className="size-7 text-neutral-600 hover:text-inherit" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
