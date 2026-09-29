import { Loader2 } from "lucide-react";
import { useState, type ReactNode } from "react";
import { toast } from "sonner";
import { getBundle } from "@/lib/catalog";
import { startCheckout } from "@/lib/checkout";
import { useSkrivklart } from "@/lib/store";
import { Button, type ButtonProps } from "./ui/button";

export function BuyBundleButton({
  slug,
  children,
  ...props
}: { slug: string; children: ReactNode } & Omit<ButtonProps, "onClick">) {
  const unlockBundle = useSkrivklart((s) => s.unlockBundle);
  const owned = useSkrivklart((s) => s.hasBundle(slug));
  const [busy, setBusy] = useState(false);
  const bundle = getBundle(slug);

  async function buy() {
    if (!bundle) return;
    setBusy(true);
    const result = await startCheckout(slug);
    if (result.kind === "redirect") return;
    setBusy(false);
    if (result.kind === "error") {
      toast.error(result.error);
      return;
    }
    unlockBundle(slug, result.pass, Date.now() + bundle.days * 86_400_000);
    toast.success(`${bundle.name} är olåst.`);
  }

  return (
    <Button type="button" {...props} disabled={busy || owned || props.disabled} onClick={() => void buy()}>
      {busy ? <Loader2 className="size-4 animate-spin" /> : null}
      {owned ? "Redan olåst" : children}
    </Button>
  );
}
