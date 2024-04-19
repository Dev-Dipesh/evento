import Link from "next/link";

const footerRoutes = [
  {
    name: "Terms and Conditions",
    path: "/terms-conditions",
  },
  {
    name: "Privacy Policy",
    path: "/privacy",
  },
];

export default function Footer() {
  return (
    <footer className="flex justify-between items-center mt-auto border-t border-white/10 h-16 text-xs px-3 sm:px-9 text-white/25">
      <span>&copy; 2050 Satoris. All rights reserved.</span>
      <section>
        <ul className="flex gap-x-3 sm:gap-x-8">
          {footerRoutes.map((route) => (
            <li
              key={route.name}
              className="text-white/50 hover:text-white transition"
            >
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
}
