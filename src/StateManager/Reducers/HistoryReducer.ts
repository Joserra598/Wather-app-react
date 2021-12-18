import { AddValueToHistoryInt } from "../interfaces";

interface estadoInt {
	history: string[];
}

const initialState: estadoInt = {
	history: [],
};

type actions = AddValueToHistoryInt;

const HistoryReducer = (estado = initialState, actions: actions) => {
	switch (actions.type) {
		case "ADD_VALUE":
			return { ...estado, history: [actions.payload.value, ...estado.history] };
		default:
			return { ...estado };
	}
};

export default HistoryReducer;
