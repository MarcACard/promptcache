<div align="center">
    <img src="./docs/Wordmark-Dark.svg#gh-dark-mode-only" width="600" alt="PromptCache Wordmark">
    <img src="./docs/Wordmark-Light.svg#gh-light-mode-only" width="600" alt="PromptCache Wordmark">
</div>
<div align="center">
  <h3>Your Personal AI Prompt Library 📚</h3>
  <a href="https://www.promptcache.ai?ref=github.com">Website</a> •
  <a href="https://chromewebstore.google.com/detail/promptcache-your-personal/noncjdenienejpdlakheodnglfdcifoe">Chrome Web Store</a>
</div>
<br/>

### What is PromptCache?

PromptCache is a local-first web extension allowing users to save, organize, and quickly reuse prompts with any AI web application.

This is a **monorepo** housing both the extension and the marketing website.

### Project Structure

```
apps/
    extension/  # The browser extension
    www/        # The marketing site
```

### Tech Stack

- **Extension:** WXT, React, Shadcn/UI, TailwindCSS, Github Actions (deployment)
- **Website:** Next.js, Shadcn/UI, TailwindCSS, Deployed on Vercel
- **Monorepo:** PNPM Workspaces

### Getting Started

To run the extension locally for development.

1. Clone this repository

```sh
git clone https://github.com/MarcACard/promptcache.git
cd promptcache
```

2. Install dependencies

```sh
pnpm install
```

3. Start the development build

```sh
# Can be run from project root
# Extension
pnpm dev:extension

# Marketing Site
pnpm dev:www
```

### License

This project is licensed under the MIT License. See [LICENSE](https://github.com/MarcACard/promptcache/blob/main/LICENSE.txt) for details.
