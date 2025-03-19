import Link from "next/link";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { PromptCacheWordmarkPanda } from "./prompt-cache-branding";

export function Header() {
  return (
    <header>
      <div className="container mx-auto p-5">
        <div className="flex items-center justify-between">
          <Link href="/">
            <PromptCacheWordmarkPanda className="h-7" />
          </Link>
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
