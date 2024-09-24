import React, {useEffect, useState} from "react";
import ButtonsJavaEdition from "../utilities/ButtonsJavaEdition";
import GiveCommand_Enchantments from "./assets/GiveCommand_Enchantments";
import "../../styles/GiveCommand.css";
import "../../styles/InputJavaEdition.css";
import GiveCommand_Lore from "./assets/GiveCommand_Lore";
import {log} from "node:util";

function GiveCommand() {
	const [item, setItem] = useState("null");
	const [selectedItem, setSelectedItem] = useState<any>(null);
	const [enchantmentValues, setEnchantmentValues] = useState<number[]>([]);
	const [loreValues, setLoreValues] = useState<string[]>([]);
	const [username, setUsername] = useState("");
	const [material, setMaterial] = useState("");
	const [enchantementRenderedSwitch, setEnchantementRenderedSwitch] = useState<JSX.Element | null>(null);
	const [commandResult, setCommandResult] = useState("");
	const [showCopyMessage, setShowCopyMessage] = useState(false);
	const [data, setData] = useState<Item[]>([]);

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
			.then((data: Item[]) => setData(data));
	}, []);

	useEffect(() => {
		if (item === "null") {
			setSelectedItem(null);
			setEnchantmentValues([]);
			setUsername("");
			setMaterial("null");
			setEnchantementRenderedSwitch(null);
		}
	}, [item]);

	useEffect(() => {
		if (selectedItem !== null) {
			setEnchantementRenderedSwitch(enchantmentRenderSwitch(item));
		}
	}, [selectedItem, item]);

	useEffect(() => {
		renderEnchantment(item, selectedItem, enchantmentValues, username, material);
	}, [item, selectedItem, enchantmentValues, username, material, loreValues]);

	const renderEnchantment = (item: string,
							   selectedItem: any,
							   enchantmentValues: number[],
							   username: string,
							   material: string): void => {

		let enchantements: string = "";

		if (enchantmentValues.length > 0) {
			/**
			 * pour l'instant ça fonctionne pour les versions 1.14 a 1.20
			 * pour la version 1.21 il faudra changer la façon dont les enchantements sont ajoutés
			 * pour les versions anterieures a 1.14 il faudra faire des tests
			 *
			 * il faudrait aussi vérifier la version d'appaication des l'enchantements
			 * pour afficher dans la liste de GiveCommand_Enchantments que les enchantements
			 * présents dans la version sélectionnée
			 */
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
				setCommandResult(`/give ${username ? username : "@p"} ${material}_${item}${enchantements}`);
				break;
		}
	};

	const handleSelectItemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setItem(event.target.value);
		console.log(data);
		const selectedItem = data.find(item => item.identifier === event.target.value);
		if (selectedItem) {
			setSelectedItem(selectedItem);
		} else {
			setSelectedItem(null);
		}
	};

	const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(event.target.value);
	};

	const handleMaterialChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setMaterial(event.target.value);
	};

	const handleEnchantmentValuesChange = (newValues: number[]) => {
		setEnchantmentValues(newValues);
	};

	const enchantmentRenderSwitch = (itemId: string) => {
		const itemData = data.find(item => item.identifier === itemId);
		if (!itemData || !itemData.enchantement) {
			return null;
		}
		return <GiveCommand_Enchantments enchantments={itemData.enchantement} onValuesChange={handleEnchantmentValuesChange}/>;
	};

	const copyToClipboard = () => {
		navigator.clipboard.writeText(commandResult);
		setShowCopyMessage(true);
		setTimeout(() => setShowCopyMessage(false), 3000);
	};

	return (
		<div className="give-command" data-testid="GiveCommand">
			<div className="back-button-container">
				<ButtonsJavaEdition taille="20" title="<-- Retour" path="goback"/>
			</div>
			<div className="main-container">
				<div className="input-block">
					<label htmlFor="item" className="text-minecraft">Item</label>
					<select className="minecraft-input fixed-size" name="item" id="item" onChange={handleSelectItemChange}>
						<option value="null">Select an item</option>
						{data && data.map((item, index) => (
							<option key={index} value={item.identifier}>{item.nom}</option>
						))}
					</select>
				</div>

				<div className="input-block">
					<label htmlFor="material" className="text-minecraft">Materiau</label>
					<select name="material" id="material" className="minecraft-input fixed-size"
							onChange={handleMaterialChange}>
						<option value="null">Select a material</option>
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
						className="minecraft-input fixed-size"
						value={username}
						onChange={handleUsernameChange}
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

			{showCopyMessage && <div className="notification show">Copié dans le presse papier</div>}
		</div>
	);
}

export default GiveCommand;