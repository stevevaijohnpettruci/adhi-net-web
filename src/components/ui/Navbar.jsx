import { NavItem } from "./NavItem";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const menu = [
    { label: "Layanan Kami", href: "/#services" },
    { label: "Paket Produk", href: "/#portfolio" },
    { label: "FAQ", href: "/#team" },
    { label: "Tentang", href: "/tentang", isRoute: true },
    { label: "Hubungi Kami", href: "/#contact" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
        w-full sticky top-0 z-50 transition-all duration-300
        border-b border-blue-100
        ${scrolled ? "py-2 shadow-md bg-white/95 backdrop-blur-md" : "py-4 bg-white"}
      `}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <div className={`transition-all duration-300 ${scrolled ? "scale-95" : "scale-100"}`}>
            <a href="#hero">
              <img className="w-40" src="/Logo (2).png" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {menu.map((item, i) => (
              item.isRoute
                ? <Link key={i} to={item.href} className="text-gray-600 font-medium hover:text-blue-600 transition-colors duration-200 relative group">{item.label}<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200" /></Link>
                : <NavItem key={i} label={item.label} href={item.href} />
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* CTA Button */}
            <a
              href="/#contact"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Dapatkan Promo
            </a>

            {/* Hamburger (Mobile Only) */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg text-blue-600 hover:bg-blue-50"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-white border-t border-blue-100 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {menu.map((item, i) => (
            item.isRoute
              ? <Link key={i} to={item.href} onClick={() => setOpen(false)} className="text-gray-700 font-medium border-b border-gray-100 pb-3 hover:text-blue-600 transition-colors">{item.label}</Link>
              : <a key={i} href={item.href} onClick={() => setOpen(false)} className="text-gray-700 font-medium border-b border-gray-100 pb-3 hover:text-blue-600 transition-colors">{item.label}</a>
          ))}
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-1 text-center px-4 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Dapatkan Promo
          </a>
        </div>
      </div>
    </>
  );
};
