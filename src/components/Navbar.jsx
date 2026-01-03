const Navbar = ({ setSearch, setType, setParking }) => {
  return (
    <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
      <input placeholder="Search" onChange={(e) => setSearch(e.target.value)} />

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
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
    </div>
  );
};

export default Navbar;
