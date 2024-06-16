import React, { useState } from 'react';
import ButtonsJavaEdition from "../utilities/ButtonsJavaEdition";
import GiveCommand_Enchantments from "./assets/GiveCommand_Enchantments";
import "../../styles/GiveCommand.css";
import "../../styles/InputJavaEdition.css";

function GiveCommand() {
    const [item, setItem] = useState('null');
    const [selectedItem, setSelectedItem] = useState<any>(null);

    const data = [
        {
            "nom": "Sword",
            "identifier": "sword",
            "materials": [
                {
                    "name": "Wood",
                    "identifier": "wooden"
                },
                {
                    "name": "Gold",
                    "identifier": "gold"
                },
                {
                    "name": "Diamond",
                    "identifier": "diamond"
                }
            ],
            "enchantments": [
                {
                    "name": "Looting",
                    "identifier": "looting",
                    "lvlMax": 3,
                },
                {
                    "name": "Sharpness",
                    "identifier": "sharpness",
                    "lvlMax": 5,
                },
                {
                    "name": "Fire aspect",
                    "identifier": "fire_aspect",
                    "lvlMax": 2,
                }
            ]
        },
        {
            "nom": "Chestplate",
            "identifier": "chestplate",
            "materials": [
                {
                    "name": "Leather",
                    "identifier": "leather"
                },
                {
                    "name": "Gold",
                    "identifier": "gold"
                },
                {
                    "name": "Diamond",
                    "identifier": "diamond"
                }
            ],
            "enchantments": [
                {
                    "name": "Protection",
                    "identifier": "protection",
                    "lvlMax": 4,
                },
                {
                    "name": "Projectile protection",
                    "identifier": "projectile_protection",
                    "lvlMax": 4,
                },
                {
                    "name": "Throns",
                    "identifier": "thorns",
                    "lvlMax": 4,
                }
            ]
        }
    ]

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setItem(event.target.value);
        const selectedItem = data.find(item => item.identifier === event.target.value);
        setSelectedItem(selectedItem);
    }

    const renderSwitch = (itemId: string) => {
        const itemData = data.find(item => item.identifier === itemId);
        const enchantments = itemData ? itemData.enchantments : [];

        return <GiveCommand_Enchantments enchantments={enchantments}/>;
    }

    return (
        <div className="give-command" data-testid="GiveCommand">
            <div className="main-container">
                <div className="input-block">
                    <label htmlFor="item" className="text-minecraft">Item</label>
                    <select className="minecraft-input fixed-size" name="item" id="item" onChange={handleSelectChange}>
                        <option value="null">Select an item</option>
                        {data.map((item, index) => (
                            <option key={index} value={item.identifier}>{item.nom}</option>
                        ))}
                    </select>
                </div>

                <div className="input-block">
                    <label htmlFor="material" className="text-minecraft">Materiau</label>
                    <select name="material" id="material" className="minecraft-input fixed-size">
                        <option value="null">Select a material</option>
                        {selectedItem && selectedItem.materials.map((material: any, index: number) => (
                            <option key={index} value={material.identifier}>{material.name}</option>
                        ))}
                    </select>
                </div>

                <div className="input-block">
                    <label htmlFor="username" className="text-minecraft">Username</label>
                    <input type="text" id="username" className="minecraft-input fixed-size"/>
                </div>
            </div>

            <div className="bar-container">
                {renderSwitch(item)}
            </div>

            <ButtonsJavaEdition taille="1" title="Retour" path="goback"/>
        </div>
    )
}

export default GiveCommand