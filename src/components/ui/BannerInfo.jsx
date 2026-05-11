import { MapPin, Mail, Instagram, Facebook } from 'lucide-react';

export default function BannerInfo() {
  return (
    <div className="w-full bg-blue-600">
      <div className="max-w-7xl mx-auto h-9 px-4 flex items-center justify-between text-sm text-white">

        {/* Kiri: Alamat + Email */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-blue-200" />
            <span className="hidden sm:inline font-medium text-blue-50">
              Jl. Moch Bagowi, Sukamantri, Ciawi, Tasikmalaya
            </span>
          </div>
          <div className="hidden md:block h-4 w-px bg-blue-400" />
          <div className="hidden md:flex items-center gap-1.5">
            <Mail size={14} className="text-blue-200" />
            <span className="font-medium text-blue-50">adhinet-info@gmail.com</span>
          </div>
        </div>

        {/* Kanan: Social Media */}
        <div className="flex items-center gap-3">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
            <Instagram size={17} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
            <Facebook size={17} />
          </a>
        </div>

      </div>
    </div>
  );
}
