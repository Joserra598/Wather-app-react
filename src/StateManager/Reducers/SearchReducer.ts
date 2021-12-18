import { ChangeNameInt, ChangeCords, ChangeDateInt, ClearDataInl, ClearDateInl } from "../interfaces";

interface initalStateIntl {
	text: string;
	date: Date;
	cords: {
		latitude: number;
		longitude: number;
	};
}

const initialState = {
	text: "",
	date: undefined,
	cords: {
		latitude: undefined,
		longitude: undefined,
	},
};

type actions = ChangeNameInt | ChangeCords | ChangeDateInt | ClearDataInl | ClearDateInl;

const searchReducer = (estado = initialState, action: actions) => {
	switch (action.type) {
		case "CHANGE_NAME":
			return { ...estado, text: action.payload.value };
		case "CHANGE_CORDS":
			return { ...estado, cords: { latitude: action.payload.latitude, longitude: action.payload.longitude } };
		case "CHANGE_DATE":
			return { ...estado, date: action.payload.value };
		case "CLEAR_DATA":
			return { ...estado, cords: { latitude: undefined, longitude: undefined } };

		default:
			return estado;
	}
};

export default searchReducer;
