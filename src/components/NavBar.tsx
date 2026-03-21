import { Link } from "react-router-dom";

const navLinks = [
  { name: "Projects", href: "/" },
  { name: "About", href: "/About" },
  { name: "Resumee", href: "" },
];

export default function Header() {
  return (
    <nav
      className="fixed top-4 left-1/2 z-50 mx-auto flex -translate-x-1/2 w-auto p-1
     items-center justify-center gap-8 rounded-full 
     outline outline-white/15 backdrop-blur-md bg-white/10
     font-semibold"
    >
      <div className="flex gap-2 rounded-full p-1 bg-gray-950/80">
        {navLinks.map(({ name, href }) => (
          <Link
            key={name}
            to={href}
            className="hover:bg-violet-900 px-4 py-2 rounded-full transition-colors duration-150"
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
