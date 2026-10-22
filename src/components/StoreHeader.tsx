import type { Status } from "../personalizer/usePersonalizer";
import { AxiomMark } from "./AxiomMark";

interface StoreHeaderProps {
  downloadProgress: number;
  status: Status;
}

function statusLabel(status: Status, downloadProgress: number) {
  switch (status) {
    case "loading":
      return `Downloading model ${Math.round(downloadProgress)}%`;
    case "thinking":
      return "Reading preference";
    case "error":
      return "Model failed to load. Reload to retry.";
    case "ready":
      return "Model online";
  }
}

export function StoreHeader({ downloadProgress, status }: StoreHeaderProps) {
  return (
    <header className="store-header">
      <a className="wordmark" href="/">
        <AxiomMark />
        <span>Axiom</span>
      </a>
      <div className="hud-status" role="status" data-status={status}>
        <span className="hud-dot" aria-hidden="true" />
        <span>{statusLabel(status, downloadProgress)}</span>
        {status === "loading" && (
          <span className="hud-meter" aria-hidden="true">
            <span style={{ transform: `scaleX(${downloadProgress / 100})` }} />
          </span>
        )}
      </div>
    </header>
  );
}
