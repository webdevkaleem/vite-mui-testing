// [1] Imports
import IconMapper from "./components/icon-mapper";

// [2] JSX
function App() {
  return (
    <main className="w-full min-h-dvh flex items-center justify-center flex-col gap-2">
      <h1>Vite - mui - Mapping</h1>

      {/* Icons */}
      <IconMapper iconName="home" />
    </main>
  );
}

export default App;
