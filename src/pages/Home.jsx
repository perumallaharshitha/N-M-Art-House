import Hero from "../components/Hero";
import founders from "../assets/images/founders.jpg";
import { events } from "../data/events";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Hero />
      <section className="px-6 md:px-16 lg:px-24 py-16 md:py-24 bg-white/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <img
              src={founders}
              alt="Founders"
              className="rounded-2xl shadow-xl object-cover w-full h-[300px] md:h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl mb-6 leading-snug">
              The Story Behind
              <br />
              N&M ArtHouse
            </h2>
            <p className="mb-5 text-base md:text-lg leading-relaxed text-justify">
              N&M ArtHouse was founded by <strong>Mrudula</strong> and <strong>Nithya Viraj</strong>, 
              driven by a shared passion for art, creativity, and meaningful human connection. 
              What began as a simple love for doodling and artistic expression soon evolved 
              into a vision  to bring interactive art experiences into real-world celebrations.
            </p>
            <p className="mb-5 text-base md:text-lg leading-relaxed text-justify">
              They believed that art shouldnt just be observed, but experienced. 
              From intimate gatherings to large-scale events, their journey has been about 
              transforming ordinary moments into something personal, vibrant, and unforgettable.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-justify">
              Today, N&M ArtHouse is known for creating engaging experiences like doodle booths 
              and creative workshops that spark joy, conversation, and lasting memories  
              making every event truly one of a kind.
            </p>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-16 lg:px-24 py-16 md:py-24 bg-[#faf7f5]">

        <h2 className="text-3xl md:text-4xl text-center mb-12">
          Our Experiences
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

          {events.map((event) => (
            <div
              key={event.id}
              className="group cursor-pointer"
              onClick={() => navigate(`/events#${event.id}`)}
            >
              <img
                src={event.preview[0]}
                alt={event.title}
                className="rounded-xl h-40 md:h-56 w-full object-cover group-hover:scale-105 transition"
              />

              <h3 className="mt-3 text-sm md:text-lg text-center">
                {event.title}
              </h3>
            </div>
          ))}

        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/events")}
            className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
          >
            View More
          </button>
        </div>

      </section>
    </>
  );
};

export default Home;