import { useState, useEffect } from "react";
import Card from "../Components/Card";
import AOS from "aos";
import "aos/dist/aos.css";

function Gallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const imgs = [
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800",
      "https://images.unsplash.com/photo-1473186505569-9c61870c11f9?w=800",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800",
    ];
    setPhotos(imgs);
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="text-center py-10 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl shadow-md mb-8 mx-4">
        <h1 className="text-4xl font-bold mb-2" data-aos="fade-down">
          The Gallery 📸
        </h1>
        <p className="text-lg" data-aos="fade-up">
          Explore moments of creativity and color.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 p-8">
        {photos.map((img, i) => (
          <div data-aos="zoom-in" data-aos-delay={i * 150} key={i}>
            <Card
              title={`Gallery ${i + 1}`}
              subtitle="A snapshot of creativity."
              image={img}
              bgcolor="#E8EAF6"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
