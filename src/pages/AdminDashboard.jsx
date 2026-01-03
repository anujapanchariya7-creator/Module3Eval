import { useEffect, useState } from "react";
import { getRestaurants, saveRestaurants } from "../utils/localStorage";
import RestaurantCard from "../components/RestaurantCard";
import Navbar from "../components/Navbar";

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [parking, setParking] = useState("");

  const [form, setForm] = useState({
    restaurantName: "",
    address: "",
    type: "",
    parkingLot: "",
    image:
      "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg",
  });

  useEffect(() => {
    setData(getRestaurants());
  }, []);

  const handleAdd = () => {
    if (!form.restaurantName || !form.address || !form.type || form.parkingLot === "") {
      alert("Fill all fields");
      return;
    }

    const newData = [
      ...data,
      { ...form, restaurantID: Date.now(), parkingLot: form.parkingLot === "true" },
    ];

    saveRestaurants(newData);
    setData(newData);
    alert("Restaurant Added");
  };

  const handleDelete = (id) => {
    const updated = data.filter((el) => el.restaurantID !== id);
    saveRestaurants(updated);
    setData(updated);
  };

  const filtered = data.filter((el) => {
    return (
      el.restaurantName.toLowerCase().includes(search.toLowerCase()) &&
      (type ? el.type === type : true) &&
      (parking ? el.parkingLot === (parking === "true") : true)
    );
  });

  return (
    <>
      <Navbar setSearch={setSearch} setType={setType} setParking={setParking} />

      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <input placeholder="Name" onChange={(e) => setForm({ ...form, restaurantName: e.target.value })} />
          <input placeholder="Address" onChange={(e) => setForm({ ...form, address: e.target.value })} />

          <select onChange={(e) => setForm({ ...form, type: e.target.value })}>
            <option value="">Select Type</option>
            <option>Rajasthani</option>
            <option>Gujarati</option>
            <option>Mughlai</option>
            <option>Jain</option>
            <option>Thai</option>
            <option>North Indian</option>
            <option>South Indian</option>
          </select>

          <select onChange={(e) => setForm({ ...form, parkingLot: e.target.value })}>
            <option value="">Parking</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <button onClick={handleAdd}>Add</button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px" }}>
          {filtered.map((el) => (
            <RestaurantCard key={el.restaurantID} data={el} isAdmin onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
