/* eslint-disable no-unused-vars */

// reference-error specs
// `france` is a variable in the global scope
// vacationSpots is a function that returns the destination with the most characters

const france = 'france';

const vacationSpots = (spot1, spot2) => {
  if (spot1.length > spot2.length) {
    return spot1;
  }
  return spot2;
};
vacationSpots('Italy', 'Iceland');
