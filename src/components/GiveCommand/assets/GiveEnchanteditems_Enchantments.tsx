import React, {useEffect, useState} from "react";
import ButtonsJavaEdition from "../../utilities/ButtonsJavaEdition";
import "../../../styles/InputJavaEdition.css";

interface Enchantment {
	_id: string;
	nom: string;
	identifier: string;
	lvlMax: number;
}

interface GiveCommand_EnchantmentsProps {
	enchantments: Enchantment[];
	onValuesChange: (newValues: number[]) => void;
	resetValues?: boolean;
}

const GiveEnchanteditems_Enchantments: React.FC<GiveCommand_EnchantmentsProps> = ({
																			   enchantments,
																			   onValuesChange,
																			   resetValues
																		   }) => {
	const [values, setValues] = useState<number[]>([]);

	useEffect(() => {
		if (resetValues) {
			setValues(enchantments ? new Array(enchantments.length).fill(0) : []);
		} else if (values.length === 0 && enchantments) {
			setValues(new Array(enchantments.length).fill(0));
		}
	}, [enchantments, resetValues]);

	const minus = (index: number) => {
		setValues(prevValues => {
			const newValues = [...prevValues];
			if (newValues[index] > 0) {
				newValues[index] -= 1;
			}
			return newValues;
		});
	};

	const plus = (index: number, maxLevel: number) => {
		setValues(prevValues => {
			const newValues = [...prevValues];
			if (newValues[index] < maxLevel) {
				newValues[index] += 1;
			}
			return newValues;
		});
	};

	useEffect(() => {
		onValuesChange(values);
	}, [values]);

	return (
		<div className="main-container">
			{enchantments && enchantments.map((enchantment, index) => (
				<div key={index} className="input-block">
					<label htmlFor={`input${index}`} className="text-minecraft">{enchantment.nom}</label>
					<ButtonsJavaEdition taille="square" title="-" onClick={() => minus(index)}
										disabled={values[index] === 0}/>
					<input className="minecraft-input enchantement-value-input" id={`input${index}`} type="text" min="0"
						   max={enchantment.lvlMax} value={values[index]} disabled/>
					<ButtonsJavaEdition taille="square" title="+" onClick={() => plus(index, enchantment.lvlMax)}
										disabled={values[index] === enchantment.lvlMax}/>
				</div>
			))}
		</div>
	);
};

export default GiveEnchanteditems_Enchantments;