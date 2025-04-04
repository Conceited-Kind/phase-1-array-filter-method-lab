// Function to find matching drivers (case insensitive)
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Function to find drivers whose names start with the given string
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.startsWith(letters));
}

// Function to find drivers whose name matches the given string
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

// Export the functions for testing
module.exports = {
  findMatching,
  fuzzyMatch,
  matchName
};

