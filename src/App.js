import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import InboxPage from "./pages/InboxPage";
import SentPage from "./pages/SentPage";
import IndividualInboxEmailPage from "./pages/IndividualInboxEmailPage";
import IndividualSentEmailPage from "./pages/IndividualSentEmailPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/inbox" element={<InboxPage />} />
        <Route path="/inbox/:subject" element={<IndividualInboxEmailPage />} />
        <Route path="/sent" element={<SentPage />} />
        <Route path="/sent/:subject" element={<IndividualSentEmailPage />} />
      </Routes>
    </div>
  );
}

export default App;
