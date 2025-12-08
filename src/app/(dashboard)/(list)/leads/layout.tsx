"use client";

import { LeadStageColumnProvider } from "@/providers/LeadStageColumnProvider";
import { LeadDetailSelectProvider } from "@/providers/LeadDetailSelectProvider";

export default function LeadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LeadStageColumnProvider>
      <LeadDetailSelectProvider>
        {children}
      </LeadDetailSelectProvider>
    </LeadStageColumnProvider>
  );
}
