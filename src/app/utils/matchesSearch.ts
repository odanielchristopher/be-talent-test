export function matchesSearch({
  term,
  name,
  phone,
  job,
}: {
  term: string;
  name?: string;
  phone?: string;
  job?: string;
}) {
  if (!term.trim()) return true;

  return (
    name?.toLowerCase().includes(term.toLowerCase()) ||
    phone?.toLowerCase().includes(term.toLowerCase()) ||
    job?.toLocaleLowerCase().includes(term.toLowerCase())
  );
}
