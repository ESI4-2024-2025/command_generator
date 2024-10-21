interface Enchantement {
	identifier: string;
}

interface SelectedItem {
	enchantement: Enchantement[];
}

export const generateEnchantmentCommand = (item: string,
										   selectedItem: SelectedItem | null,
										   enchantmentValues: number[],
										   username: string,
										   material: string,
										   isMaterialDisabled: boolean
): string => {
	const selectedVersion: number | null = localStorage.getItem("selectedVersion") ? Number(localStorage.getItem("selectedVersion")) : null;

	console.log(selectedVersion);

	if (selectedVersion && selectedVersion >= 800 && selectedVersion < 1300) {
		return "DOTI BITCH"
	}
	else if (selectedVersion && selectedVersion >= 1300 && selectedVersion <= 2050) {
		let enchantements: string = "";

		if (enchantmentValues.length > 0 && selectedItem) {
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

		return `/give ${username ? username : "@p"} ${isMaterialDisabled ? item : `${material}_${item}`}${enchantements}`;
	}
	else if (selectedVersion && selectedVersion >= 2060) {
		let enchantements: string = "";

		if (enchantmentValues.length > 0 && selectedItem) {
			let index = 0;
			console.log(selectedItem);
			enchantmentValues.forEach((value) => {
				if (value > 0) {
					enchantements = enchantements + `'${selectedItem.enchantement[index].identifier}':${value.toString()},`;
				} else {
					enchantements = enchantements + "";
				}
				index++;
			});

			if (enchantements) {
				enchantements = enchantements.replace(/.$/, "");
				enchantements = `[enchantments={levels:{${enchantements}}}]`;
			}
		}

		return `/give ${username ? username : "@p"} ${isMaterialDisabled ? item : `${material}_${item}`}${enchantements}`;
	}


	return `error`;
};