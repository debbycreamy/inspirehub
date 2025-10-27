function Card({ title, subtitle, image, bgcolor, textcolor }) {
  return (
    <div
      className="rounded-2xl p-4 shadow-md hover:shadow-lg transition-transform hover:scale-120"
      style={{
        backgroundColor: bgcolor || "#ffffff",
        color: textcolor || "#000000",
      }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-xl mb-3"
      />
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm">{subtitle}</p>
    </div>
  );
}

export default Card;
