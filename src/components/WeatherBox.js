import React from "react";

function WeatherBox({ weather }) {
  return (
    <div className="weather-box">
      <div className="temp">{Math.round(weather.main.temp)}°C</div>
      <div className="weather">{weather.weather[0].description}</div>
      <div style={{ color: "#fff", marginTop: "10px" }}>
        💧 {weather.main.humidity}% | 🌬 {Math.round(weather.wind.speed)} m/s
      </div>
    </div>
  );
}

export default WeatherBox;
