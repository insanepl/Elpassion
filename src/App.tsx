import Navbar from "./components/Navbar/Navbar";
import SearchResults from "./components/SearchResults/SearchResults";
import ResultsProvider from "./context/ResultsProvider";

function App() {
  return (
    <ResultsProvider>
      <header>
        <Navbar />
      </header>
      <main>
        <SearchResults />
      </main>
    </ResultsProvider>
  );
}

export default App;
