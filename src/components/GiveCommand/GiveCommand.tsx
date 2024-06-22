import React, {useEffect, useState} from 'react';
import ButtonsJavaEdition from "../utilities/ButtonsJavaEdition";
import GiveCommand_Enchantments from "./assets/GiveCommand_Enchantments";
import "../../styles/GiveCommand.css";
import "../../styles/InputJavaEdition.css";

function GiveCommand() {
    const [item, setItem] = useState('null');
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [enchantmentValues, setEnchantmentValues] = useState<number[]>([]);
    const [username, setUsername] = useState('');
    const [material, setMaterial] = useState('');
    const [renderedSwitch, setRenderedSwitch] = useState<JSX.Element | null>(null);

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

    useEffect(() => {
        if (item === 'null') {
            setSelectedItem(null);
            setEnchantmentValues([]);
            setUsername('');
            setMaterial('null');
            setRenderedSwitch(null);
        }
    }, [item]);

    useEffect(() => {
        if (selectedItem !== null) {
            setRenderedSwitch(renderSwitch(item));
        }
    }, [selectedItem, item]);

    useEffect(() => {
        renderEnchantment(item, selectedItem, enchantmentValues, username, material);
    }, [item, selectedItem, enchantmentValues, username, material]);

    const renderEnchantment = (item: string, selectedItem: any, enchantmentValues: number[], username: string, material: string): void => {

        let enchantements: string = "";

        if(enchantmentValues.length > 0) {
            /**
             * pour l'instant ça fonctionne pour les versions 1.14 a 1.20
             * pour la version 1.21 il faudra changer la façon dont les enchantements sont ajoutés
             * pour les versions anterieures a 1.14 il faudra faire des tests
             *
             * il faudrait aussi vérifier la version d'appaication des l'enchantements
             * pour afficher dans la liste de GiveCommand_Enchantments que les enchantements
             * présents dans la version sélectionnée
             */
            enchantmentValues.forEach((value, index) => {
                if(value > 0) {
                    enchantements = enchantements + `{id:${selectedItem.enchantments[index].identifier},lvl:${value}s}`;
                }else{
                    enchantements = enchantements + "";
                }
            });

            if (enchantements) {
                enchantements = enchantements.replace(/\}\{/g, '},{');
                enchantements = `{Enchantments:[${enchantements}]}`;
            }
        }

        switch (true) {
            case (material === 'null' && item === 'null'):
                console.log(`Neither material nor item is selected.`);
                break;
            case (material === 'null'):
                console.log(`Material is not selected.`);
                break;
            case (item === 'null'):
                console.log(`Item is not selected.`);
                break;
            default:
                console.log(`/give ${username ? username : '@p'} ${material}_${item}${enchantements}`);
                break;
        }
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setItem(event.target.value);
        const selectedItem = data.find(item => item.identifier === event.target.value);
        setSelectedItem(selectedItem);
    }

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const handleMaterialChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setMaterial(event.target.value);
    }

    const handleEnchantmentValuesChange = (newValues: number[]) => {
        setEnchantmentValues(newValues);
    }

    const renderSwitch = (itemId: string) => {
        const itemData = data.find(item => item.identifier === itemId);
        const enchantments = itemData ? itemData.enchantments : [];
        return <GiveCommand_Enchantments enchantments={enchantments} onValuesChange={handleEnchantmentValuesChange}/>
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
                    <select name="material" id="material" className="minecraft-input fixed-size" onChange={handleMaterialChange}>
                        <option value="null">Select a material</option>
                        {selectedItem && selectedItem.materials.map((material: any, index: number) => (
                            <option key={index} value={material.identifier}>{material.name}</option>
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
                {renderedSwitch}
            </div>

            <ButtonsJavaEdition taille="1" title="Retour" path="goback"/>
        </div>
    )
}

export default GiveCommand