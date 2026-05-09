import { Link, useLocation } from "react-router-dom";
import { ScrollSmoother } from "gsap/ScrollSmoother";

const navLinks = [
  { name: "Projects", href: "/" },
];

export default function Header() {
  const location = useLocation();

  const handleProjectsClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      ScrollSmoother.get()?.scrollTo(0, true);
    }
  };

  return (
    <nav
      aria-label="Main navigation"
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
            onClick={name === "Projects" ? handleProjectsClick : undefined}
            aria-current={location.pathname === href ? "page" : undefined}
            className="px-4 py-2 rounded-full transition-all duration-300 hover:bg-linear-to-r hover:from-blue-500 hover:to-violet-500"
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
