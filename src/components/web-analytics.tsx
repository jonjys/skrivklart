import { Analytics } from "@vercel/analytics/react";
import { beforeSend } from "@/lib/analytics-filter";

export function WebAnalytics() {
  return <Analytics beforeSend={(event) => beforeSend(event)} />;
}
