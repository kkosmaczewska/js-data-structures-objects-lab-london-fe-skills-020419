// Write your solution in this file!
const driver =
{ driver: "driver" };
function updateDriverWithKeyAndValue(driver, name, address) {
  const newDriver = {...driver }
  newDriver[name] = address;
  return newDriver;
}
function destructivelyUpdateDriverWithKeyAndValue(driver, name, address) {
  driver[name] = address;
  return driver;
}
/*
function deleteFromDriverByKey(driver, name) {
  let newdriver = Object.assign({}obj,);
  delete newDriver.driver;
}
function destructivelyDeleteFromDriverByKey(driver, name) {
  let newDriver = deleteFromDriverByKey(driver, name)
}
*/