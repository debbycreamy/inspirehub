import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ duration: 1000 });

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div
        className="max-w-md w-full bg-white shadow-lg p-8 rounded-2xl"
        data-aos="zoom-in"
      >
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold mb-6 text-center text-purple-600">
              Contact Us
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <textarea
              placeholder="Your Message"
              className="w-full border p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded w-full font-semibold transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        ) : (
          <h2 className="text-center text-xl font-semibold text-green-600 animate-bounce">
            Thanks {name}! We’ve received your message 💌
          </h2>
        )}
      </div>
    </div>
  );
}

export default Contact;
