import { useSelector } from "react-redux";
import { HistoryContainer, TitleSection, Container, HistoryCard, NoSearchHistory } from "./style";
import { AllReducersInt } from "../../StateManager/interfaces";

const HistorySearch = () => {
	const { history } = useSelector((reducer: AllReducersInt) => reducer.historyReducer);
	console.log(history);
	return (
		<HistoryContainer>
			<TitleSection>Recientemente buscaste</TitleSection>
			<Container>
				{history.length === 0 && <NoSearchHistory> Sin busquedas </NoSearchHistory>}
				{history.reverse().map((value) => (
					<HistoryCard>{value}</HistoryCard>
				))}
			</Container>
		</HistoryContainer>
	);
};

export default HistorySearch;
