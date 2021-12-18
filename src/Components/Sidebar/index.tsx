import { FC } from "react";
import { useSelector } from "react-redux";
import useGetData from "../../hooks/useGetData";
import { AllReducersInt } from "../../StateManager/interfaces";
import { WeaterInfoInt } from "../interfaces/weatherInfo";
import Sppiner from "../Spinner";
import { Aside, TitleSection, PreviewCardContainer, Cards, TempText } from "./style";

const Sidebar = () => {
	const { cords, text, date } = useSelector((reducer: AllReducersInt) => reducer.searchReducer);
	if (!cords.latitude && !cords.latitude && !text) return <NoResult />;
	return <ShowResult date={date} />;
};

const NoResult = () => {
	return (
		<Aside>
			<TitleSection>No se puede mostar ningún resultado</TitleSection>
		</Aside>
	);
};

interface ShowInterface {
	date: Date;
}

const ShowResult: FC<ShowInterface> = ({ date }) => {
	const data = useGetData();
	const { temp } = useSelector((reducer: AllReducersInt) => reducer.optionsReducer);
	const calcTemp = (temperatura: number | undefined) => {
		if (temp === "celsius") return `${temperatura?.toFixed(0)} °C`;
		if (!temperatura) return;
		return `${(temperatura * (9 / 5) + 32).toFixed(0)} °F`;
	};

	if (data.weatherInfo.length === 0)
		return (
			<Aside>
				<TitleSection>No se puede mostar ningún resultado</TitleSection>
				<Sppiner />
			</Aside>
		);

	if (date || data.weatherInfo.length > 8) {
		return (
			<Aside>
				<TitleSection>Resultados no disponibles</TitleSection>
			</Aside>
		);
	}
	return (
		<Aside>
			<TitleSection>Siguientes días</TitleSection>
			<Cards>
				{data.weatherInfo.slice(1).map((info: WeaterInfoInt) => (
					<PreviewCard key={info.id} {...info} calcTemp={calcTemp} />
				))}
			</Cards>
		</Aside>
	);
};

interface previewCardInt extends WeaterInfoInt {
	calcTemp: (temperatura: number | undefined) => string | undefined;
}

const PreviewCard: FC<previewCardInt> = ({ id, applicable_date, the_temp, weather_state_abbr, calcTemp }) => {
	const getDate = () => {
		const date = new Date(applicable_date);
		return new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);
	};
	// getDate();
	return (
		<PreviewCardContainer key={id}>
			<h3>{getDate()} .</h3>
			<img src={`https://www.metaweather.com/static/img/weather/png/${weather_state_abbr}.png`} alt="Icon-weather" />
			<TempText>{calcTemp(the_temp)}</TempText>
		</PreviewCardContainer>
	);
};

export default Sidebar;
