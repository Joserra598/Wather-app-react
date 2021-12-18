import { MainComponent } from "./style";
import HeaderComp from "../Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeCords } from "../../StateManager/Actions";
import ContentComp from "../ContentComp";
import Sidebar from "../Sidebar";
import HistorySearch from "../HistorySearch";

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => dispatch(changeCords(latitude, longitude)),
			() => console.log("can't see you")
		);
	}, [dispatch]);

	return (
		<MainComponent>
			<HeaderComp />
			<ContentComp />
			<Sidebar />
			<HistorySearch />
		</MainComponent>
	);
};

export default App;
