import { cn } from "@/lib/utils";

export default function Skeleton({ className }: { className?: string }) {
  if (className) {
    return (
      <div className={cn("h-4 w-[550px] rounded-md bg-white/5", className)} />
    );
  }
  return <div className="h-4 w-[550px] rounded-md bg-white/5" />;
}
