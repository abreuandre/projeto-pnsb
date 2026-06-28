import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import NewsPage from "./pages/NewsPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import TeamPage from "./pages/TeamPage";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="historia" element={<HistoryPage />} />
          <Route path="noticias" element={<NewsPage />} />
          <Route path="noticias/:slug" element={<NewsDetailPage />} />
          <Route path="equipe" element={<TeamPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
