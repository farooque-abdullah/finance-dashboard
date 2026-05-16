// src/components/Sidebar.jsx
export function Sidebar({ activePage, onNav }) {
  const navItems = [
    { id: "overview", icon: "📊", label: "Overview" },
    { id: "transactions", icon: "💳", label: "Transactions" },
    { id: "analytics", icon: "📈", label: "Analytics" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">💰 Finlytics</div>
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`nav-item ${activePage === item.id ? "active" : ""}`}
          onClick={() => onNav(item.id)}
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </button>
      ))}
    </aside>
  );
}

export default Sidebar;
