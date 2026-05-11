import {
  Facebook,
  Instagram,
} from "../../components/ui/SocialMediaIcon";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-600 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* LOGO + DESCRIPTION */}
          <div>
            <a href="#hero" className="inline-block">
              <img className="w-40" src="/Logo (2).png" alt="Company Logo" />
            </a>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Penyedia layanan jaringan internet, pengembangan software, dan reparasi elektronik terpercaya di Tasikmalaya.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {[
                { label: "Layanan Kami", href: "/#services" },
                { label: "Paket Produk", href: "/#portfolio" },
                { label: "FAQ", href: "/#team" },
                { label: "Tentang", href: "/tentang" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES LIST */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-4">Layanan Kami</h4>
            <ul className="space-y-2">
              {[
                "Jaringan Internet",
                "Pengembangan Software",
                "Reparasi Elektronik",
              ].map((service, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-4">Ikuti kami di</h4>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600
                      bg-gray-200 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-6 border-t border-gray-200 text-center text-gray-400">
          <p>&copy; {currentYear} Adhinet. Hak Cipta.</p>
        </div>
      </div>
    </footer>
  );
};
