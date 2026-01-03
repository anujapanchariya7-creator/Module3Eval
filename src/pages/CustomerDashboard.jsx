import { useState, useEffect } from "react";
import { getRestaurants } from "../utils/localStorage";
import RestaurantCard from "../components/RestaurantCard";
import Navbar from "../components/Navbar";

const CustomerDashboard = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [parking, setParking] = useState("");

  useEffect(() => {
    setData(getRestaurants());
  }, []);

  const filtered = data.filter((el) => {
    return (
      (el.restaurantName.toLowerCase().includes(search.toLowerCase()) ||
        el.address.toLowerCase().includes(search.toLowerCase())) &&
      (type ? el.type === type : true) &&
      (parking ? el.parkingLot === (parking === "true") : true)
    );
  });

  return (
    <>
      <Navbar setSearch={setSearch} setType={setType} setParking={setParking} />
      <div className="list">
        {filtered.map((el) => (
          <RestaurantCard key={el.restaurantID} data={el} />
        ))}
      </div>
    </>
  );
};

export default CustomerDashboard;