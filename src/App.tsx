import "./index.css";

import { BlockGrid } from "./components/BlockGrid";
import { PreferenceConsole } from "./components/PreferenceConsole";
import { StoreHeader } from "./components/StoreHeader";
import { blocks } from "./data/blocks";
import { selectBlocks } from "./personalizer/selectBlocks";
import { usePersonalizer } from "./personalizer/usePersonalizer";

export function App() {
  const { downloadProgress, status, categories, personalize } = usePersonalizer();

  const handlePreference = (preference: string) => {
    personalize(preference);
  };

  return (
    <div className="store">
      <StoreHeader downloadProgress={downloadProgress} status={status} />
      <main>
        <PreferenceConsole
          categories={categories}
          busy={status === "thinking"}
          modelLoading={status === "loading"}
          onSubmit={handlePreference}
        />
        <BlockGrid blocks={selectBlocks(blocks, categories)} scanKey={categories.join()} />
      </main>
      <footer className="store-footer">Demo store. Products and prices are illustrative.</footer>
    </div>
  );
}

export default App;
