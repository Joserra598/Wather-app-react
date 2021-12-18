import styled from "styled-components";

export const HistoryContainer = styled.section`
	grid-area: history;
	/* outline: 1px solid red; */
	display: grid;
	align-content: center;
	grid-template-rows: 2.5rem minmax(50%, 5rem);
	padding: 0 2.5em;
`;

export const TitleSection = styled.h2`
	font-family: var(--fn-secundary);
	font-weight: 500;
`;

export const Container = styled.div`
	max-width: 90%;
	overflow: hidden;
	overflow-x: auto;
	display: flex;
	align-items: center;
	& > * + * {
		margin-left: 1.5rem;
	}
`;

export const HistoryCard = styled.figure`
	background-color: var(--primary-color);
	padding: 0.5em 1.5em;
	font-family: var(--fn-secundary);
	font-weight: 500;
	font-size: 1.2rem;
	border-radius: 0.5em;
	/* min-width: 8rem; */
	text-align: center;
`;

export const NoSearchHistory = styled.h2`
	font-family: var(--fn-secundary);
	font-size: 1rem;
	font-weight: 400;
`;
