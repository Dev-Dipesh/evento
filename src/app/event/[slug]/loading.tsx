import Skeleton from "@/components/skeleton";

export default function LoadingSlug() {
  return (
    <div className="animate-pulse flex flex-col items-center gap-y-4 pt-28">
      <Skeleton className="h4 w-[550px]" />
      <Skeleton className="h4 w-[475px]" />
      <Skeleton className="h4 w-[400px]" />
    </div>
  );
}
