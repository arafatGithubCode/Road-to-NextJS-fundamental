type Props = {
  children: React.ReactNode;
  user: React.ReactNode;
  notification: React.ReactNode;
  revenue: React.ReactNode;
};

export default function DashboardLayout({
  children,
  user,
  notification,
  revenue,
}: Props) {
  return (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{user}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notification}</div>
      </div>
    </div>
  );
}
