import styled from "styled-components";
import "react-day-picker/lib/style.css";
import DayPicker from "react-day-picker";

export const HeaderContainer = styled.header`
	grid-area: header;
	display: grid;
	grid-template-columns: 3rem auto;
	grid-template-rows: 1fr 1fr;
	grid-template-areas: "menu form" "x form";
	/* outline: 1px solid white; */
	/* place-items: center; */
	position: relative;
	gap: 1rem;
`;

export const FormSearch = styled.form`
	grid-area: form;

	width: 100%;
	min-height: 100%;
	max-width: 40.25em;
	justify-self: center;
	/* outline: 5px solid red; */
	display: grid;
	place-items: center;
	grid-template-columns: 35% auto 3rem;
	grid-template-rows: 1fr 1fr;
	grid-template-areas: "bar bar selector" "submit  date date";
	gap: 0.3rem;
`;

export const SVGContainer = styled.figure`
	/* outline: 1px solid red; */
	height: 100%;
	aspect-ratio: 1;
	display: grid;
	place-items: center;
	& > svg {
		scale: 2;
		transition: 300ms ease fill, 300ms ease transform;
		&:hover {
			fill: var(--primary-color);
			transform: scale(0.9);
			cursor: pointer;
		}
	}
`;

export const SearchBar = styled.input`
	grid-area: bar;
	width: 90%;
	justify-self: start;
	background: var(--primary-color);
	border: none;
	height: 80%;

	border-radius: 0.5em;
	color: white;
	font-family: var(--fn-secundary);
	font-weight: 500;
	padding: 0 0.5em;
	&:focus {
		outline: 3px solid rgba(255, 255, 255, 1);
		outline-offset: 2px;
	}
`;

export const DayPickerPersonalized = styled(DayPicker)`
	position: absolute;
	right: 0%;
	top: 100%;
	background: var(--neutral-color);
	font-family: var(--fn-secundary);
	color: black;
	z-index: 5;
	/* outline: 1px solid red; */
`;

export const DateContainer = styled.div`
	grid-area: date;
	justify-self: end;
	background: var(--primary-color);
	min-width: 10rem;
	color: white;
	font-family: var(--fn-secundary);
	font-weight: 500;
	/* font-size: clamp(0.5rem, 0.5rem + 1vw, 1rem); */
	border-radius: 0.3em;
	padding: 0.3em;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	& > svg {
		fill: red;
		&:hover {
			cursor: pointer;
			transform: scale(0.8);
		}
	}
`;

const GeneralButton = styled.button`
	background: var(--confirm-color);
	font-family: var(--fn-secundary);
	font-weight: 500;
	color: white;
	font-size: 1rem;
	border-radius: 0.5em;
	transition: 300ms ease transform;
	padding: 0.5em 1em;
	&:hover {
		cursor: pointer;
		transform: scale(0.95);
	}
`;

export const SubmitButton = styled(GeneralButton)`
	grid-area: submit;
	max-height: 2rem;
	border: none;
	justify-self: start;
`;
