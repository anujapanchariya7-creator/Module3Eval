import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ data, isAdmin, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img src={data.image} alt="" />
      <h3>{data.restaurantName}</h3>
      <p>{data.address}</p>
      <p>{data.type}</p>
      <p>{data.parkingLot ? "Parking Available" : "No Parking"}</p>

      {isAdmin && (
        <>
          <button onClick={() => navigate(`/admin/restaurants/update/${data.restaurantID}`)}>
            Update
          </button>
          <button onClick={() => onDelete(data.restaurantID)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default RestaurantCard;