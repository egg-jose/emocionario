import { createRoot } from "react-dom/client";
import EmotionsList from "./components/EmotionsList";
import Header from "./components/Header";
import { useState } from "react";
import SearchParamContext from "./context/SearchParamContext";
import Footer from "./components/Footer";

const App = () => {
  const searchParam = useState("");
  return (
    <>
      <SearchParamContext.Provider value={searchParam}>
        <Header />
        <EmotionsList />
      </SearchParamContext.Provider>
      <Footer />
    </>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
