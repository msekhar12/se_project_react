import "./WeatherCard.css";

export default function WeatherCard({ temp }) {
  const heading = `Today is ${temp}° F / You may want to wear:`;
  // console.log(heading);
  return (
    <div>
      <p className="weather-card">{heading}</p>
    </div>
  );
}
