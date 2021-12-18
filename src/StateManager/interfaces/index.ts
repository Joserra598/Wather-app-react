export interface ChangeNameInt {
	type: "CHANGE_NAME";
	payload: { value: string };
}

export interface ChangeDateInt {
	type: "CHANGE_DATE";
	payload: { value: Date | undefined };
}

export interface ChangeCords {
	type: "CHANGE_CORDS";
	payload: { latitude: number; longitude: number };
}

export interface ClearDataInl {
	type: "CLEAR_DATA";
}

export interface AddValueToHistoryInt {
	type: "ADD_VALUE";
	payload: { value: string };
}

export interface ClearDateInl {
	type: "CLEAR_DATE";
}

export interface ChangeOptionsInl {
	type: "CHANGE_OPTIONS";
	payload: { temp: string };
}

export interface AllReducersInt {
	searchReducer: {
		text: string;
		date: Date;
		cords: {
			latitude: undefined;
			longitude: undefined;
		};
	};

	historyReducer: {
		history: string[];
	};

	optionsReducer: initialStateInl;
}

// Interfaces para los estado de los reducers en

export interface initialStateInl {
	temp: "celsius" | "farenheit";
}
