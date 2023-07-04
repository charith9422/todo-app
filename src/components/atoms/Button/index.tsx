import { Button as AntButton } from "antd";
import { CSSProperties } from "react";

export interface IButtonProps {
	text?: string;
	type: "link" | "text" | "ghost" | "default" | "primary" | "dashed";
	size: "large" | "middle" | "small";
	disabled?: boolean;
	shape?: "round" | "circle" | "default";
	icon?: React.ReactNode;
	style?: CSSProperties | undefined;
	onClick: () => void;
}
const Button: React.FC<IButtonProps> = ({
	text,
	type,
	size,
	disabled = false,
	shape = "default",
	icon,
	style,
	onClick,
}) => {
	return (
		<AntButton
			type={type}
			size={size}
			disabled={disabled}
			onClick={onClick}
			shape={shape}
			icon={icon}
			style={style}
		>
			{text}
		</AntButton>
	);
};

export default Button;
