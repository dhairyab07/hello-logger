// Message formatting module
const utils = require("./utils");
const config = require("./config");

// Format log message with level and timestamp
function formatMessage(level, message) {
  const parts = [config.prefix];

  if (config.timestamp) {
    parts.push(`[${utils.getTimestamp()}]`);
  }

  parts.push(`[${utils.capitalize(level)}]`);
  parts.push(message);

  const formatted = parts.join(" ");

  if (config.colors) {
    return utils.colorize(formatted, level);
  }

  return formatted;
}

// Format header with app info
function formatHeader() {
  const title = `${config.appName} v${config.version}`;
  const line = utils.separator(title.length + 4);
  const header = `${line}\n  ${title}\n${line}`;

  if (config.colors) {
    return utils.colorize(header, "header");
  }

  return header;
}

// Format object for display
function formatObject(obj) {
  return JSON.stringify(obj, null, 2);
}

module.exports = {
  formatMessage,
  formatHeader,
  formatObject,
};
