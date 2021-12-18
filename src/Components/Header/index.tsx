import { HeaderContainer, SVGContainer, SearchBar, DayPickerPersonalized, DateContainer, FormSearch, SubmitButton } from "./style";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiTwotoneCalendar } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import "react-day-picker/lib/style.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AllReducersInt } from "../../StateManager/interfaces";
import { changeName, clearData, addValueToHistory, changeDate } from "../../StateManager/Actions";
import Menu from "../Menu";

const Header = () => {
	const { text } = useSelector((reducer: AllReducersInt) => reducer.searchReducer);
	const dispatch = useDispatch();
	const [textValue, setText] = useState(text);
	const [showCalendar, setShowCalendar] = useState(false);
	const [Day, setDay] = useState<Date>();
	// * Le sumo 5 días más al acutal como establecer el limte.
	// * 1 día = 86, 400 , 000 milisegundos
	const [limit] = useState(new Date(Date.now() + 5 * 86400000));
	const [menuStatus, setMenuStatus] = useState(false);

	const getLimitTime = (type: "year" | "month" | "day") => {
		const date = new Date(Date.now() + 5 * 86400000);
		if (type === "year") return limit.getUTCFullYear();
		if (type === "month") return limit.getMonth();
		if (type === "day") return +date;
		return 1;
	};

	const handleDayClick = (day: Date) => {
		if (!(day instanceof Date)) return;
		setShowCalendar(false);
		setDay(day);
		dispatch(changeDate(day));
	};

	const handleDeleteDate = () => {
		setDay(undefined);
		dispatch(changeDate(undefined));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		dispatch(clearData);
		e.preventDefault();
		dispatch(changeName(textValue));
		dispatch(addValueToHistory(textValue));
	};

	return (
		<HeaderContainer>
			<SVGContainer>
				<GiHamburgerMenu onClick={() => setMenuStatus(true)} />
			</SVGContainer>

			<FormSearch onSubmit={(e) => handleSubmit(e)}>
				<SearchBar type="text" placeholder="Ubicación" onChange={(e) => setText(e.target.value)} />
				<SVGContainer>
					<AiTwotoneCalendar onClick={() => setShowCalendar(!showCalendar)} />
				</SVGContainer>
				{showCalendar && (
					<DayPickerPersonalized
						fromMonth={new Date(2014, 1)}
						toMonth={new Date(getLimitTime("year"), getLimitTime("month"), 21)}
						fixedWeeks
						selectedDays={Day}
						onDayClick={handleDayClick}
						disabledDays={[{ after: limit }]}
					/>
				)}

				{Day && (
					<DateContainer>
						{" "}
						{new Intl.DateTimeFormat("es-MX", { dateStyle: "medium" }).format(Day)}
						<ImCross onClick={handleDeleteDate} />
					</DateContainer>
				)}
				<SubmitButton type="submit">Buscar</SubmitButton>
			</FormSearch>
			<Menu setMenuStatus={setMenuStatus} menuStatus={menuStatus} />
		</HeaderContainer>
	);
};

export default Header;
