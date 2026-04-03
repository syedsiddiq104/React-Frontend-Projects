import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Collection = () => {
  const [bikes, setBikes] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get("./bikes.json");
        setBikes(response.data.bikes);
      } catch (err) {
        setError("Failed to load bikes");
      } finally {
        setLoading(false);
      }
    };

    fetchApi();
  }, []);

  const FilterBikes = (brand) => {
    if (!Array.isArray(bikes)) return;

    if (brand === "ALL") {
      setFilteredBikes(bikes);
    } else {
      setFilteredBikes(bikes.filter((bike) => bike.brand === brand));
    }
  };

  let navigate = useNavigate();

  const displayBikes =
    Array.isArray(filteredBikes) && filteredBikes.length > 0
      ? filteredBikes
      : Array.isArray(bikes)
        ? bikes
        : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 sm:px-6 lg:px-10 py-10 cursor-grab active:cursor-grabbing">
      {loading && <p className="text-center text-gray-400">Loading bikes...</p>}

      {error && <p className="text-center text-red-500 text-4xl">{error}</p>}

      <button
        onClick={() => navigate(-1)}
        className=" top-6 left-[7%] sticky z-40 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition"
      >
        ←
      </button>

      <div className="m-20">
        <ul className="flex flex-row  gap-5 items-center justify-center flex-wrap ">
          <li
            className="cursor-pointer border-2 rounded-xl p-1 whitespace-nowrap flex-1 text-center bg-white text-black font-bold"
            onClick={() => FilterBikes("ALL")}
          >
            ALL
          </li>
          <li
            className="cursor-pointer border-2 rounded-xl p-1 whitespace-nowrap flex-1 text-center bg-white text-black font-bold"
            onClick={() => FilterBikes("Yamaha")}
          >
            YAMAHA
          </li>
          <li
            className="cursor-pointer border-2 rounded-xl p-1 whitespace-nowrap flex-1 text-center bg-white text-black font-bold"
            onClick={() => FilterBikes("Royal Enfield")}
          >
            ROYAL ENFIELD
          </li>
          <li
            className="cursor-pointer border-2 rounded-xl p-1 whitespace-nowrap flex-1 text-center bg-white text-black font-bold"
            onClick={() => FilterBikes("Bajaj")}
          >
            BAJAJ
          </li>
          <li
            className="cursor-pointer border-2 rounded-xl p-1 whitespace-nowrap flex-1 text-center bg-white text-black font-bold"
            onClick={() => FilterBikes("KTM")}
          >
            KTM
          </li>
          <li
            className="cursor-pointer border-2 rounded-xl p-1 whitespace-nowrap flex-1 text-center bg-white text-black font-bold"
            onClick={() => FilterBikes("Honda")}
          >
            HONDA
          </li>
          <li
            className="cursor-pointer border-2 rounded-xl p-1 whitespace-nowrap flex-1 text-center bg-white text-black font-bold"
            onClick={() => FilterBikes("Suzuki")}
          >
            SUZUKI
          </li>
          <li
            className="cursor-pointer border-2 rounded-xl p-1 whitespace-nowrap flex-1 text-center bg-white text-black font-bold"
            onClick={() => FilterBikes("TVS")}
          >
            TVS
          </li>
          <li
            className="cursor-pointer border-2 rounded-xl p-1 whitespace-nowrap flex-1 text-center bg-white text-black font-bold"
            onClick={() => FilterBikes("Kawasaki")}
          >
            KAWASAKI
          </li>
          <li
            className="cursor-pointer border-2 rounded-xl p-1 whitespace-nowrap flex-1 text-center bg-white text-black font-bold"
            onClick={() => FilterBikes("Hero")}
          >
            HERO
          </li>
        </ul>
      </div>

      {!loading && !error && (
        <div className=" relative flex flex-wrap gap-6 justify-center   ">
          {displayBikes.map((bike) => (
            <div
              key={bike.id}
              className="group relative bg-[#f5f5f5] text-black rounded-3xl p-4 w-[280px] shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-300 overflow-hidden cursor-pointer active:cursor-grabbing
              "
              onClick={() => navigate(`/bikes/${bike.id}`)}
            >
              <div className="w-full h-40 flex items-center justify-evenly ">
                <img
                  src={bike.image || "/fallback.png"}
                  alt={bike.model}
                  className="h-full object-contain transition-transform duration-300 group-hover:scale-125 "
                />
              </div>

              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="text-xs border-2 border-black bg-gray-200 px-2 py-1 rounded-full">
                  {bike.type}
                </span>
                <span className="text-xs border-2 border-black bg-gray-200 px-2 py-1 rounded-full">
                  {bike.engine}
                </span>
                <span className="text-xs border-2 border-black bg-gray-200 px-2 py-1 rounded-full">
                  {bike.abs}
                </span>
              </div>

              <h2 className="text-xl font-bold mt-3">
                {bike.brand} {bike.model}
              </h2>

              <p className="text-gray-500 text-sm">{bike.power}</p>

              <p className="text-gray-600 text-xs mt-2 line-clamp-2">
                {bike.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
