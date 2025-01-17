import Effect from "../../interfaces/Effect";

export const generatePotionCommand = (potionType: String, username: String, effects: Effect[], version: number) => {


	if (version && version >= 1200 && version < 2001) {
		const effectsToString = effects.map(effect => {
			let effectString = `id:${effect.effect}`;

			if (effect.duration) {
				effectString += `,duration:${effect.duration}`;
			} else {
				effectString += `,duration:0`
			}

			/** -1 parce qu'on veux pas l'afficher si le user ne l'explicite pas, mais la valeur peut être 0*/
			if (effect.amplifier > -1 && effect.amplifier) {
				effectString += `,amplifier:${effect.amplifier}`;
			}
			if (!effect.particles) {
				effectString += `,show_particles:0b`;
			}
			if (!effect.icon) {
				effectString += `,show_icon:0b`;
			}

			return `{${effectString}}`;
		}).join(",")

		return `/give ${username ? username : "@p"} minecraft:${potionType}[potion_contents={custom_effects:[${effectsToString}]}]`
	}else if(version && version >= 2002 && version < 2006){
		const effectsToString = effects.map(effect => {
			let effectString = `id:${effect.effect}`;

			if (effect.duration) {
				effectString += `,duration:${effect.duration}`;
			} else {
				effectString += `,duration:0`
			}

			/** -1 parce qu'on veux pas l'afficher si le user ne l'explicite pas, mais la valeur peut être 0*/
			if (effect.amplifier > -1 && effect.amplifier) {
				effectString += `,amplifier:${effect.amplifier}`;
			}
			if (!effect.particles) {
				effectString += `,show_particles:0b`;
			}
			if (!effect.icon) {
				effectString += `,show_icon:0b`;
			}

			return `{${effectString}}`;
		}).join(",")

		return `/give ${username ? username : "@p"} minecraft:${potionType}{custom_potion_effects:[${effectsToString}]}`

	}else if(version && version >= 2003 && version < 2102) {

	}

	return 'error';
}