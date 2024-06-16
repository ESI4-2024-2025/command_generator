import React, { useState } from 'react';
import ButtonsJavaEdition from "../../utilities/ButtonsJavaEdition";
import "../../../styles/InputJavaEdition.css";

interface Enchantment {
    name: string;
    identifier: string;
    lvlMax: number;
}

interface GiveCommandEnchantmentsProps {
    enchantments: Enchantment[];
}

const GiveCommand_Enchantments: React.FC<GiveCommandEnchantmentsProps> = ({ enchantments }) => {
    const [values, setValues] = useState<number[]>(new Array(enchantments.length).fill(0));

    const minus = (index: number) => {
        setValues(prevValues => {
            const newValues = [...prevValues];
            if (newValues[index] > 0) {
                newValues[index] -= 1;
            }
            return newValues;
        });
    }

    const plus = (index: number, maxLevel: number) => {
        setValues(prevValues => {
            const newValues = [...prevValues];
            if (newValues[index] < maxLevel) {
                newValues[index] += 1;
            }
            return newValues;
        });
    }

    return (
        <div className="main-container">
            {enchantments.map((enchantment, index) => {
                return (
                    <div key={index} className="input-block">
                        <label htmlFor={`input${index}`} className="text-minecraft">{enchantment.name}</label>
                        <ButtonsJavaEdition taille="square" title="-" onClick={() => minus(index)}
                                            disabled={values[index] === 0}/>
                        <input className="minecraft-input"
                               id={`input${index}`}
                               type="number"
                               min="0"
                               max={enchantment.lvlMax}
                               value={values[index]}
                               disabled
                        />
                        <ButtonsJavaEdition taille="square" title="+" onClick={() => plus(index, enchantment.lvlMax)}
                                            disabled={values[index] === enchantment.lvlMax}/>
                    </div>
                )
            })}
        </div>
    );
}

export default GiveCommand_Enchantments;