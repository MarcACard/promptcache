export function Footer() {
  return (
    <footer className="pb-4">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} PromptCache. All rights reserved.
          </div>
          <div className="text-sm text-neutral-400">
            Made by{" "}
            <a
              href="https://www.marcacard.com/?ref=promptcache.ai"
              target="_blank"
              className="hover:text-foreground"
            >
              Marc Anthony Card
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
