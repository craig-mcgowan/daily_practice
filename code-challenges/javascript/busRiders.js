var number = function (busStops) {
  // Good Luck!
  return busStops.reduce(
    (acc, currentStop) => acc - currentStop[1] + currentStop[0],
    0
  );
};
