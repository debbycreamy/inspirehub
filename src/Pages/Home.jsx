import { useEffect } from "react";
import { motion } from "framer-motion";
import Card from "../Components/Card";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  // Initialize AOS only once when the component loads
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="min-h-screen bg-linear-gradient-to-br from-blue-50 via-pink-50 to-purple-100 py-12 px-6 md:px-12"
    >
      {/* 🌟 Header Section */}
      <div
        className="text-center text-white py-16 mb-16 rounded-3xl shadow-2xl 
        bg-linear-to-r from-blue-600 via-pink-500 to-purple-600"
        data-aos="fade-down"
      >
        <motion.h1
          data-aos="fade-up"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg"
        >
          Welcome!
        </motion.h1>

        <p data-aos="zoom-in" className="text-xl mt-4 font-light tracking-wide">
          This is <span className="font-semibold">Debby’s InspireHub ✨</span>
        </p>
        <p className="mt-2 text-base opacity-90" data-aos="zoom-in">
          Your daily space for positivity, growth, and inspiration.
        </p>
      </div>

      {/* 💫 Cards Section */}
      <motion.div
        className="grid gap-8 md:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { delayChildren: 0.3, staggerChildren: 0.3 },
          },
        }}
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
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotate: 0.5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="transition rounded-2xl overflow-hidden shadow-md hover:shadow-2xl"
            data-aos="zoom-in-up"
          >
            <Card {...card} />
          </motion.div>
        ))}
      </motion.div>

      {/* 💬 Footer Quote Section */}
      <motion.div
        className="mt-20 text-center text-gray-600 font-medium"
        data-aos="fade-up"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>
          🌿 “Inspiration exists, but it has to find you working.” —{" "}
          <span className="font-semibold text-gray-800">Pablo Picasso</span>
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Home;
