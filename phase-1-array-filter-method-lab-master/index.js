function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase(0));
  }
  
  function fuzzyMatch(drivers, string) {
    return drivers.filer(diver => drive.toLowerCase());
  }
  
  function mathName(drivers, string) {
    return drivers.filter(driver => driver.nameToLowerCase() === string.toLowerCase());
  }
  
  module.exports = {
    findMatching,
    fuzzyMatch,
    matchName,
  };
  
  
//pseudocode for the three functions:
  
  function findMatching(drivers, string):
    matchingDrivers = []
    lowercaseString = string.toLowerCase()
    for each driver in drivers:
      lowercaseDriver = driver.toLowerCase()
      if lowercaseDriver is equal to lowercaseString:
        add driver to matchingDrivers
    return matchingDrivers
  function fuzzyMatch(drivers, string):
    matchingDrivers = []
    lowercaseString = string.toLowerCase()
    for each driver in drivers:
      lowercaseDriver = driver.toLowerCase()
      if lowercaseDriver starts with lowercaseString:
        add driver to matchingDrivers
    return matchingDrivers
  function matchName(drivers, string):
    matchingDrivers = []
    lowercaseString = string.toLowerCase()
    for each driver in drivers:
      lowercaseName = driver.name.toLowerCase()
      if lowercaseName is equal to lowercaseString:
        add driver to matchingDrivers
    return matchingDrivers







// Code your solution here
