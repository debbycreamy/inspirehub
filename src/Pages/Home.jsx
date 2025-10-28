import { useEffect } from "react";
import Card from "../Components/Card";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  // ✅ Initialize AOS when page loads
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-pink-50 to-purple-50 py-12 px-6 md:px-12">
      {/* 🌟 Header Section */}
      <div
        className="text-center text-white py-16 mb-16 rounded-3xl shadow-2xl 
        bg-linear-to-r from-blue-600 via-pink-500 to-purple-600"
        data-aos="fade-down"
      >
        <h1
          className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg"
          data-aos="fade-up"
        >
          Welcome!
        </h1>
        <p className="text-xl mt-4 font-light" data-aos="zoom-in">
          This is <span className="font-semibold">Debby’s InspireHub ✨</span>
        </p>
        <p className="mt-2 text-base opacity-90" data-aos="zoom-in">
          Your daily source of positivity, growth, and inspiration.
        </p>
      </div>

      {/* 🌸 Cards Section */}
      <div
        className="grid gap-8 md:grid-cols-3"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {[
          {
            title: "Stay Inspired",
            subtitle: "A fresh dose of motivation every day.",
            image:
              "https://images.unsplash.com/photo-1503264116251-35a269479413?w=800",
            bgcolor: "#E0F7FA",
          },
          {
            title: "Keep Growing",
            subtitle: "Every small step counts towards progress.",
            image:
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800",
            bgcolor: "#FFF3E0",
          },
          {
            title: "Spread Positivity",
            subtitle: "Your smile might inspire someone today.",
            image:
              "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800",
            bgcolor: "#F3E5F5",
          },
        ].map((card, i) => (
          <div
            key={i}
            data-aos="zoom-in-up"
            className="transition transform hover:scale-105 hover:shadow-2xl duration-500"
          >
            <Card {...card} />
          </div>
        ))}
      </div>

      {/* 💬 Footer Quote Section */}
      <div
        className="mt-20 text-center text-gray-600 font-medium"
        data-aos="fade-up"
      >
        <p>
          🌿 “Inspiration exists, but it has to find you working.” – Pablo
          Picasso
        </p>
      </div>
    </div>
  );
}

export default Home;
