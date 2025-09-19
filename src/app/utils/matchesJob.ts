export function matchesJob(employeeJob: string, filterJob?: string) {
  if (!filterJob) return true;
  return employeeJob.toLowerCase() === filterJob.toLowerCase();
}
