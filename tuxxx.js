// Function to find and click the target element
function findAndClickReloadButton() {
  console.log("Scanning for the reload button...");

  const element =
    document.querySelector('body > div > main > div.reload') ||
    document.querySelector('.reload');

  if (element) {
    console.log("Element found. Attempting to click...");

    try {
      // Try clicking the element
      element.click();
      console.log("Click action executed.");

      // Dispatch a manual click event as fallback
      const clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      });

      element.dispatchEvent(clickEvent);
      console.log("Manual click event dispatched.");

      // Stop scanning after the element is clicked
      clearInterval(scanInterval);
      console.log("Scanning stopped. Element clicked successfully.");
    } catch (error) {
      console.error("Error clicking the element:", error);
    }
  }
}

// Set an interval to continuously scan for the element every 1 second
const scanInterval = setInterval(findAndClickReloadButton, 5000);
