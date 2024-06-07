import Card from "@/components/Card";
import Link from "next/link";

export default function NotificationArchived() {
  return (
    <Card>
      <div>Archived Notification</div>
      <Link href="/complex-dashboard">default</Link>
    </Card>
  );
}
