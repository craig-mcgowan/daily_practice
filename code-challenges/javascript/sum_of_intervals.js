// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript

function sumIntervals(intervals) {
  console.log(intervals);
  intervals.sort((a, b) => b[1] - a[1]).sort((a, b) => a[0] - b[0]);
  console.log(intervals);
  //if intervals overlap, combine them into one interval
  const resultsArr = intervals.map((interval, i) => {
    //console.log("i ", i)
    if (i === intervals.length - 1 || interval[1] <= intervals[i + 1][0])
      return interval;

    if (interval[1] > intervals[i + 1][1]) {
      intervals[i + 1][1] = interval[1];
    }
    if (interval[1] > intervals[i + 1][0])
      return [interval[0], intervals[i + 1][0]];
  });
  console.log("resultsArr: ", resultsArr);
  return resultsArr.reduce(
    (acc, interval) => acc + (interval[1] - interval[0]),
    0
  );
}