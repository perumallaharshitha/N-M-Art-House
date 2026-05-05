import { useState } from "react";
import emailjs from "@emailjs/browser";
const Connect = () => {
  console.log("EMAILJS KEY:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    type: "",
    time: "",
    venue: "",
    capacity: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, date, type, time, venue, capacity } = form;

    // 🔥 STRONG VALIDATION (must fill all fields)
    if (
      !name ||
      !email ||
      !phone ||
      !date ||
      !type ||
      !time ||
      !venue ||
      !capacity
    ) {
      alert("Please fill all fields before sending inquiry.");
      return;
    }

    const templateParams = {
      name,
      email,
      phone,
      date,
      type,
      time,
      venue,
      capacity,
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE,
      import.meta.env.VITE_EMAILJS_TEMPLATE_CONNECT,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setSuccess(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        date: "",
        type: "",
        time: "",
        venue: "",
        capacity: "",
      });

      setTimeout(() => setSuccess(false), 5000);
    })
    .catch((err) => {
      console.log("EMAIL ERROR:", err);
    });
  };
  return (
    <div className="px-10 py-24 bg-[#faf7f5]">

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT — FORM */}
        <div className="bg-white p-10 rounded-3xl shadow-md">

          <h2 className="text-3xl mb-6">
            Let’s Create Together
          </h2>

          {/* SUCCESS MESSAGE */}
          {success && (
            <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm">
              ✨ Thank you for reaching out! We’ve received your inquiry and will get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg outline-none"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number *"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg outline-none"
            />

            <input
              type="date"
              name="date"
              required
              value={form.date}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg outline-none"
            />

            <select
              name="type"
              onChange={handleChange}
              required
              value={form.type}
              className="w-full border p-3 rounded-lg outline-none"
            >
              <option value="" disabled>
                Select Event Type *
              </option>
              <option value="Doodle Booth">Doodle Booth</option>
              <option value="Glitter Bar">Glitter Bar</option>
              <option value="Canvas Painting">Canvas Painting</option>
              <option value="Clay Mirror">Clay Mirror</option>
              <option value="Kintsugi">Kintsugi</option>
            </select>

            <input
              type="text"
              name="time"
              placeholder="Event Timings *"
              required
              value={form.time}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg outline-none"
            />

            <input
              type="text"
              name="venue"
              placeholder="Venue & City *"
              required
              value={form.venue}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg outline-none"
            />

            <input
              type="number"
              name="capacity"
              placeholder="Number of Guests *"
              required
              value={form.capacity}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg outline-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-full border border-black hover:bg-black hover:text-white transition"
            >
              Send Inquiry
            </button>

          </form>

        </div>

        {/* RIGHT — CONTENT */}
        <div className="pt-10">

          <h2 className="text-4xl mb-6">
            Let’s Bring Your Event to Life
          </h2>

          <p className="mb-6 text-gray-600 leading-relaxed text-justify">
            We’d love to hear about your event and explore how we can
            create a unique artistic experience for your special day.
            Every event is different, and we make sure your experience
            feels personal, engaging, and memorable.
          </p>

          <p className="mb-8 text-gray-600 leading-relaxed">
            Our calendar fills up quickly, so reach out early to check
            availability and plan your event smoothly.
          </p>

          <div className="space-y-4 mb-8 text-sm">
            <p><strong>Email:</strong> nm.arthouse13@gmail.com</p>
            <p><strong>Phone:</strong> +91 8106530465</p>
            <p><strong>Studio:</strong> Based in India, available for travel</p>
          </div>

          <a
            href="https://wa.me/918106530465"
            target="_blank"
            className="inline-block px-6 py-3 rounded-full border border-black hover:bg-black hover:text-white transition"
          >
            Chat on WhatsApp
          </a>

        </div>

      </div>
    </div>
  );
};

export default Connect;