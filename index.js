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
  
  function fuzzyMatch(drivers, matchingDrivers) {
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
  
//pseudocode for the three functions:
  
  //function findMatching(drivers, string):
    //matchingDrivers = []
    //lowercaseString = string.toLowerCase()
    //for each driver in drivers:
      //lowercaseDriver = driver.toLowerCase()
      //if lowercaseDriver is equal to lowercaseString:
       //add driver to matchingDrivers
    //return matchingDrivers
  //function fuzzyMatch(drivers, string):
    //matchingDrivers = []
    //lowercaseString = string.toLowerCase()
    //for each driver in drivers:
     // lowercaseDriver = driver.toLowerCase()
      //if lowercaseDriver starts with lowercaseString:
        //add driver to matchingDrivers
    //return matchingDrivers
  //function matchName(drivers, string):
    //matchingDrivers = []
    //lowercaseString = string.toLowerCase()
    //for each driver in drivers:
      //lowercaseName = driver.name.toLowerCase()
      //if lowercaseName is equal to lowercaseString:
       // add driver to matchingDrivers
    //return matchingDrivers








