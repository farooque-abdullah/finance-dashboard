import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LineChart, Line, Legend,
} from "recharts";

const monthlyData = [
  { month: "Mar", income: 42000, expenses: 28000, savings: 14000 },
  { month: "Apr", income: 52000, expenses: 31000, savings: 21000 },
  { month: "May", income: 47000, expenses: 29000, savings: 18000 },
  { month: "Jun", income: 62000, expenses: 38000, savings: 24000 },
  { month: "Jul", income: 58000, expenses: 34000, savings: 24000 },
  { month: "Aug", income: 52000, expenses: 31200, savings: 20800 },
];

const tooltipStyle = {
  contentStyle: {
    background: "#1e1b4b",
    border: "1px solid rgba(99,102,241,0.3)",
    borderRadius: "8px",
    color: "#e5e7eb",
  },
};

export default function Analytics() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div className="chart-card">
        <h3 className="chart-title">Monthly Income vs Expenses (₹)</h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={monthlyData} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="month" stroke="#6b7280" tick={{ fontSize: 12 }} />
            <YAxis stroke="#6b7280" tick={{ fontSize: 12 }} tickFormatter={(v) => `₹${(v/1000).toFixed(0)}k`} />
            <Tooltip {...tooltipStyle} formatter={(v) => `₹${v.toLocaleString()}`} />
            <Legend />
            <Bar dataKey="income" fill="#6366f1" radius={[4, 4, 0, 0]} name="Income" />
            <Bar dataKey="expenses" fill="#f43f5e" radius={[4, 4, 0, 0]} name="Expenses" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-card">
        <h3 className="chart-title">Savings Trend (₹)</h3>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="month" stroke="#6b7280" tick={{ fontSize: 12 }} />
            <YAxis stroke="#6b7280" tick={{ fontSize: 12 }} tickFormatter={(v) => `₹${(v/1000).toFixed(0)}k`} />
            <Tooltip {...tooltipStyle} formatter={(v) => `₹${v.toLocaleString()}`} />
            <Line type="monotone" dataKey="savings" stroke="#10b981" strokeWidth={3} dot={{ fill: "#10b981", r: 5 }} name="Savings" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
