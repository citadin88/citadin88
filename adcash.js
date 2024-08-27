(function checkAndRefresh() {
  // Check if the current URL contains 'https://www.ebesucher.com/c/'
  if (window.location.href.includes("https://www.ebesucher.com/c/")) {
    // Wait for 30 seconds (30000 milliseconds)
    setTimeout(() => {
      // Reload the page
      window.location.reload();
    }, 30000);
  }
  // Repeat the process
  setTimeout(checkAndRefresh, 1000); // Check again every 1 second
})();
