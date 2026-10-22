export function AxiomMark() {
  return (
    <svg viewBox="0 0 40 40" className="axiom-mark" aria-hidden="true">
      <path
        className="axiom-mark-shell"
        d="M20 3c9 0 15 6 15 15v6c0 8-6 13-15 13S5 32 5 24v-6C5 9 11 3 20 3z"
      />
      <path
        className="axiom-mark-visor"
        d="M10 18c3-2 6.5-3 10-3s7 1 10 3v3c-3 1.5-6.5 2-10 2s-7-.5-10-2z"
      />
      <circle className="axiom-mark-core" cx="20" cy="19" r="2.4" />
    </svg>
  );
}
