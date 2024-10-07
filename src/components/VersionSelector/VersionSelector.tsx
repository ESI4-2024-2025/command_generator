import React, { useEffect } from 'react';
import '../../styles/VersionSelector.css';

const VersionSelector: React.FC = () => {
	const [version, setVersion] = React.useState('2100');

	useEffect(() => {
		const savedVersion = localStorage.getItem('selectedVersion');
		if (savedVersion) {
			setVersion(savedVersion);
		}
	}, []);

	const changeVersion = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const newVersion = event.target.value;
		setVersion(newVersion);
		localStorage.setItem('selectedVersion', newVersion);
	};

	return (<div className="version-selector">
		<select onChange={changeVersion} value={version}>
			<option value="2100">1.21</option>
			<option value="2060">1.20.6</option>
			<option value="2050">1.20.5</option>
			<option value="2040">1.20.4</option>
			<option value="2030">1.20.3</option>
			<option value="2020">1.20.2</option>
			<option value="2010">1.20.1</option>
			<option value="2000">1.20</option>
			<option value="1940">1.19.4</option>
			<option value="1930">1.19.3</option>
			<option value="1920">1.19.2</option>
			<option value="1910">1.19.1</option>
			<option value="1900">1.19</option>
			<option value="1820">1.18.2</option>
			<option value="1810">1.18.1</option>
			<option value="1800">1.18</option>
			<option value="1710">1.17.1</option>
			<option value="1700">1.17</option>
			<option value="1650">1.16.5</option>
			<option value="1640">1.16.4</option>
			<option value="1630">1.16.3</option>
			<option value="1620">1.16.2</option>
			<option value="1610">1.16.1</option>
			<option value="1600">1.16</option>
			<option value="1520">1.15.2</option>
			<option value="1510">1.15.1</option>
			<option value="1500">1.15</option>
			<option value="1440">1.14.4</option>
			<option value="1430">1.14.3</option>
			<option value="1420">1.14.2</option>
			<option value="1410">1.14.1</option>
			<option value="1400">1.14</option>
			<option value="1320">1.13.2</option>
			<option value="1310">1.13.1</option>
			<option value="1300">1.13</option>
			<option value="1220">1.12.2</option>
			<option value="1210">1.12.1</option>
			<option value="1200">1.12</option>
			<option value="1120">1.11.2</option>
			<option value="1110">1.11.1</option>
			<option value="1100">1.11</option>
			<option value="1020">1.10.2</option>
			<option value="1010">1.10.1</option>
			<option value="1000">1.10</option>
			<option value="940">1.9.4</option>
			<option value="930">1.9.3</option>
			<option value="920">1.9.2</option>
			<option value="910">1.9.1</option>
			<option value="900">1.9</option>
			<option value="890">1.8.9</option>
			<option value="880">1.8.8</option>
			<option value="870">1.8.7</option>
			<option value="860">1.8.6</option>
			<option value="850">1.8.5</option>
			<option value="840">1.8.4</option>
			<option value="830">1.8.3</option>
			<option value="820">1.8.2</option>
			<option value="810">1.8.1</option>
			<option value="800">1.8</option>
		</select>
	</div>);
};

export default VersionSelector;