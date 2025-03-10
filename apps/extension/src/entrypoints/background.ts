export default defineBackground(() => {
  chrome.commands.onCommand.addListener((command) => {
    // Handle Pop-up Shortcut
    if (command === "open-popup") {
      chrome.action.openPopup().catch((err) => {
        console.error("Failed to open popup:", err);
      });
    }
  });
});
