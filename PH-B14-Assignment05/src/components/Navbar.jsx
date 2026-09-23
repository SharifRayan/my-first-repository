import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">

        {/* Mobile view menu button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden" >
          <img src="./assets/hamburger.png" alt="menu" className="h-4 w-5" />
        </button>

        {/* Logo */}
        <a href="#home">
          <img src="/assets/logo-text.png" alt="Dev Stack" className="h-9" />
        </a>

        {/* Menu bar */}
        <div className="hidden gap-8 lg:flex">
          <a href="#home" className="text-pink-500">Home</a>
          <a href="#technologies" className="text-gray-500">Technologies</a>
          <a href="#projects" className="text-gray-500">Projects</a>
          <a href="#about" className="text-gray-500">About</a>
          <a href="#contact" className="text-gray-500">Contact</a>
        </div>

        {/* nav bar buttons */}
        <div className="flex items-center gap-4">
          <button className="text-sm text-gray-600">Sign In</button>
          <button className="rounded-full bg-pink-600 px-5 py-2 text-sm font-semibold text-white">Sign Up</button>
        </div>
      </div>

      {/* Mobile view menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 px-5 py-4 lg:hidden">
          <a href="#home"className="block py-2 text-gray-600"onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#technologies"className="block py-2 text-gray-600"onClick={() => setMenuOpen(false)}>Technologies</a>
          <a href="#projects"className="block py-2 text-gray-600"onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#about"className="block py-2 text-gray-600"onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact"className="block py-2 text-gray-600"onClick={() => setMenuOpen(false)}>Contact</a>

        </div>
      )}
    </nav>
  );
}

export default Navbar;