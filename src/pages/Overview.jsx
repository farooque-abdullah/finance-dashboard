import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";
import StatCard from "../components/StatCard";

const areaData = [
  { month: "Jan", income: 4200, expenses: 2800 },
  { month: "Feb", income: 5100, expenses: 3200 },
  { month: "Mar", income: 4700, expenses: 2900 },
  { month: "Apr", income: 6200, expenses: 3800 },
  { month: "May", income: 5800, expenses: 3100 },
  { month: "Jun", income: 7100, expenses: 4200 },
  { month: "Jul", income: 6500, expenses: 3700 },
  { month: "Aug", income: 8200, expenses: 4500 },
];

const pieData = [
  { name: "Housing", value: 35, color: "#6366f1" },
  { name: "Food", value: 20, color: "#8b5cf6" },
  { name: "Transport", value: 15, color: "#a78bfa" },
  { name: "Health", value: 12, color: "#c4b5fd" },
  { name: "Savings", value: 18, color: "#ddd6fe" },
];

const recentTransactions = [
  { id: 1, name: "Amazon", category: "Shopping", date: "Aug 12", amount: -84.99, icon: "🛒" },
  { id: 2, name: "Salary", category: "Income", date: "Aug 10", amount: +5200, icon: "💼" },
  { id: 3, name: "Netflix", category: "Entertainment", date: "Aug 9", amount: -15.99, icon: "🎬" },
  { id: 4, name: "Zomato", category: "Food", date: "Aug 8", amount: -450, icon: "🍕" },
  { id: 5, name: "Freelance", category: "Income", date: "Aug 7", amount: +1200, icon: "💻" },
];

export default function Overview() {
  return (
    <div className="overview">
      <div className="stats-grid">
        <StatCard label="Total Balance" value="₹1,24,580" change="+12.5%" positive />
        <StatCard label="Monthly Income" value="₹52,000" change="+8.2%" positive />
        <StatCard label="Monthly Expenses" value="₹31,200" change="-3.1%" positive />
        <StatCard label="Savings Rate" value="40%" change="+5.6%" positive />
      </div>

      <div className="charts-row">
        <div className="chart-card wide">
          <h3 className="chart-title">Income vs Expenses</h3>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={areaData}>
              <defs>
                <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="expGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="month" stroke="#6b7280" tick={{ fontSize: 12 }} />
              <YAxis stroke="#6b7280" tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  background: "#1e1b4b",
                  border: "1px solid rgba(99,102,241,0.3)",
                  borderRadius: "8px",
                  color: "#e5e7eb",
                }}
              />
              <Area type="monotone" dataKey="income" stroke="#6366f1" strokeWidth={2} fill="url(#incomeGrad)" name="Income" />
              <Area type="monotone" dataKey="expenses" stroke="#f43f5e" strokeWidth={2} fill="url(#expGrad)" name="Expenses" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3 className="chart-title">Spending Breakdown</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={4} dataKey="value">
                {pieData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "#1e1b4b",
                  border: "1px solid rgba(99,102,241,0.3)",
                  borderRadius: "8px",
                  color: "#e5e7eb",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="pie-legend">
            {pieData.map((item) => (
              <div key={item.name} className="legend-item">
                <span className="legend-dot" style={{ background: item.color }} />
                <span className="legend-label">{item.name}</span>
                <span className="legend-val">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="chart-card">
        <h3 className="chart-title">Recent Transactions</h3>
        <div className="txn-list">
          {recentTransactions.map((txn) => (
            <div key={txn.id} className="txn-row">
              <div className="txn-icon">{txn.icon}</div>
              <div className="txn-info">
                <span className="txn-name">{txn.name}</span>
                <span className="txn-cat">{txn.category}</span>
              </div>
              <div className="txn-right">
                <span className={`txn-amount ${txn.amount > 0 ? "positive" : "negative"}`}>
                  {txn.amount > 0 ? "+" : ""}₹{Math.abs(txn.amount).toLocaleString()}
                </span>
                <span className="txn-date">{txn.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
