import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  outDir: "dist",
  extensionApi: "chrome",
  modules: ["@wxt-dev/module-react"],
  manifest: {
    permissions: ['storage'],
    "commands": {
      "open-popup": {
        suggested_key: {
          default: "Ctrl+Shift+P"
        },
        description: "Open Ext Popup"
      }
    }
  }
});
