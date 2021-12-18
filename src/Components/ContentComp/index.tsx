import { useSelector } from "react-redux";
import useGetData from "../../hooks/useGetData";
import { AllReducersInt } from "../../StateManager/interfaces";
import Sppiner from "../Spinner";
import { NoResultContainer, Title, ImgContainer, ResultSection, InfoCard, PrimaryText, SecundaryText, CurrentTempSection, FechaText, CityName, LoadText } from "./style";

const ContentComp = () => {
	const { cords, text } = useSelector((reducer: AllReducersInt) => reducer.searchReducer);
	if (!cords.latitude && !cords.latitude && !text) return <NoResult />;
	return <ShowResult />;
};

const NoResult = () => {
	return (
		<NoResultContainer>
			<Title>No tengo resultados para tu busqueda</Title>
			<img src="https://cdn.dribbble.com/users/760295/screenshots/4433975/media/03494b209a1511a61868ced337b97931.png?compress=1&resize=400x300" alt="" />
		</NoResultContainer>
	);
};

const ShowResult = () => {
	const data = useGetData();
	const { temp } = useSelector((reducer: AllReducersInt) => reducer.optionsReducer);
	const calcTemp = (temperatura: number | undefined) => {
		if (temp === "celsius") return `${temperatura?.toFixed(0)} °C`;
		if (!temperatura) return;
		return `${(temperatura * (9 / 5) + 32).toFixed(0)} °F`;
	};

	const { text, date } = useSelector((reducer: AllReducersInt) => reducer.searchReducer);

	const formatDate = () => {
		return new Intl.DateTimeFormat("es-Mx", { dateStyle: "full" }).format(date);
	};

	if (data.weatherInfo.length === 0)
		return (
			<ResultSection>
				<LoadText>Cargando...</LoadText>
				<Sppiner />
			</ResultSection>
		);

	return (
		<ResultSection>
			<ImgContainer>
				<img src={`${data.thumbnailUrl}`} alt="city-img" />
				<FechaText>{formatDate()} </FechaText>
				<CityName> {`${text[0].toLocaleUpperCase()}${text.slice(1)}`}</CityName>
			</ImgContainer>

			<InfoCard>
				<SecundaryText style={{ gridArea: "min" }}>Min.</SecundaryText>
				<SecundaryText style={{ gridArea: "max" }}>Max.</SecundaryText>
				<PrimaryText style={{ gridArea: "Cmin" }}>{calcTemp(data.weatherInfo[0].min_temp)} </PrimaryText>
				<PrimaryText style={{ gridArea: "Cmax" }}>{calcTemp(data.weatherInfo[0].max_temp)} </PrimaryText>
				<CurrentTempSection>
					<img src={`https://www.metaweather.com/static/img/weather/png/${data.weatherInfo[0].weather_state_abbr}.png`} alt="" />
					<PrimaryText>{calcTemp(data.weatherInfo[0].the_temp)} </PrimaryText>
				</CurrentTempSection>
				<SecundaryText style={{ gridArea: "probabilidad" }}>Prob: {data.weatherInfo[0].predictability} %</SecundaryText>
				<SecundaryText style={{ gridArea: "humedad" }}>Humedad: {data.weatherInfo[0].humidity} %</SecundaryText>
			</InfoCard>
		</ResultSection>
	);
};

export default ContentComp;
