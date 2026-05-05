import { useNavigate } from "react-router-dom";
const packages = [
  {
    event: "Live Experience",
    title: "Doodle Booth",
    price: "₹25,000",
    highlight: true,
    features: [
      "Personalized doodles for each guest",
      "Quick 2–3 minute sketches",
      "Take-home keepsakes",
      "Minimal setup, high engagement",
    ],
  },
  {
    event: "Live Experience",
    title: "Glitter Bar",
    price: "₹18,000",
    features: [
      "Professional glitter artists",
      "Face gems & holographic glitters",
      "Custom looks",
      "Quick application",
    ],
  },
  {
    event: "Workshop",
    title: "Canvas Painting",
    price: "₹600 / person",
    features: [
      "All materials included",
      "Step-by-step guidance",
      "No experience needed",
      "Take home your art",
    ],
  },
  {
    event: "Workshop",
    title: "Clay Mirror",
    price: "₹600 / person",
    features: [
      "Mirror base & clay tools",
      "Guided session",
      "Beginner friendly",
      "Take home same day",
    ],
  },
  {
    event: "Workshop",
    title: "Kintsugi",
    price: "₹800 / person",
    features: [
      "Gold detailing",
      "Guided experience",
      "Mindful activity",
      "Take home piece",
    ],
  },
];

const Packages = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 md:px-12 py-24 bg-[#faf7f5]">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl text-center mb-4 font-semibold tracking-wide">
        Our Packages
      </h2>

      <p className="text-center max-w-2xl mx-auto mb-6 text-gray-600">
        Thoughtfully designed experiences that bring creativity
        and interaction into your celebrations.
      </p>

      {/* Travel Note */}
      <p className="text-center text-xs md:text-sm text-gray-500 mb-14">
        *Travel and accommodation for 2 artists are not included in the packages
      </p>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10">

        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-3xl p-8 flex flex-col justify-between
            border border-gray-100 transition-all duration-300
            hover:-translate-y-2 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)]
            ${pkg.highlight ? "ring-2 ring-black scale-[1.03]" : ""}`}
          >

            {/* Badge */}
            {pkg.highlight && (
              <span className="absolute top-5 right-5 text-[11px] tracking-wide bg-black text-white px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            {/* Content */}
            <div>

              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                {pkg.event}
              </p>

              <h3 className="text-2xl font-medium mb-2">
                {pkg.title}
              </h3>

              <p className="text-2xl font-semibold mb-6 text-black">
                {pkg.price}
              </p>

              <div className="space-y-3 text-sm text-gray-600">
                {pkg.features.map((f, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-black">•</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Button */}
            <button
              onClick={() => navigate("/connect")}
              className="mt-10 py-3 rounded-full border border-black text-sm
              hover:bg-black hover:text-white transition-all duration-300"
            >
              Let’s Connect
            </button>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Packages;