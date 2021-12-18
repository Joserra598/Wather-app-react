import { FC, useRef } from "react";
import { SectionMenu, MenuContainer, OptionContainer, ButtonAccept } from "./style";
import { FaWindowClose } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { changeOptions } from "../../StateManager/Actions";

interface MenuInt {
	menuStatus: boolean;
	setMenuStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: FC<MenuInt> = ({ menuStatus, setMenuStatus }) => {
	const Options = useRef<HTMLDivElement>(null);
	const dispatch = useDispatch();
	const handleSelected = () => {
		if (!Options) return;
		const Nodes = Options.current?.childNodes;
		if (!Nodes) return;
		const childs = Array.from(Nodes).filter((val) => val.nodeName === "SELECT");
		const arrayValues = childs.map((element: any) => [element.name, element.value]);
		const AllSelected = Object.fromEntries(arrayValues);
		// console.log(AllSelected);
		dispatch(changeOptions(AllSelected.temp));
	};

	return (
		<>
			{menuStatus && (
				<SectionMenu>
					<MenuContainer>
						<FaWindowClose onClick={() => setMenuStatus(false)} />
						<OptionContainer ref={Options}>
							<label htmlFor="temp">Temperatura.</label>
							<select name="temp">
								<option value="celsius">°C</option>
								<option value="farenheit ">°F</option>
							</select>
						</OptionContainer>
						<ButtonAccept onClick={handleSelected}>Aceptar</ButtonAccept>
					</MenuContainer>
				</SectionMenu>
			)}
		</>
	);
};

export default Menu;
