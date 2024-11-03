import React from "react";
import { Link, useParams } from "react-router-dom";
// import { roomItems } from "../data/Data";
import { roomItems } from "../components/data/Data.jsx";

const RoomDetails = () => {
  const { id } = useParams();
  const room = roomItems.find((item) => item.id === parseInt(id)); // Find the room by ID

  if (!room) {
    return (
      <div className="text-center py-5">
        <h2>Room not found</h2>
      </div>
    ); // Handle case where room is not found
  }

  return (
    <div className="container py-5">
      <style>
        {`
          .room-image {
            border-radius: 0.5rem; /* Rounded corners */
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Soft shadow */
          }

          .room-title {
            font-size: 2.5rem; /* Title size */
            font-weight: bold; /* Bold title */
            color: #333; /* Title color */
            margin-bottom: 1rem; /* Spacing below title */
          }

          .room-description {
            font-size: 1.1rem; /* Description size */
            color: #555; /* Description color */
            margin-bottom: 1.5rem; /* Spacing below description */
          }

          .room-price {
            font-size: 1.5rem; /* Price size */
            color: #007bff; /* Primary color */
            margin-bottom: 1rem; /* Spacing below price */
            font-weight: bold; /* Bold price */
          }

          .btn {
            transition: background-color 0.3s ease;
          }

          .btn-primary:hover {
            background-color: #0056b3; /* Darker blue for hover effect */
          }

          .btn-secondary:hover {
            background-color: #6c757d; /* Darker gray for hover effect */
          }
        `}
      </style>
      <div className="row">
        <div className="col-lg-6">
          <img
            src={room.img}
            alt={room.name}
            className="img-fluid room-image"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="room-title">{room.name}</h1>
          <p className="room-description">{room.description}</p>
          <h5 className="room-price">
            Price: <span>{room.price}</span>
          </h5>
          {/* Add any other details you want to display */}
          <Link to="/booking" className="btn btn-primary rounded py-2 px-4 me-2">
            Book Now
          </Link>
          <Link to="/" className="btn btn-secondary rounded py-2 px-4">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
