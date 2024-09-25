import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function Account() {

	const navigate = useNavigate();

	useEffect(() => {
		const userId = localStorage.getItem("userId");
		if (!userId) {
			navigate("/account/creationorconnexion");
		}
	}, [navigate]);

	return (
		<div>
		</div>
	);
}

export default Account;