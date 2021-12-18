import styled from "styled-components";

export const SectionMenu = styled.figure`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: var(--black-50);
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr;
`;

export const MenuContainer = styled.div`
	width: 90%;
	max-width: 15rem;
	/* min-height: 100%; */
	background-color: var(--neutral-color);
	align-self: start;
	justify-self: center;
	border-radius: 0.5em;
	transform: translateY(25%);
	display: grid;
	grid-auto-rows: 3rem;
	color: black;
	font-family: var(--fn-secundary);
	font-weight: 300;
	padding: 1em;
	gap: 1rem;

	& > svg {
		color: red;
		transform: scale(2);
		justify-self: end;
		&:hover {
			transform: scale(1.9);
			cursor: pointer;
		}
	}
`;

export const OptionContainer = styled.div`
	/* outline: 1px solid red; */
	width: 100%;
	justify-self: start;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;

	& > label {
		font-weight: 400;
	}

	& > select {
		border: none;
		border-radius: 0.3em;
		padding: 0.5em;
		background-color: var(--secundary-color);
		font-weight: 700;
	}
`;

export const ButtonAccept = styled.button`
	align-self: end;
	justify-self: end;
	padding: 0.5em 1em;
	font-family: var(--fn-primary);
	font-weight: 500;
	background-color: var(--confirm-color);
	color: var(--neutral-color);
	border-radius: 0.5em;
	border: none;
	&:hover {
		transform: scale(0.98);
		cursor: pointer;
	}
`;
