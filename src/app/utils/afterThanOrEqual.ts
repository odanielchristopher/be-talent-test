export function afterThanOrEqual(
  employeeAdmissionDate: Date,
  filterFromDate?: Date,
) {
  if (!filterFromDate) return true;
  return employeeAdmissionDate >= filterFromDate;
}
