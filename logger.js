// Core logging module
const formatter = require("./formatter");
const config = require("./config");
const utils = require("./utils");

// Logger class with multiple log methods
class Logger {
  constructor(name, level) {
    this.name = name || config.appName;
    this.level = level || config.activeLevel;
  }

  // Set log level
  setLevel(level) {
    this.level = level;
  }

  // Get current level
  getLevel() {
    return this.level;
  }

  // Info level log
  info(message) {
    if (!utils.shouldLog("info", this.level)) return;
    const formatted = formatter.formatMessage("info", message);
    console.log(formatted);
  }

  // Warning level log
  warn(message) {
    if (!utils.shouldLog("warn", this.level)) return;
    const formatted = formatter.formatMessage("warn", message);
    console.warn(formatted);
  }

  // Error level log
  error(message) {
    if (!utils.shouldLog("error", this.level)) return;
    const formatted = formatter.formatMessage("error", message);
    console.error(formatted);
  }

  // Debug level log
  debug(message) {
    if (!utils.shouldLog("debug", this.level)) return;
    const formatted = formatter.formatMessage("debug", message);
    console.debug(formatted);
  }

  // Log object data
  logObject(label, obj) {
    this.info(label);
    console.log(formatter.formatObject(obj));
  }

  // Print header banner
  printHeader() {
    console.log(formatter.formatHeader());
  }

  // Print blank line
  newLine() {
    console.log();
  }
}

// Create default logger instance
function createLogger(name, level) {
  return new Logger(name, level);
}

module.exports = {
  Logger,
  createLogger,
};
