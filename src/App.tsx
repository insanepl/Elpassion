import { Routes, Route, Navigate } from "react-router-dom";
import ResultsProvider from "./context/ResultsProvider";
import ResultsList from "./pages/ResultsList";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <ResultsProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/resultslist" />} />
        <Route path="/resultslist" element={<ResultsList />} />
        <Route path="/resultslist/user/:userID" element={<UserPage />} />
      </Routes>
    </ResultsProvider>
  );
}

export default App;
