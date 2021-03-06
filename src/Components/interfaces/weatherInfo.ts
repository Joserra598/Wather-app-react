export interface WeaterInfoInt {
	air_pressure: number;
	applicable_date: string;
	created: string;
	humidity: number;
	id: number;
	max_temp: number;
	min_temp: number;
	predictability: number;
	the_temp: number;
	visibility: number;
	weather_state_abbr: string;
	weather_state_name: string;
	wind_direction: number;
	wind_direction_compass: string;
	wind_speed: number;
}

export interface AllDataCards {
	weatherInfo: WeaterInfoInt[];
	thumbnailUrl: string;
}
