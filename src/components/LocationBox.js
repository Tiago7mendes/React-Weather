import React from "react";

function LocationBox({ weather, dateBuilder }) {
  return (
    <div className="location-box">
      <div className="location">
        {weather.name}, {weather.sys.country}
      </div>
      <div className="date">{dateBuilder(new Date())}</div>
    </div>
  );
}

export default LocationBox;
