import { ChangeOptionsInl, initialStateInl } from "../interfaces";

const initialState: initialStateInl = {
	temp: "celsius",
};

type actions = ChangeOptionsInl;

const OptionsReducer = (estado = initialState, actions: actions) => {
	switch (actions.type) {
		case "CHANGE_OPTIONS":
			return { ...actions.payload };
		default:
			return estado;
	}
};

export default OptionsReducer;
