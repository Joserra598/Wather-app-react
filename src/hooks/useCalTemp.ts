import { useSelector } from "react-redux";
import { AllReducersInt } from "../StateManager/interfaces";

const useCalcTemp = (temperatura: number | undefined) => {
	const { temp } = useSelector((reducer: AllReducersInt) => reducer.optionsReducer);

	if (temp === "celsius") return `${temperatura} °C`;
	if (!temperatura) return;
	return `${temperatura * (9 / 5) + 32} °F`;
};

export default useCalcTemp;
