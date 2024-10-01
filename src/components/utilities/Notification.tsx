import React, {useEffect, useState} from "react";
import "../../styles/Notification.css";

interface NotificationProps {
	message: string;
	duration?: number;
	type?: string;
}

const Notification: React.FC<NotificationProps> = ({message, duration = 3000, type}) => {
	const [visible, setVisible] = useState(false);
	const [shouldRender, setShouldRender] = useState(true);

	useEffect(() => {
		setVisible(true);
		const timer = setTimeout(() => {
			setVisible(false);
			setTimeout(() => setShouldRender(false), 500); // Wait for the fade-out transition to complete
		}, duration);
		return () => clearTimeout(timer);
	}, [message, duration]);

	if (!shouldRender) return null;

	return (
		<div
			className={`notification ${visible ? "show" : ""} ${
				type === "error"
					? "notification-error"
					: type === "success"
						? "notification-success"
						: type === "info"
							? "notification-info"
							: ""
			}`}
		>
			{message}
		</div>
	);
};

export default Notification;