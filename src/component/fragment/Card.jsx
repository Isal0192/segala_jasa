import { useState } from "react";
import PropTypes from "prop-types";

const categories = ["Populer", "|", "New"];
const colors = ["red", "purple", "yellow"];
const borderColors = [
  "border-[#FF2D2D]", // Card 1
  "border-[#7104FF]", // Card 2
  "border-[#FBFF0D]", // Card 3
  "border-[#FFFFFF]", // Card 4
  "border-[#39FF14]", // Card 5
]; 

const cardData = {
  Populer: [
    { name: "Populer Card 1", image: "/path/to/populer1.jpg" },
    { name: "Populer Card 2", image: "/path/to/populer2.jpg" },
    { name: "Populer Card 3", image: "/path/to/populer3.jpg" },
    { name: "Populer Card 4", image: "/path/to/populer3.jpg" },
    { name: "Populer Card 5", image: "/path/to/populer3.jpg" },
    { name: "Populer Card 6", image: "/path/to/populer6.jpg" },
    { name: "Populer Card 7", image: "/path/to/populer7.jpg" },
    { name: "Populer Card 8", image: "/path/to/populer7.jpg" },
    { name: "Populer Card 9", image: "/path/to/populer7.jpg" },
    { name: "Populer Card 10", image: "/path/to/populer7.jpg" },
  ],
  New: [
    { name: "New Card 1", image: "/path/to/new1.jpg" },
    { name: "New Card 2", image: "/path/to/new2.jpg" },
    { name: "New Card 3", image: "/path/to/new3.jpg" },
    { name: "New Card 4", image: "/path/to/new3.jpg" },
    { name: "New Card 5", image: "/path/to/new3.jpg" },
    { name: "New Card 6", image: "/path/to/new6.jpg" },
    { name: "New Card 7", image: "/path/to/new7.jpg" },
    { name: "New Card 8", image: "/path/to/new7.jpg" },
  ],
};

const Card = ({ color, name, image, borderColor }) => (
  <div className={`bg-gray-800 text-white p-4 w-64 h-64 flex flex-col items-center justify-center border-b-6 ${borderColor}`}>
    <p className="text-lg font-semibold">{name}</p>
    <div className={`h-1 w-full ${color && `bg-${color}`}`} />
    <img src={image} alt={name} className="w-full h-32 object-cover mt-2" />
  </div>
);

Card.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired, // Menambahkan prop borderColor
};

const CardComponent = () => {
  const [activeTab, setActiveTab] = useState("Populer");
  const [visibleCards, setVisibleCards] = useState({
    Populer: 5,
    New: 5,
  });

  const handleShowMore = () => {
    setVisibleCards((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab] + 5,
    }));
  };

  // Ambil data kartu sesuai kategori yang aktif
  const cardsToDisplay = cardData[activeTab] || [];

  return (
    <div className="min-h-screen p-5 text-white">
      {/* Tabs Kategori */}
      <div className="flex space-x-4 mb-4">
        {categories.map((category) => {
          if (category === "|") {
            return <span key={category} className="text-white">|</span>;
          }
          return (
            <button
              key={category}
              className={`text-lg font-semibold ${activeTab === category ? "text-white" : "text-gray-400"}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          );
        })}
      </div>

      

      {/* Grid Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-13 justify-items-center">
        {cardsToDisplay.slice(0, visibleCards[activeTab]).map((card, index) => (
          <Card
            key={index}
            color={colors[index % colors.length]}
            name={card.name}
            image={card.image}
            borderColor={borderColors[index % borderColors.length]} // Menetapkan borderColor secara dinamis
          />
        ))}
      </div>

      {/* Tombol Show More */}
      <div className="flex justify-center mt-4">
        {visibleCards[activeTab] < cardsToDisplay.length && (
          <button
            className="bg-green-600 text-white px-8 py-3 w-70  rounded-xl hover:bg-green-500"
            onClick={handleShowMore}
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
