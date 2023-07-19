function workNeeded(projectMinutes, freelancers) {
  console.log("projectMinutes: " + projectMinutes);
  console.log("freelancers: " + freelancers);
  const totalFreelancerTime = freelancers
    .reduce((acc, freelancer) => acc + freelancer[0] * 60 + freelancer[1],
    0
  )
  console.log(totalFreelancerTime);
}
