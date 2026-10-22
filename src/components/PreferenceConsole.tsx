import { useState, type ChangeEvent, type KeyboardEvent, type SubmitEvent } from "react";
import type { Category } from "../types";

const MAX_LENGTH = 255;

interface PreferenceConsoleProps {
  categories: Category[];
  busy: boolean;
  modelLoading: boolean;
  onSubmit: (preference: string) => void;
}

export function PreferenceConsole({
  categories,
  busy,
  modelLoading,
  onSubmit,
}: PreferenceConsoleProps) {
  const [preference, setPreference] = useState("");
  const canSubmit = !busy && !modelLoading && preference.trim() !== "";

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPreference(e.target.value);
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (canSubmit) {
      onSubmit(preference);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      e.currentTarget.form?.requestSubmit();
    }
  };

  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="hero-kicker">Adaptive store</p>
        <h1>Tell it what you like. The room rearranges.</h1>
        <p className="hero-lede">
          A model running in your browser reads your sentence and reshapes the shelf below. Nothing
          leaves this page.
        </p>
      </div>

      <div className="console">
        <form className="console-form" onSubmit={handleSubmit} aria-busy={busy}>
          <label className="console-label" htmlFor="preference">
            Your preference
          </label>
          <textarea
            id="preference"
            className="console-input"
            value={preference}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="I like fried chicken while I watch tech news"
            maxLength={MAX_LENGTH}
            rows={3}
            aria-describedby="preference-count"
          />
          <div className="console-actions">
            <span id="preference-count" className="console-count">
              {preference.length}/{MAX_LENGTH}
            </span>
            <button type="submit" className="console-button" disabled={!canSubmit}>
              {busy ? "Reading…" : "Personalize"}
            </button>
          </div>
        </form>

        <p className="console-readout" aria-live="polite">
          {categories.length === 0 ? (
            "Showing the full catalogue. Describe yourself to narrow it."
          ) : (
            <>
              <span>Showing</span>
              {categories.map((category, i) => (
                <span key={category} className="console-rank">
                  {i > 0 && <span className="console-then">then</span>}
                  <span className="block-tag" data-category={category}>
                    {category}
                  </span>
                </span>
              ))}
            </>
          )}
        </p>
      </div>
    </section>
  );
}
