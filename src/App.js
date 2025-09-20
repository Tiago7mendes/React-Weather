import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import LocationBox from "./components/LocationBox";
import WeatherBox from "./components/WeatherBox";

const api = {
  key: "8d236709f41a01b8ba396ae02c7db047",
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const search = async (evt) => {
    if (evt.key === "Enter" && query.trim() !== "") {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(
          `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`
        );
        const result = await res.json();

        if (result.cod !== 200) {
          setError(result.message);
          setWeather(null);
        } else {
          setWeather(result);
        }
      } catch (err) {
        setError("Erro ao buscar dados. Tente novamente.");
      } finally {
        setLoading(false);
        setQuery("");
      }
    }
  };

  const dateBuilder = (d) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const days = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        weather && weather.main
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <SearchBox query={query} setQuery={setQuery} onSearch={search} />

        {loading && <p style={{ color: "white", textAlign: "center" }}>Loading...</p>}

        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

        {weather && weather.main && !loading && !error && (
          <>
            <LocationBox weather={weather} dateBuilder={dateBuilder} />
            <WeatherBox weather={weather} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
