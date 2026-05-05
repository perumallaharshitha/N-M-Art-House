import { Link } from "react-router-dom";
import heroDesktop from "../assets/images/herohome.png";
import heroMobile from "../assets/images/mobile.png";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={heroDesktop}
        className="hidden md:block w-full h-screen object-cover"
        alt="Hero"
      />
      <img
        src={heroMobile}
        className="pt-20 block md:hidden w-full h-auto object-cover object-[center_60%]"
        alt="Hero Mobile"
      />
      <div className="hidden md:block absolute inset-0 bg-black/35"></div>
      <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-20 z-10 translate-y-72 md:translate-y-0">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-white text-2xl md:text-5xl leading-tight mb-4 font-[Playfair_Display] drop-shadow-lg">
            Curated Art Experiences
            <br />
            For Meaningful Celebrations
          </h1>
          <p className="text-white/100 mb-6 text-sm md:text-lg">
            Transform your events with interactive art that feels personal,
            engaging, and unforgettable.
          </p>
          <Link
            to="/connect"
            className="inline-block px-6 md:px-8 py-2.5 md:py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition"
          >
            Book Your Event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;