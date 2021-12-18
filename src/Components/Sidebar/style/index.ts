import styled from "styled-components";

export const Aside = styled.aside`
	grid-area: aside;
	display: grid;
	grid-template-columns: 1fr;
	/* grid-template-rows: max-content 70vh; */
	grid-template-rows: max-content 12rem;
	gap: 2.5rem;
	@media (min-width: 50em) {
		grid-template-rows: max-content 70vh;
	}
`;

export const Cards = styled.section`
	display: grid;
	/* place-items: center; */
	place-items: start;
	gap: 1.2rem;
	grid-auto-flow: column;
	overflow: hidden;
	overflow-x: auto;
	/* overflow-y: auto; */
	@media (min-width: 50em) {
		place-items: center;
		grid-auto-flow: row;
		overflow-x: none;
		overflow-y: auto;
	}
`;

export const TitleSection = styled.h3`
	font-family: var(--fn-secundary);
	font-size: calmp(1rem, 1rem + 1vw, 1.2rem);
	color: var(--light-color);
	font-weight: 500;
`;

export const PreviewCardContainer = styled.figure`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	background-color: var(--black-50);
	border-radius: 0.5em;
	width: 100%;

	min-width: 9rem;
	max-width: 11.25rem;
	aspect-ratio: 1;
	place-items: center;
	padding: 1em;
	font-family: var(--fn-secundary);
	& > h2 {
		font-size: calmp(1rem, 1rem + 1vw, 1.2rem);
		font-weight: 500;
		justify-self: start;
		color: var(--light-color);
	}
	& > img {
		height: 60%;
		max-height: 3rem;
		aspect-ratio: 1;
		justify-self: end;
	}
`;

export const TempText = styled.h2`
	grid-row: 2 / span 3;
	grid-column: 1 / -1;
`;
