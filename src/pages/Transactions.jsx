import { useState } from "react";

const allTransactions = [
  { id: 1,  name: "Amazon",         category: "Shopping",       date: "Aug 12", amount: -84.99,  icon: "🛒" },
  { id: 2,  name: "Salary",         category: "Income",         date: "Aug 10", amount: 52000,   icon: "💼" },
  { id: 3,  name: "Netflix",        category: "Entertainment",  date: "Aug 9",  amount: -15.99,  icon: "🎬" },
  { id: 4,  name: "Zomato",         category: "Food",           date: "Aug 8",  amount: -450,    icon: "🍕" },
  { id: 5,  name: "Freelance",      category: "Income",         date: "Aug 7",  amount: 1200,    icon: "💻" },
  { id: 6,  name: "Electricity",    category: "Utilities",      date: "Aug 6",  amount: -1800,   icon: "⚡" },
  { id: 7,  name: "Swiggy",         category: "Food",           date: "Aug 5",  amount: -320,    icon: "🍔" },
  { id: 8,  name: "Gym",            category: "Health",         date: "Aug 4",  amount: -999,    icon: "💪" },
  { id: 9,  name: "Dividend",       category: "Income",         date: "Aug 3",  amount: 2400,    icon: "📈" },
  { id: 10, name: "Spotify",        category: "Entertainment",  date: "Aug 2",  amount: -119,    icon: "🎵" },
  { id: 11, name: "Rent",           category: "Housing",        date: "Aug 1",  amount: -12000,  icon: "🏠" },
  { id: 12, name: "Petrol",         category: "Transport",      date: "Jul 31", amount: -2400,   icon: "⛽" },
];

const CATEGORIES = ["All", "Income", "Shopping", "Food", "Entertainment", "Utilities", "Health", "Housing", "Transport"];

export default function Transactions() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = allTransactions.filter((t) => {
    const matchCat = filter === "All" || t.category === filter;
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div>
      <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
        <input
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: 1, minWidth: 200,
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: 10, padding: "10px 14px",
            color: "var(--text)", fontFamily: "inherit", fontSize: 14, outline: "none",
          }}
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: 10, padding: "10px 14px",
            color: "var(--text)", fontFamily: "inherit", fontSize: 14,
          }}
        >
          {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
        </select>
      </div>

      <div className="chart-card">
        <div className="txn-list">
          {filtered.map((txn) => (
            <div key={txn.id} className="txn-row">
              <div className="txn-icon">{txn.icon}</div>
              <div className="txn-info">
                <span className="txn-name">{txn.name}</span>
                <span className="txn-cat">{txn.category} · {txn.date}</span>
              </div>
              <div className="txn-right">
                <span className={`txn-amount ${txn.amount > 0 ? "positive" : "negative"}`}>
                  {txn.amount > 0 ? "+" : ""}₹{Math.abs(txn.amount).toLocaleString()}
                </span>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p style={{ textAlign: "center", color: "var(--text-muted)", padding: 32 }}>No transactions found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
