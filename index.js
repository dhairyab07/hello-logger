// Main entry point
const { createLogger } = require("./logger");
const utils = require("./utils");

// Initialize logger
const logger = createLogger("MyApp");

// Main application function
function main() {
  // Print welcome header
  logger.printHeader();
  logger.newLine();

  // Hello World demonstration
  logger.info("Hello, World!");
  logger.newLine();

  // Demonstrate all log levels
  logger.info("This is an info message");
  logger.warn("This is a warning message");
  logger.error("This is an error message");
  logger.debug("This is a debug message");
  logger.newLine();

  // Log sample object
  const sampleData = {
    greeting: "Hello World",
    type: "demonstration",
    features: ["logging", "formatting", "modular design"],
  };

  logger.logObject("Sample Data:", sampleData);
  logger.newLine();

  // Final message
  logger.info("Console Logger demonstration complete!");
  console.log(utils.separator(50));
}

// Run application
main();
