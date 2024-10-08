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
};