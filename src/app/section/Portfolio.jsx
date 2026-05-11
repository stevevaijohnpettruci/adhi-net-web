import { useState } from "react";
import { Wifi, Code, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const wifiPackages = [
  {
    name: "Paket Basic",
    speed: "10 Mbps",
    price: "Rp 150.000",
    period: "/ bulan",
    features: [
      "Kecepatan 10 Mbps",
      "Unlimited Quota",
      "Instalasi Gratis",
      "Support 24/7",
    ],
    popular: false,
  },
  {
    name: "Paket Standard",
    speed: "25 Mbps",
    price: "Rp 250.000",
    period: "/ bulan",
    features: [
      "Kecepatan 25 Mbps",
      "Unlimited Quota",
      "Instalasi Gratis",
      "Support 24/7",
      "Router WiFi Gratis",
    ],
    popular: true,
  },
  {
    name: "Paket Premium",
    speed: "50 Mbps",
    price: "Rp 400.000",
    period: "/ bulan",
    features: [
      "Kecepatan 50 Mbps",
      "Unlimited Quota",
      "Instalasi Gratis",
      "Support 24/7",
      "Router WiFi Gratis",
      "IP Publik Statis",
    ],
    popular: false,
  },
];

const softwarePackages = [
  {
    name: "Paket Starter",
    type: "Landing Page",
    price: "Rp 500.000",
    period: "sekali bayar",
    features: [
      "1 Halaman Landing Page",
      "Desain Responsif",
      "Revisi 2x",
      "Serah terima source code",
    ],
    popular: false,
  },
  {
    name: "Paket Business",
    type: "Website Company Profile",
    price: "Rp 1.500.000",
    period: "sekali bayar",
    features: [
      "Hingga 5 Halaman",
      "Desain Responsif",
      "CMS Sederhana",
      "Revisi 5x",
      "Domain & Hosting 1 Tahun",
    ],
    popular: true,
  },
  {
    name: "Paket Enterprise",
    type: "Aplikasi Web Custom",
    price: "Hubungi Kami",
    period: "",
    features: [
      "Fitur Custom sesuai kebutuhan",
      "Dashboard Admin",
      "Integrasi API",
      "Revisi Unlimited",
      "Maintenance 3 Bulan",
    ],
    popular: false,
  },
];

const tabs = [
  { id: "wifi", label: "Paket WiFi", icon: Wifi },
  { id: "software", label: "Paket Software", icon: Code },
];

export const Portfolio = () => {
  const [active, setActive] = useState("wifi");
  const packages = active === "wifi" ? wifiPackages : softwarePackages;

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 text-3xl font-semibold text-gray-800">Paket Produk</h1>
          <p className="max-w-2xl mx-auto text-gray-500">
            Pilih paket yang sesuai dengan kebutuhan Anda. Semua paket sudah termasuk dukungan teknis dari tim kami.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white border border-gray-200 rounded-xl p-1 gap-1 shadow-sm">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === id
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow flex flex-col ${
                  pkg.popular ? "ring-2 ring-blue-600" : "border border-gray-100"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Paling Populer
                  </span>
                )}

                <div className="mb-6">
                  <p className="text-sm text-blue-600 font-medium mb-1">
                    {active === "wifi" ? pkg.speed : pkg.type}
                  </p>
                  <h3 className="text-xl font-bold text-gray-800">{pkg.name}</h3>
                </div>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-800">{pkg.price}</span>
                  {pkg.period && (
                    <span className="text-gray-400 text-sm ml-1">{pkg.period}</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600 text-sm">
                      <Check size={16} className="text-blue-600 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                    pkg.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                  }`}
                >
                  Pilih Paket
                </a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
