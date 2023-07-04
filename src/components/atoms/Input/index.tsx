import { Input as AntInput } from "antd";
export interface IInputProps {
	placeholder?: string;
	onchange: (v: string) => void;
}
const Input: React.FC<IInputProps> = ({ placeholder, onchange }) => {
	return (
		<AntInput
			placeholder={placeholder}
			onChange={(event) => onchange(event.target.value)}
		/>
	);
};

export default Input;
