// Utility helper functions

// ANSI color codes
const colors = {
  reset: "\x1b[0m",
  info: "\x1b[36m",
  warn: "\x1b[33m",
  error: "\x1b[31m",
  debug: "\x1b[35m",
  header: "\x1b[32m",
};

// Log level priority
const levelPriority = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
};

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

// Apply color to text
function colorize(text, level) {
  const color = colors[level] || colors.reset;
  return `${color}${text}${colors.reset}`;
}

// Check if level should be logged
function shouldLog(level, activeLevel) {
  return levelPriority[level] <= levelPriority[activeLevel];
}

module.exports = {
  getTimestamp,
  capitalize,
  repeat,
  separator,
  colorize,
  shouldLog,
  colors,
  levelPriority,
};
