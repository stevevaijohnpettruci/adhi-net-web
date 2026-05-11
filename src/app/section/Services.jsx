import { Code, Wifi, Wrench } from "lucide-react";
import { useTheme } from "../../context/useTheme";
import { motion } from "framer-motion";

const services = [
  {
    icon: Wifi,
    title: "Jaringan Internet",
    description:
      "Layanan instalasi, konfigurasi, dan maintenance jaringan internet yang stabil, cepat, dan aman untuk kebutuhan rumah maupun bisnis.",
  },
  {
    icon: Code,
    title: "Pengembangan Software",
    description:
      "Kami membangun website modern, cepat, responsif, dan mudah dikelola sesuai kebutuhan bisnis Anda.",
  },
  {
    icon: Wrench,
    title: "Reparasi Elektronik",
    description:
      "Melayani perbaikan berbagai perangkat elektronik dengan penanganan profesional, cepat, dan terpercaya.",
  },
];

export const Services = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="services"
      className={`py-20 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 text-2xl font-semibold">Layanan Kami</h1>
          <p
            className={`max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
              Kami menyediakan layanan jaringan internet, pengembangan software, dan reparasi elektronik untuk kebutuhan rumah maupun bisnis Anda secara profesional.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`p-8 rounded-xl shadow-sm hover:shadow-lg transition-all ${
                  darkMode
                    ? "bg-gray-800 hover:shadow-gray-700"
                    : "bg-white hover:shadow-gray-200"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4
                    ${darkMode ? "bg-blue-600" : "bg-blue-100"}
                  `}
                >
                  <Icon
                    className={`${darkMode ? "text-white" : "text-blue-600"}`}
                    size={24}
                  />
                </div>

                <h3 className="mb-3 text-lg font-semibold">
                  {service.title}
                </h3>

                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};