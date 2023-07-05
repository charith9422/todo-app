import { Input as AntInput } from "antd";
export interface IInputProps {
	placeholder?: string;
	onChange: (v: string) => void;
	value: string;
}
const Input: React.FC<IInputProps> = ({ placeholder, onChange, value }) => {
	return (
		<AntInput
			placeholder={placeholder}
			value={value}
			onChange={(event) => onChange(event.target.value)}
		/>
	);
};

export default Input;
