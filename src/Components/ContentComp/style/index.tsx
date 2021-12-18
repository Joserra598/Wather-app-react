import styled from "styled-components";

export const ContentSection = styled.section`
	grid-area: content;
	/* outline: 1px solid red; */
	display: grid;
`;

export const NoResultContainer = styled.section`
	grid-area: content;
	/* outline: 1px solid red; */
	place-self: center;
	display: grid;
	place-items: center;
	gap: 2rem;
	& > img {
		border-radius: 0.5em;
		width: 95%;
		max-width: 25rem;
	}
`;

export const Title = styled.h2`
	font-family: var(--fn-primary);
	font-weight: 500;
`;

export const ResultSection = styled.section`
	display: grid;
	place-items: center;
	grid-area: content;
	grid-template-columns: 1fr;
	grid-template-rows: 18rem 15rem;
`;

export const ImgContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 2.5rem 3rem auto;
	width: 80%;
	max-height: 18rem;

	& > img {
		grid-columns: 1 / -1;
		/* grid-rows: 1 / -1; */
		height: 18rem;
		width: 100%;
		object-fit: cover;
		border-radius: 0.5em;
	}
`;

export const FechaText = styled.h2`
	/* grid-columns: 1 / -1;
	grid-rows: 1 / 2; */
	margin: 0 auto;
	font-family: var(--fn-secundary);
	font-weight: 600;
	font-size: clamp(0.8rem, 0.8rem + 1vw, 1.5rem);
	color: var(--black-75);
	background: rgba(255, 255, 255, 0.3);
	height: max-content;
	padding: 0.2rem 1em;
	border-radius: 0.2em;
`;

export const CityName = styled.h2`
	color: white;
	background-color: var(--black-50);
	backdrop-filter: 25px;
	outline: 4px solid white;
	width: 90%;
	max-width: 25rem;
	margin: 0 auto;
	text-align: center;
	padding: 0.5em 0;
	font-family: var(--fn-primary);
	font-weight: 500;
`;

export const InfoCard = styled.figure`
	background-color: white;
	color: rgba(0, 0, 0, 0.7);
	width: 90%;
	max-width: 45rem;
	display: grid;
	place-items: center;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 2rem 3rem 2rem;
	grid-template-areas: "min current max" "Cmin current Cmax" "humedad current probabilidad";
	border-radius: 0.5em;
	font-family: var(--fn-secundary);
	& h3 {
		font-weight: 600;
	}
`;

export const PrimaryText = styled.h3`
	color: var(--black-75);
	font-size: clamp(1.2rem, 1vw + 1rem, 1rem);
	/* font-weight: 500; */
`;

export const SecundaryText = styled.h3`
	color: var(--black-25);
	font-size: clamp(0.8rem, 1vw + 0.5rem, 1rem);
`;

export const CurrentTempSection = styled.section`
	grid-area: current;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	width: 90%;
	border-left: 3px solid var(--secundary-color);
	border-right: 3px solid var(--secundary-color);

	& > img {
		width: 2rem;
		aspect-ratio: 1;
	}
`;

export const LoadText = styled.h3`
	font-family: var(--fn-primary);
	font-weight: 500;
	color: var(--neutral-color);
`;
