function workNeeded(projectMinutes, freelancers) {
  console.log("projectMinutes: " + projectMinutes);
  console.log("freelancers: " + freelancers);
  const totalFreelancerTime = freelancers
    .reduce((acc, freelancer) => acc + freelancer[0] * 60 + freelancer[1],
    0
  )
  console.log(totalFreelancerTime);

  if (totalFreelancerTime >= projectMinutes) {
    return "Easy Money!"
  }
  
  const deltaMinutes = projectMinutes - totalFreelancerTime

  const hoursNeeded = Math.floor((deltaMinutes)/60)
  const minutesNeeded = deltaMinutes % 60
  return `I need to work ${hoursNeeded} hour(s) and ${minutesNeeded} minute(s)`
}
