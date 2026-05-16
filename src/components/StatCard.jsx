export default function StatCard({ label, value, change, positive }) {
  return (
    <div className="stat-card">
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      <div className={`stat-change ${positive ? "up" : "down"}`}>
        {positive ? "▲" : "▼"} {change} this month
      </div>
    </div>
  );
}
