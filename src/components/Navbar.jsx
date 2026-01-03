import { useRef, useEffect } from "react";

const Navbar = ({ setSearch, setType, setParking }) => {
  const searchRef = useRef();

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <div className="navbar">
      <input
        ref={searchRef}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setType(e.target.value)}>
        <option value="">All Types</option>
        <option>Rajasthani</option>
        <option>Gujarati</option>
        <option>Mughlai</option>
        <option>Jain</option>
        <option>Thai</option>
        <option>North Indian</option>
        <option>South Indian</option>
      </select>

      <select onChange={(e) => setParking(e.target.value)}>
        <option value="">All Parking</option>
        <option value="true">Parking</option>
        <option value="false">No Parking</option>
      </select>
    </div>
  );
};

export default Navbar;