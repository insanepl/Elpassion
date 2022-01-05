import Navbar from "../components/Navbar/Navbar";
import SearchResults from "../components/SearchResults/SearchResults";

const ResultsList: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <SearchResults />
      </main>
    </>
  );
};

export default ResultsList;
