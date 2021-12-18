import { useSelector, useDispatch } from "react-redux";
import { AllReducersInt } from "../StateManager/interfaces";
import { useEffect, useState } from "react";
import axios from "axios";
import { changeCords, changeName } from "../StateManager/Actions";
import { AllDataCards } from "../Components/interfaces/weatherInfo";

const useGetData = () => {
	const { text, cords, date } = useSelector((reducer: AllReducersInt) => reducer.searchReducer);
	const dispatch = useDispatch();
	const [data, setData] = useState<AllDataCards>({ weatherInfo: [], thumbnailUrl: "" });
	useEffect(() => {
		const getData = async () => {
			try {
				const value = await fetch(`https://cros-anywhere.herokuapp.com/https://www.metaweather.com//api/location/search/?lattlong=${cords.latitude},${cords.longitude}`, {
					method: "GET",
				});

				const closeCities = await value.json();
				// console.log(data[0].woeid);

				if (date) {
					const dateFormat = new Intl.DateTimeFormat("es-MX").format(Date.now()).split("/").reverse().join("/");
					console.log(dateFormat);
					const dataWeather = await fetch(`https://cros-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${closeCities[0].woeid}/${dateFormat}/`);

					const responseWeather = await dataWeather.json();
					console.log(responseWeather);
					const URL = await getImgURL();
					setData({ thumbnailUrl: URL, weatherInfo: [...responseWeather] });
					return;
				}

				const dataWeather = await fetch(`https://cros-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${closeCities[0].woeid}/`);

				const responseWeather = await dataWeather.json();

				const URL = await getImgURL();
				setData({ thumbnailUrl: URL, weatherInfo: [...responseWeather.consolidated_weather] });
			} catch (error) {
				console.log("there was an error");
			}
		};

		const getImgURL = async () => {
			const options = {
				method: "GET",
				url: "https://bing-image-search1.p.rapidapi.com/images/search",
				params: { q: `${text}` },
				headers: {
					"x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
					"x-rapidapi-key": process.env.REACT_APP_X_RAPIDAPI_KEY_BING,
				},
			};
			try {
				const value = await axios.request(options as any);
				const URL = value.data.queryExpansions[0].thumbnail.thumbnailUrl;
				return URL;
				// console.log(URL);
				// setData({ ...data, thumbnailUrl: URL });
			} catch (error) {}
		};

		const getNameCity = async () => {
			const options = {
				method: "GET",
				url: "https://google-maps-geocoding.p.rapidapi.com/geocode/json",
				params: { latlng: `${cords.latitude}, ${cords.longitude}`, language: "en" },
				headers: {
					"x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
					"x-rapidapi-key": process.env.REACT_APP_X_RAPIDAPI_KEY_GOOGLE,
				},
			};
			try {
				const respose = await axios.request(options as any);
				const cityName = (respose.data.plus_code.compound_code as string)
					.split(",")[0]
					.split(" ")
					.filter((_, i) => i > 0)
					.join(" ");
				dispatch(changeName(cityName));
				// console.log(cityName);
				// * si no hay nombre primero debo tenerlo.
			} catch (error) {}
		};

		const getCords = async () => {
			try {
				const options = {
					method: "GET",
					url: "https://google-maps-geocoding.p.rapidapi.com/geocode/json",
					params: { address: `${text}`, language: "en" },
					headers: {
						"x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
						"x-rapidapi-key": process.env.REACT_APP_X_RAPIDAPI_KEY_GOOGLE,
					},
				};

				const { data } = await axios.request(options as any);
				const latitude = data.results[0].geometry.location.lat;
				const longitude = data.results[0].geometry.location.lng;
				dispatch(changeCords(latitude, longitude));
				// console.log(value);
			} catch (error) {
				console.log("there was an error");
			}
		};

		if (!text) {
			getNameCity();
			return;
		}
		if ((!cords.latitude || !cords.longitude) && !!text) {
			getCords();
			return;
		}
		setData({ thumbnailUrl: "", weatherInfo: [] });
		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [text, cords.latitude, cords.longitude, dispatch]);

	return data;
};

export default useGetData;
