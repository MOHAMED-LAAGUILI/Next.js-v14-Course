"use client";

import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [field, setField] = useState(true);
  return (
    <>
    <Label>Switch</Label>
      <Switch checked={field} onCheckedChange={setField} aria-readonly />
      <Separator/>
      {children}
    </>
  );
}
