import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const BikeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bike, setBike] = useState(null);

  useEffect(() => {
  const fetchBike = async () => {
    try {
      const res = await axios.get("/bikes.json");
      const bike = res.data.find((b) => b.id === Number(id));
      setBike(bike);
    } catch (err) {
      console.error("Error fetching bike:", err);
    }
  };
  fetchBike();
}, [id]);

  if (!bike) return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center p-4 sm:p-6 lg:p-10">
      <div className="relative w-full max-w-6xl border border-white/30 rounded-3xl p-4 sm:p-6 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-7 left-7 bg-white/20 z-99 text-black px-4 py-2 rounded-full border border-black/30 hover:bg-white/30 transition"
        >
          ←
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-white/30 rounded-2xl flex items-center justify-center h-[250px] md:h-[350px] lg:h-[400px] bg-white">
            <img
              src={bike.image}
              alt={bike.model}
              className="h-full object-contain"
            />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="border border-white/30 rounded-2xl p-4 flex flex-col sm:flex-row justify-between gap-4">
              <div>
                <p className="text-gray-400 text-sm">Type</p>
                <p className="font-semibold">{bike.type}</p>

                <p className="text-gray-400 text-sm mt-2">Engine</p>
                <p className="font-semibold">{bike.engine}</p>
              </div>

              <div className="sm:text-right">
                <p className="text-gray-400 text-sm">Top Speed</p>
                <p className="font-semibold">{bike.topSpeed}</p>

                <p className="text-gray-400 text-sm mt-2">Mileage</p>
                <p className="font-semibold">{bike.mileage}</p>
              </div>
            </div>

            <div className="border border-white/30 rounded-2xl p-4 flex flex-col gap-2 text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl font-bold">
                {bike.brand} {bike.model}
              </h1>
              <p className="text-gray-400 text-sm">{bike.power}</p>
              <p className="text-gray-300 text-sm">{bike.description}</p>
            </div>

            <div className="border border-white/30 rounded-2xl p-4 flex justify-center">
              <button className="border border-white/40 px-6 sm:px-10 py-2 sm:py-3 rounded-xl hover:bg-white hover:text-black transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeDetails;
