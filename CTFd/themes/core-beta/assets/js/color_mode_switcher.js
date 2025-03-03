"use strict";

/**
 * Get user preferred theme (forced to dark)
 * @returns {String} Always "dark"
 */
function getPreferredTheme() {
  return "dark"; // Force dark mode
}

/**
 * Update navbar icon to match given theme.
 * @param {String} theme - 'dark' or 'light'
 */
function showActiveTheme(theme) {
  // Remove or do nothing since we are forcing dark mode
}

// Change body theme early to prevent flash
document.documentElement.setAttribute("data-bs-theme", "dark");

// Remove event listener for browser color scheme changes
window.addEventListener("load", () => {
  // Remove theme switch buttons
  document.querySelectorAll(".theme-switch").forEach(e => e.remove());
});

