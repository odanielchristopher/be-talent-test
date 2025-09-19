export function beforeThanOrEqual(
  employeeAdmissionDate: Date,
  filterToDate?: Date,
) {
  if (!filterToDate) return true;
  filterToDate.setHours(23, 59, 59, 999);

  return employeeAdmissionDate <= filterToDate;
}
