import { Route, Routes } from "react-router-dom";
import { Index } from "./app/Index";
import { AboutPage } from "./app/AboutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/tentang" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
