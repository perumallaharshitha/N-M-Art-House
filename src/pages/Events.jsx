import { useRef } from "react";
import { events } from "../data/events";

const Events = () => {
  const sectionRefs = useRef({});

  const scrollToEvent = (id) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const topEvents = events.slice(0, 5);

  return (
    <div className="bg-[#faf7f5] pt-24 md:pt-28 overflow-hidden">
      <div className="text-center px-4 mb-14">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-wide">
          Our Art Experiences
        </h1>
      </div>
      <div className="relative overflow-hidden mb-20">
        <div className="flex gap-6 w-max animate-scroll">
          {[...topEvents, ...topEvents].map((event, index) => (
            <div
              key={index}
              onClick={() => scrollToEvent(event.id)}
              className="w-[260px] md:w-[320px] flex-shrink-0 cursor-pointer group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                <div className="overflow-hidden">
                  <img
                    src={event.preview[0]}
                    alt={event.title}
                    className="w-full h-52 md:h-72 object-cover object-top hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg md:text-xl font-medium">
                    {event.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 md:px-10 lg:px-20 space-y-20 pb-24">
        {events.map((event) => (
          <div
            key={event.id}
            ref={(el) => (sectionRefs.current[event.id] = el)}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {event.title}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {event.images.map((img, i) => (
                <div key={i} className="overflow-hidden rounded-2xl">
                    <img
                    src={img}
                    alt=""
                    className={`w-full object-cover hover:scale-105 transition duration-500
                        ${event.title === "Clay Mirror"
                        ? "h-72 md:h-96 object-center"
                        : "h-52 md:h-72 object-top"
                        }`}
                    />
                </div>
            ))}
            </div>
          </div>
        ))}
      </div>

      {/* ================= ANIMATION ================= */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 25s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default Events;