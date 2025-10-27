import { useState } from "react";
import Card from "../Components/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
  

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="space-y-4 py-16 text-center bg-linear-to-r from-blue-500 via-pink-500 to-purple-500 text-white rounded-2xl shadow-lg mb-12">
        <h1
          data-aos="fade-up"
          className="text-5xl font-bold tracking-wide drop-shadow-md"
        >
          Welcome!
        </h1>
        <p data-aos="zoom-in" className="text-xl">
          This is Debby's <span className="font-semibold">InspireHub ✨</span>
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card
          title="Stay Inspired"
          subtitle="A fresh dose of motivation every day."
          image="https://images.unsplash.com/photo-1503264116251-35a269479413?w=800"
          bgcolor="#E0F7FA"
        />
        <Card
          title="Keep Growing"
          subtitle="Every small step counts towards progress."
          image="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800"
          bgcolor="#FFF3E0"
        />
        <Card
          title="Spread Positivity"
          subtitle="Your smile might inspire someone today."
          image="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800"
          bgcolor="#F3E5F5"
        />
      </div>
    </div>
  );
}

export default Home;
