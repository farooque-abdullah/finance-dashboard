import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Overview from "./pages/Overview";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";
import "./styles/global.css";

export default function App() {
  const [activePage, setActivePage] = useState("overview");
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`app-shell ${darkMode ? "dark" : "light"}`}>
      <Sidebar activePage={activePage} onNav={setActivePage} />
      <div className="main-area">
        <Header darkMode={darkMode} onToggleDark={() => setDarkMode((d) => !d)} />
        <div className="page-content">
          {activePage === "overview" && <Overview />}
          {activePage === "transactions" && <Transactions />}
          {activePage === "analytics" && <Analytics />}
        </div>
      </div>
    </div>
  );
}
