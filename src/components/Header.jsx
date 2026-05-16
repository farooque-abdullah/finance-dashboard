export default function Header({ darkMode, onToggleDark }) {
  return (
    <header className="header">
      <h1 className="header-title">Dashboard</h1>
      <button className="toggle-btn" onClick={onToggleDark}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
}
