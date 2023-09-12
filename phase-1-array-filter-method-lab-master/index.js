function findMatching(drivers, string) {
  let matchingDrivers = [];
  let lowercaseString = string.toLowerCase();
  for (let i = 0; i < drivers.length; i++) {
    let lowercaseDriver = drivers[i].toLowerCase();
    if (lowercaseDriver === lowercaseString) {
      matchingDrivers.push(drivers[i]);
    }
  }
  return matchingDrivers;
}

function fuzzyMatch(drivers, string) {
  let matchingDrivers = [];
  let lowercaseString = string.toLowerCase();
  for (let i = 0; i < drivers.length; i++) {
    let lowercaseDriver = drivers[i].toLowerCase();
    if (lowercaseDriver.startsWith(lowercaseString)) {
      matchingDrivers.push(drivers[i]);
    }
  }
  return matchingDrivers;
}

function matchName(drivers, string) {
  let matchingDrivers = [];
  let lowercaseString = string.toLowerCase();
  for (let i = 0; i < drivers.length; i++) {
    let lowercaseName = drivers[i].name.toLowerCase();
    if (lowercaseName === lowercaseString) {
      matchingDrivers.push(drivers[i]);
    }
  }
  return matchingDrivers;
}

module.exports = {
  findMatching,
  fuzzyMatch,
  matchName,
};

