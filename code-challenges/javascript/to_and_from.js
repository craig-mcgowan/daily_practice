//https://www.codewars.com/kata/590c3173cd3b99c467000a26

function toAndFrom(a, b, t) {

  console.log(a, b, t);
  console.log(`time: ${t}`);
  const distance = b - a;
  console.log("distance: ", distance);
  console.log(t / distance);
  const trips = Math.floor(Math.abs(t / distance));
  console.log("trips: ", trips);
  console.log(`t%distance ${t % distance}`);
  if (distance < 0) {
    return trips % 2 === 0 ? a - (t % distance) : b + (t % distance);
  }
  return trips % 2 === 0 ? a + (t % distance) : b - (t % distance);
}