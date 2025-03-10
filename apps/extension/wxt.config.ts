import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  outDir: "dist",
  extensionApi: "chrome",
  modules: ["@wxt-dev/module-react", "@wxt-dev/auto-icons"],
  manifest: {
    name: "PromptCache: Your Personal AI Prompt Library",
    description:
      "Save, organize, and reuse your prompts across all web apps. Your prompt library, stored in browser, always available.",
    permissions: ["storage"],
    commands: {
      "open-popup": {
        suggested_key: {
          default: "Ctrl+Shift+P",
        },
        description: "Open Ext Popup",
      },
    },
  },
});
