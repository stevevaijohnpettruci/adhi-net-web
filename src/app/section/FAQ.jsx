import { useState } from "react";
import { ChevronDown, Wifi, Code, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "jaringan",
    label: "Jaringan Internet",
    icon: Wifi,
    faqs: [
      {
        question: "Berapa lama proses instalasi internet?",
        answer: "Proses instalasi biasanya memakan waktu 1–2 hari kerja setelah pendaftaran dikonfirmasi, tergantung lokasi dan ketersediaan teknisi.",
      },
      {
        question: "Apakah ada biaya instalasi?",
        answer: "Instalasi gratis untuk semua paket. Tidak ada biaya tersembunyi selain biaya berlangganan bulanan.",
      },
      {
        question: "Bagaimana cara berlangganan paket internet?",
        answer: "Kamu bisa menghubungi kami melalui form kontak atau langsung via WhatsApp. Tim kami akan segera merespons dan memandu proses pendaftaran.",
      },
      {
        question: "Apakah bisa upgrade atau downgrade paket?",
        answer: "Bisa. Kamu dapat mengubah paket kapan saja dengan menghubungi tim support kami. Perubahan akan berlaku di periode tagihan berikutnya.",
      },
    ],
  },
  {
    id: "software",
    label: "Pengembangan Software",
    icon: Code,
    faqs: [
      {
        question: "Berapa lama pengembangan website selesai?",
        answer: "Tergantung kompleksitas proyek. Landing page biasanya 3–5 hari kerja, company profile 1–2 minggu, dan aplikasi custom bisa lebih lama sesuai kebutuhan.",
      },
      {
        question: "Apakah tersedia layanan maintenance setelah website jadi?",
        answer: "Ya, kami menyediakan layanan maintenance. Paket Enterprise sudah termasuk maintenance 3 bulan, sedangkan paket lainnya bisa menambahkan layanan maintenance secara terpisah.",
      },
      {
        question: "Apakah source code diserahkan ke klien?",
        answer: "Ya, source code akan diserahkan sepenuhnya kepada klien setelah proses pembayaran selesai.",
      },
      {
        question: "Teknologi apa yang digunakan untuk pengembangan?",
        answer: "Kami menggunakan teknologi modern seperti React, Next.js, Node.js, dan lainnya sesuai kebutuhan proyek.",
      },
    ],
  },
  {
    id: "reparasi",
    label: "Reparasi Elektronik",
    icon: Wrench,
    faqs: [
      {
        question: "Perangkat apa saja yang bisa direparasi?",
        answer: "Kami melayani reparasi berbagai perangkat elektronik seperti laptop, komputer, smartphone, dan perangkat jaringan.",
      },
      {
        question: "Berapa lama estimasi waktu reparasi?",
        answer: "Tergantung jenis kerusakan. Kerusakan ringan biasanya selesai dalam 1 hari kerja, sedangkan kerusakan berat bisa memakan waktu 3–5 hari kerja.",
      },
      {
        question: "Apakah ada garansi setelah reparasi?",
        answer: "Ya, kami memberikan garansi servis selama 30 hari. Jika terjadi masalah yang sama setelah reparasi, kami akan menanganinya tanpa biaya tambahan.",
      },
      {
        question: "Bagaimana cara mengajukan reparasi?",
        answer: "Kamu bisa langsung datang ke lokasi kami atau menghubungi tim kami terlebih dahulu untuk konsultasi sebelum membawa perangkat.",
      },
    ],
  },
];

export const FAQ = () => {
  const [activeTab, setActiveTab] = useState("jaringan");
  const [openIndex, setOpenIndex] = useState(null);

  const handleTabChange = (id) => {
    setActiveTab(id);
    setOpenIndex(null);
  };

  const active = categories.find((c) => c.id === activeTab);

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Pertanyaan Umum</h2>
          <p className="text-gray-500">
            Temukan jawaban atas pertanyaan yang sering ditanyakan seputar layanan kami.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-2 mb-8">
          {categories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => handleTabChange(id)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                activeTab === id
                  ? "bg-blue-600 text-white border-blue-600 shadow"
                  : "bg-white text-gray-500 border-gray-200 hover:text-blue-600 hover:border-blue-300"
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="space-y-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
          >
            {active.faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-blue-600 shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
