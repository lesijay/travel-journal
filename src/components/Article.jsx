import React from "react";
import "../App.css";
import { HiLocationMarker } from "react-icons/hi";

export default function Article({
  id,
  img,
  country,
  mapLink,
  place,
  date,
  description,
}) {
  return (
    <>
      <article className="journal">
        <div className="journal-img--container">
          <img src={`./assets/${img}`} />
        </div>
        <div className="journal-info">
          <p className="travel--location">
            <span className="location--icon">
              <HiLocationMarker />
            </span>
            <span className="travel--country"> {country} </span>
            <a href={mapLink} className="gray underline">
              View on Google Maps
            </a>
          </p>
          <p className="travel--place">{place}</p>
          <p className="travel-period">{date}</p>
          <p className="place--description">{description}</p>
        </div>
      </article>
    </>
  );
}
