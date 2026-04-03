import BounceCards from "../../components/BounceCards";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const images = [
    "/Bikesimages/image copy 2.png",
    "/Bikesimages/image copy 9.png",
    "/Bikesimages/image copy 17.png",
    "/Bikesimages/image copy 8.png",
    "/Bikesimages/image copy 4.png",
    "/Bikesimages/image copy 12.png",
    "/Bikesimages/image copy 13.png",
  ];

  const transformStyles = images.map((_, i) => {
    const total = images.length;

    const center = (total - 1) / 2;
    const offset = i - center;
    const spacing = 90;
    const rotation = offset * 3;
    return `rotate(${rotation}deg) translate(${offset * spacing}px)`;
  });


  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-wide text-center">
        Ride the Future
      </h1>

      <p className="text-gray-400 text-center max-w-xl mb-10 text-sm sm:text-base md:text-lg">
        Discover premium bikes built for power, speed, and style. Your dream
        machine starts here.
      </p>

      <div
        className="mb-12 w-full flex justify-center overflow-hidden cursor-grab active:cursor-grabbing "
        onClick={() => navigate("/bikes/collection/")}
      >
        <BounceCards
          images={images}
          containerWidth={
            window.innerWidth < 640 ? 300 : window.innerWidth < 1024 ? 500 : 800
          }
          containerHeight={
            window.innerWidth < 640 ? 250 : window.innerWidth < 1024 ? 300 : 400
          }
          animationDelay={1}
          animationStagger={0.19}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
          enableHover={window.innerWidth > 768}
        />
      </div>

      <button
        onClick={() => navigate("/bikes/collection")}
        className="border border-gray-700 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105 hover:border-red-600 hover:shadow-red-500/30"
      >
        Explore Collection →
      </button>
    </div>
  );
};

export default Index;
