import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      Page Not Found. Go to{" "}
      <Link href="/" className="text-blue-500">
        Home
      </Link>
    </div>
  );
}
