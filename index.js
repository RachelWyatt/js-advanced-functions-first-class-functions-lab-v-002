// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  let first_two = []
  first_two.push(drivers[0])
  first_two.push(drivers[1])
  return first_two
}

const returnLastTwoDrivers = function(drivers) {
  let last_two = []
  last_two.push(drivers[2])
  last_two.push(drivers[3])
  return last_two
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
  if (int === 2) {return fareDoubler()}
}

const fareDoubler = function(fare) {
  result = fare * 2;
  return result
}

const fareTripler = function(fare) {
  result = fare * 3;
  return result
}

function fetchSpecifiedFrivers(drivers, function) {
  drivers.function
}

