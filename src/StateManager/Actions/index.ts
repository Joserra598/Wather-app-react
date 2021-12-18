import { ChangeNameInt, ChangeCords, ChangeDateInt, ClearDataInl, AddValueToHistoryInt, ChangeOptionsInl } from "../interfaces";

export const defautl = { type: "DEFAULT_ACTION" };

export const changeName = (value: string): ChangeNameInt => {
	return { type: "CHANGE_NAME", payload: { value } };
};

export const changeDate = (value: Date | undefined): ChangeDateInt => {
	return { type: "CHANGE_DATE", payload: { value } };
};

export const changeCords = (latitude: number, longitude: number): ChangeCords => {
	return { type: "CHANGE_CORDS", payload: { latitude, longitude } };
};

export const addValueToHistory = (value: string): AddValueToHistoryInt => {
	return { type: "ADD_VALUE", payload: { value } };
};
export const clearData: ClearDataInl = { type: "CLEAR_DATA" };

export const changeOptions = (temp: "celsius" | "farenheit"): ChangeOptionsInl => {
	return { type: "CHANGE_OPTIONS", payload: { temp } };
};
