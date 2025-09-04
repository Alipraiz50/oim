import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#D6D6FF] border-t border-[#C2C2FF] mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-slate-800 mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
            OIM Consulting
          </h2>
          <p className="text-slate-600 text-sm mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Empowering businesses with strategic insights, reliable accounting, and advisory excellence.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" aria-label="Facebook" className="text-[#003D3D] hover:text-teal-700 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="text-[#003D3D] hover:text-teal-700 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-[#003D3D] hover:text-teal-700 transition">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="text-[#003D3D] hover:text-teal-700 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="Whatsapp" className="text-[#003D3D] hover:text-teal-700 transition">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <h3 className="text-base font-semibold text-slate-800 mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="text-[#003D3D] hover:underline transition">Home</a>
            </li>
            <li>
              <a href="#about" className="text-[#003D3D] hover:underline transition">About</a>
            </li>
            <li>
              <a href="#services" className="text-[#003D3D] hover:underline transition">Services</a>
            </li>
            <li>
              <a href="#pricing" className="text-[#003D3D] hover:underline transition">Pricing</a>
            </li>
            
          </ul>
        </div>
      </div>
      <div className="border-t text-slate-800 border-[#C2C2FF] py-4 text-center text-xs " style={{ fontFamily: "Poppins, sans-serif" }}>
        &copy; {new Date().getFullYear()} OIM Consulting. All rights reserved.
      </div>
    </footer>
  )
}