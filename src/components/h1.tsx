import { cn } from "@/lib/utils";

type H1Props = {
  children: React.ReactNode;
  classes?: string;
};

export default function H1({ children, classes }: H1Props) {
  if (classes !== undefined) {
    return (
      <h1
        className={cn("text-3xl lg:text-6xl font-bold tracking-tight", classes)}
      >
        {children}
      </h1>
    );
  } else {
    return (
      <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">
        {children}
      </h1>
    );
  }
}
