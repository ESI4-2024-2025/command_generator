import Enchantement from './Enchantment';
import Materiaux from './Materiaux';

interface Item {
	_id: string;
	nom: string;
	identifier: string;
	enchantement: Enchantement[];
	materiaux: Materiaux[];
	version: number;
}

export default Item;