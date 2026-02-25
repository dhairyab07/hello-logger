// Utility helper functions

// Get current timestamp
function getTimestamp() {
  return new Date().toISOString();
}

// Capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Repeat a character n times
function repeat(char, times) {
  return char.repeat(times);
}

// Generate separator line
function separator(length) {
  return repeat("-", length);
}

module.exports = {
  getTimestamp,
  capitalize,
  repeat,
  separator,
};
