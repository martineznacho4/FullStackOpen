import axios from "axios";
import { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const baseWeatherApiURL = "https://api.openweathermap.org/data/2.5/weather";

// console.log(apiKey);

// lat={lat}&
// lon={lon}&
// appid={API key}

const Country = ({ country, states, setters }) => {
	const countryName = country.name.common;

	axios
		.get(
			`${baseWeatherApiURL}?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${apiKey}&units=metric`
		)
		.then((response) => {
			console.log(response);

			setters.setWeatherIcon(response.data.weather[0].icon);
			setters.setTemperature(response.data.main.temp);
			setters.setWind(response.data.wind.speed);
		});
	return (
		<div>
			<h3>{countryName}</h3>

			<p>Capital: {country.capital[0]}</p>
			<p>Area: {country.area}</p>

			<b>Languages: </b>
			<ul>
				{Object.values(country.languages).map((language) => (
					<li key={language}>{language}</li>
				))}
			</ul>
			<img src={country.flags.png} alt={country.flags.alt} />

			<h5>Weather in {countryName}</h5>
			<p>Temperature: {states.temperature}</p>
			<img
				src={`https://openweathermap.org/img/wn/${states.weatherIcon}@2x.png`}
				alt=""
			/>
			<p>Wind: {states.wind}</p>
		</div>
	);
};

const RenderCountries = ({ states, setters }) => {
	const matchingCountries = states.fetchedCountries.filter((country) =>
		country.name.common
			.toLowerCase()
			.includes(states.newCountry.toLowerCase())
	);

	if (matchingCountries.length > 10) {
		return <div>Too many matches, specify another filter</div>;
	} else if (matchingCountries.length == 1) {
		return (
			<Country
				country={matchingCountries[0]}
				states={states}
				setters={setters}
			/>
		);
	}

	return (
		<>
			{matchingCountries.map((country) => (
				<div key={country.name.common}>{country.name.common}</div>
			))}
		</>
	);
};

const CountryApp = () => {
	useEffect(() => {
		const baseURL = "https://studies.cs.helsinki.fi/restcountries/api/all";

		axios.get(baseURL).then((response) => {
			setCountries(response.data);
		});
	}, []);

	const [fetchedCountries, setCountries] = useState([]);
	const [renderedCountries, setRenderedCountries] = useState([]);
	const [newCountry, setNewCountry] = useState("");
	const [temperature, setTemperature] = useState(0);
	const [wind, setWind] = useState(0);
	const [weatherIcon, setWeatherIcon] = useState("");

	const states = {
		fetchedCountries,
		newCountry,
		renderedCountries,
		temperature,
		wind,
		weatherIcon,
	};

	const setters = {
		setCountries,
		setRenderedCountries,
		setNewCountry,
		setTemperature,
		setWind,
		setWeatherIcon,
	};

	const handleCountrySearch = (e) => {
		setNewCountry(e.target.value);
	};

	return (
		<div>
			<input value={newCountry} onChange={handleCountrySearch} />

			<RenderCountries states={states} setters={setters} />
		</div>
	);
};

export default CountryApp;
