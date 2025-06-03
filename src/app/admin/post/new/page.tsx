import { Button } from "@/components/Button";
import { BugIcon } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminPostNewPage() {
  return (
    <div className="py-16 flex items-center gap-4">
      <Button variant="ghost" size="sm">
        <BugIcon />
        Confirma
      </Button>
      <Button variant="default" size="md">
        <BugIcon />
        Confirma
      </Button>
      <Button variant="danger" size="lg">
        <BugIcon />
        Confirma
      </Button>
    </div>
  );
}
