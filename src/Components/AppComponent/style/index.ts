import styled from "styled-components";

export const MainComponent = styled.main`
	/* outline: 1px solid white; */
	width: 98%;
	max-width: 93.75rem;
	min-height: 48.25rem;
	padding-bottom: 5em;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 5rem 5rem auto 10rem;
	grid-template-areas: "header" "history" "content" "aside";
	gap: 2rem;
	@media (min-width: 50em) {
		padding: 0;
		gap: 0rem;
		& {
			grid-template-columns: 70% 30%;
			grid-template-rows: 5rem auto 10rem;
			grid-template-areas: "header x" "content aside" "history aside";
		}
	}
`;
