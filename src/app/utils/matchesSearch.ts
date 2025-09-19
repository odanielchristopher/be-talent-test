export function matchesSearch(name: string, term: string) {
  if (!term.trim()) return true;
  return name.toLowerCase().includes(term.toLowerCase());
}
