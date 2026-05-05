import { useState } from "react";
import emailjs from "emailjs-com";

const Reviews = () => {
  const [form, setForm] = useState({
    name: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE,
      "template_24uu6bt",
      {
        name: form.name,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        setSuccess(true);
        setLoading(false);
        setForm({ name: "", message: "" });

        setTimeout(() => setSuccess(false), 5000);
      },
      () => {
        setLoading(false);
      }
    );
  };

  const reviews = [
    {
      name: "Aarav Mehta",
      message:
        "N&M ArtHouse completely transformed our event into something magical. The doodle booth was not just an activity, it became the heart of the celebration. Every guest—from kids to grandparents—was engaged, laughing, and creating their own little artworks. The team was extremely professional, punctual, and incredibly creative in setting everything up. It felt personal, artistic, and unforgettable.",
    },
    {
      name: "Sneha Reddy",
      message:
        "We hired N&M ArtHouse for a private celebration and honestly, it exceeded all expectations. The glitter bar and interactive art setups brought so much energy and joy to the event. What I loved most was how thoughtfully everything was designed—nothing felt random or rushed. It truly added a premium, artistic vibe that our guests are still talking about.",
    },
    {
      name: "Rahul Varma",
      message:
        "One of the most unique event experiences we’ve ever had. The canvas painting setup was beautifully organized and gave everyone a chance to express themselves creatively. It wasn’t just entertainment—it felt meaningful. The team handled everything smoothly and made sure every guest felt included. Highly recommended for anyone who wants something beyond the usual event setups.",
    },
    {
      name: "Divya Nair",
      message:
        "N&M ArtHouse brought a completely different level of creativity to our wedding function. The clay mirror and interactive art stations were a huge hit with our guests. It added such a warm, artistic, and memorable touch to the entire celebration. Everything was beautifully curated and executed with care and professionalism.",
    },
    {
      name: "Karan Desai",
      message:
        "Absolutely loved the concept and execution. The kintsugi-inspired setup was something I had never seen before at an event. It felt elegant, meaningful, and deeply creative. The team’s attention to detail and ability to engage guests effortlessly made the experience stand out. This is not just event decoration—it’s an experience.",
    },
  ];

  return (
    <div className="px-5 md:px-10 py-16 md:py-24 bg-[#faf7f5]">

      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl mb-4">
          What People Say
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
          Real experiences from our clients and their memorable events.
        </p>
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">

        {/* LEFT — REVIEWS */}
        <div>

          <h3 className="text-xl mb-6 font-semibold">
            Client Reviews
          </h3>

          <div className="space-y-6">

            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-5 md:p-6 rounded-3xl shadow hover:shadow-lg transition duration-300"
              >
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  “{review.message}”
                </p>

                <h3 className="font-semibold text-sm">
                  — {review.name}
                </h3>
              </div>
            ))}

          </div>

        </div>

        {/* RIGHT — FORM */}
        <div className="lg:sticky lg:top-24">

          <div className="bg-white p-6 md:p-8 rounded-3xl shadow">

            <h3 className="text-2xl mb-4 text-center">
              Share Your Experience
            </h3>

            {/* SUCCESS MESSAGE */}
            {success && (
              <div className="mb-4 p-3 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm">
                ✨ Thank you for your feedback! We appreciate your words.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg outline-none"
              />

              <textarea
                name="message"
                placeholder="Your Feedback"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg outline-none h-28"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-full border border-black hover:bg-black hover:text-white transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Review"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Reviews;