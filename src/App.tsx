import Navbar from "./components/Navbar/Navbar";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <SearchResults />
      </main>
    </div>
  );
}

export default App;
