import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  applicationName: "PassMalta",
  category: "education",
};

export default function PassMaltaLayout({ children }: { children: ReactNode }) {
  return children;
}
