// src/components/GiveCommand/GiveCommand.tsx
import React, {useEffect, useState} from "react";
import ButtonsJavaEdition from "../utilities/ButtonsJavaEdition";
import GiveCommand_Enchantments from "./assets/GiveCommand_Enchantments";
import Notification from "../utilities/Notification";
import "../../styles/GiveCommand.css";
import "../../styles/InputJavaEdition.css";

function GiveCommand() {
	const [item, setItem] = useState("null");
	const [selectedItem, setSelectedItem] = useState<any>(null);
	const [enchantmentValues, setEnchantmentValues] = useState<number[]>([]);
	const [username, setUsername] = useState("");
	const [material, setMaterial] = useState("");
	const [enchantementRenderedSwitch, setEnchantementRenderedSwitch] = useState<JSX.Element | null>(null);
	const [commandResult, setCommandResult] = useState("");
	const [data, setData] = useState<Item[]>([]);
	const [isMaterialDisabled, setIsMaterialDisabled] = useState(false);
	const [notificationMessage, setNotificationMessage] = useState<string | null>(null);

	interface Version {
		_id: string;
		version: string;
	}

	interface Enchantement {
		_id: string;
		nom: string;
		identifier: string;
		lvlMax: number;
		version: Version[];
	}

	interface Materiaux {
		_id: string;
		nom: string;
		identifier: string;
	}

	interface Item {
		_id: string;
		nom: string;
		identifier: string;
		enchantement: Enchantement[];
		materiaux: Materiaux[];
	}

	useEffect(() => {
		fetch(`${process.env.REACT_APP_HOST_BACK}/getItem`)
			.then(response => response.json())
			.then((data: Item[]) => {
				console.log(data); // Log the response data
				setData(data);
			});
	}, []);

	useEffect(() => {
		if (item === "null") {
			setSelectedItem(null);
			setEnchantmentValues([]);
			setUsername("");
			setMaterial("null");
			setEnchantementRenderedSwitch(null);
			setIsMaterialDisabled(false);
		}
	}, [item]);

	useEffect(() => {
		if (selectedItem !== null) {
			setEnchantementRenderedSwitch(enchantmentRenderSwitch(item));
			if (selectedItem.materiaux.length === 1) {
				setMaterial("not needed");
				setIsMaterialDisabled(true);
			} else {
				setIsMaterialDisabled(false);
			}
		}
	}, [selectedItem, item]);

	useEffect(() => {
		renderEnchantment(item, selectedItem, enchantmentValues, username, material);
	}, [item, selectedItem, enchantmentValues, username, material]);

	const renderEnchantment = (item: string,
							   selectedItem: any,
							   enchantmentValues: number[],
							   username: string,
							   material: string): void => {

		let enchantements: string = "";

		if (enchantmentValues.length > 0) {
			let index = 0;
			console.log(selectedItem);
			enchantmentValues.forEach((value) => {
				if (value > 0) {
					enchantements = enchantements + `{id:${selectedItem.enchantement[index].identifier},lvl:${value.toString()}s}`;
				} else {
					enchantements = enchantements + "";
				}
				index++;
			});

			if (enchantements) {
				enchantements = enchantements.replace(/}\{/g, "},{");
				enchantements = `{Enchantments:[${enchantements}]}`;
			}
		}

		switch (true) {
			case (material === "null" && item === "null"):
				setCommandResult(`Neither material nor item is selected.`);
				break;
			case (material === "null"):
				setCommandResult(`Material is not selected.`);
				break;
			case (item === "null"):
				setCommandResult(`Item is not selected.`);
				break;
			default:
				setCommandResult(
					`/give ${username ? username : "@p"} ${isMaterialDisabled ? item : `${material}_${item}`}${enchantements}`
				);
				break;
		}
	};

	const handleSelectItemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setItem(event.target.value);
		setIsMaterialDisabled(false); // Reset isMaterialDisabled when item changes
		const selectedItem = data.find(item => item.identifier === event.target.value);
		if (selectedItem) {
			setSelectedItem(selectedItem);
			setEnchantmentValues(new Array(selectedItem.enchantement.length).fill(0));
			setMaterial("null"); // Reset material to "null" when item changes
		} else {
			setSelectedItem(null);
			setEnchantmentValues([]); // Reset enchantment values
			setMaterial("null"); // Reset material to "null" when no item is selected
		}
	};

	const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		const regex = /^[a-zA-Z0-9_]*$/;
		if (regex.test(value) && value.length <= 16) {
			setUsername(value);
		}
	};

	const handleMaterialChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		if (!isMaterialDisabled) {
			setMaterial(event.target.value);
		}
	};

	const handleEnchantmentValuesChange = (newValues: number[]) => {
		setEnchantmentValues(newValues);
	};

	const enchantmentRenderSwitch = (itemId: string) => {
		const itemData = data.find(item => item.identifier === itemId);
		if (!itemData || !itemData.enchantement) {
			return null;
		}
		return <GiveCommand_Enchantments enchantments={itemData.enchantement}
										 onValuesChange={handleEnchantmentValuesChange} resetValues={true}/>;
	};

	const copyToClipboard = () => {
		navigator.clipboard.writeText(commandResult);
		setNotificationMessage("Copie dans le presse papier");
		setTimeout(() => setNotificationMessage(null), 3000);
	};

	return (
		<div className="give-command" data-testid="GiveCommand">
			<div className="back-button-container">
				<ButtonsJavaEdition taille="20" title="<-- Retour" path="goback"/>
			</div>
			<div className="main-container">
				<div className="input-block">
					<label htmlFor="item" className="text-minecraft">Item</label>
					<select className="minecraft-input fixed-width" name="item" id="item"
							onChange={handleSelectItemChange}>
						<option value="null">Select an item</option>
						{data && data.map((item, index) => (
							<option key={index} value={item.identifier}>{item.nom}</option>
						))}
					</select>
				</div>

				<div className="input-block">
					<label htmlFor="material" className="text-minecraft">Material</label>
					<select name="material" id="material" className="minecraft-input fixed-width"
							value={material} onChange={handleMaterialChange} disabled={isMaterialDisabled}>
						<option value="null">{isMaterialDisabled ? "not needed" : "Select a material"}</option>
						{selectedItem && selectedItem.materiaux && selectedItem.materiaux.map((material: any, index: number) => (
							<option key={index} value={material.identifier}>{material.nom}</option>
						))}
					</select>
				</div>

				<div className="input-block">
					<label htmlFor="username" className="text-minecraft">Username</label>
					<input
						type="text"
						id="username"
						className="minecraft-input fixed-width"
						value={username}
						onChange={handleUsernameChange}
						maxLength={16}
						pattern="[a-zA-Z0-9_]*"
						title="Username can contain up to 16 characters, including letters, numbers, and underscores."
					/>
				</div>
			</div>

			<div className="bar-container">
				<div className="enchantment-container">
					{enchantementRenderedSwitch}
				</div>
			</div>

			<textarea className="command-renderer text-minecraft"
					  value={commandResult}
					  onClick={copyToClipboard}
					  readOnly/>

			{notificationMessage && <Notification message={notificationMessage} type="success"/>}
		</div>
	);
}

export default GiveCommand;