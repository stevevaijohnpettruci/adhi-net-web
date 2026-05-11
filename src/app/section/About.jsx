import { Target, Users, Award, Heart } from "lucide-react";
import { useTheme } from "../../context/useTheme";

const values = [
  {
    icon: Target,
    title: "Misi Kami",
    description:
      "Memberikan solusi teknologi modern yang membantu bisnis berkembang melalui inovasi.",
  },
  {
    icon: Users,
    title: "Kolaborasi",
    description:
      "Kami bekerja secara dekat dengan setiap klien untuk memahami kebutuhan dan membangun solusi terbaik.",
  },
  {
    icon: Award,
    title: "Keunggulan",
    description:
      "Kami berkomitmen untuk menghadirkan kualitas terbaik dan hasil yang dapat diandalkan.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Kami mencintai pekerjaan kami, menghadirkan kreativitas dan energi pada setiap proyek.",
  },
];

export const About = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="about"
      className={`py-20 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP CONTENT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="mb-6 font-semibold text-xl">Tentang Kami</h2>

            <p
              className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}
            >
              Berdiri pada tahun 2025, Adhinet hadir sebagai penyedia layanan teknologi di Tasikmalaya. Kami fokus pada tiga bidang utama: jaringan internet, pengembangan software, dan reparasi elektronik.
            </p>

            <p
              className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-6`}
            >
              Dengan pendekatan yang mengutamakan kualitas dan kepercayaan, Adhinet membangun hubungan jangka panjang bersama pelanggan. Setiap layanan kami kerjakan dengan profesional, cepat, dan bertanggung jawab.
            </p>

            <div
              className={`mt-8 p-5 rounded-xl border ${
                darkMode
                  ? "border-gray-700 bg-gray-800"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <p
                className={`text-center font-medium ${
                  darkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                “Solusi teknologi terpercaya untuk kebutuhan internet, software, dan elektronik Anda.”
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE BOX */}
          <div className="relative">
            <div
              className={`aspect-4/3 rounded-2xl overflow-hidden shadow-2xl ${
                darkMode ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              <img src="/Logo (1).jpeg" alt="Company Logo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* VALUES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    darkMode ? "bg-blue-600" : "bg-blue-100"
                  }`}
                >
                  <Icon
                    className={`${darkMode ? "text-white" : "text-blue-600"}`}
                    size={28}
                  />
                </div>

                <h3 className="mb-3 font-semibold">{value.title}</h3>

                <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
