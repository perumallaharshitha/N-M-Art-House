import { FiMail, FiPhone, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full mt-auto bg-[#fbf7f2] border-t border-[#800020]/20">
      <div className="px-6 md:px-20 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="max-w-md">
            <h2 className="text-3xl font-semibold tracking-tight text-[#800020] font-[Playfair_Display]">
              N&M ArtHouse
            </h2>
            <p className="text-sm mt-3 text-gray-700 leading-relaxed font-[Playfair_Display]">
              Creating meaningful and interactive art experiences
              that bring joy, connection, and creativity to every event.
            </p>
          </div>
        <div className="flex flex-col gap-4 text-[15px] text-gray-700 font-[Playfair_Display]">
          <h3 className="text-xs uppercase tracking-[0.25em] text-[#800020]/70 mb-1">
            Connect
          </h3>
          <a
            href="mailto:nm.arthouse13@gmail.com"
            className="flex items-center gap-3 hover:text-[#800020] transition"
          >
            <FiMail />
            <span>nm.arthouse13@gmail.com</span>
          </a>
          <a
            className="flex items-center gap-3 hover:text-[#800020] transition"
          >
            <FiPhone />
            <span>+91 8106530465</span>
          </a>
          <a
            href="https://instagram.com/n.and.m_arthouse"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-[#800020] transition"
          >
            <FiInstagram />
            <span>@n.and.m_arthouse</span>
          </a>

        </div>

        </div>

        {/* DIVIDER */}
        <div className="my-6 border-t border-[#800020]/20"></div>

        {/* COPYRIGHT */}
        <div className="text-center text-xs tracking-widest text-[#800020]/60 font-[Playfair_Display]">
          © 2026 N&M ArtHouse
        </div>

      </div>

    </footer>
  );
};

export default Footer;