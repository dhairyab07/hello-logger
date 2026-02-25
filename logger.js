// Core logging module
const formatter = require("./formatter");
const config = require("./config");

// Logger class with multiple log methods
class Logger {
  constructor(name) {
    this.name = name || config.appName;
  }

  // Info level log
  info(message) {
    const formatted = formatter.formatMessage("info", message);
    console.log(formatted);
  }

  // Warning level log
  warn(message) {
    const formatted = formatter.formatMessage("warn", message);
    console.warn(formatted);
  }

  // Error level log
  error(message) {
    const formatted = formatter.formatMessage("error", message);
    console.error(formatted);
  }

  // Debug level log
  debug(message) {
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
function createLogger(name) {
  return new Logger(name);
}

module.exports = {
  Logger,
  createLogger,
};
