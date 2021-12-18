import styled, { keyframes } from "styled-components";

const Rotating = keyframes`
	from{
		transform: rotate(0deg);
	}
	to{
		transform: rotate(360deg); 
	}
`;

const Sppiner = () => {
	return <Spinner></Spinner>;
};

const Spinner = styled.figure`
	width: 50px;
	aspect-ratio: 1;
	border-radius: 50%;
	border: 5px solid var(--confirm-color);
	border-bottom: 5px solid var(--secundary-color);
	align-self: center;
	justify-self: center;
	animation: ${Rotating} 0.8s linear infinite;
`;

export default Sppiner;
