// [1] Imports
import IconsMapping from "./components/icons-mapping";

// [2] JSX
function App() {
  return (
    <main className="w-full min-h-dvh flex items-center justify-center flex-col gap-2">
      <h1>Vite - mui - Dynamic Imports</h1>

      {/* Icons */}
      <IconsMapping iconName={"Home"} />
    </main>
  );
}

export default App;
