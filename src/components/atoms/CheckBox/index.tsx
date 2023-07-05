import { Checkbox as AntCheckbox } from "antd";

export interface ICheckBoxProps {
	checked: boolean;
	onChange: () => void;
	label: string;
}
const CheckBox: React.FC<ICheckBoxProps> = ({ label, checked, onChange }) => {
	return (
		<AntCheckbox checked={checked} onChange={onChange}>
			{label}
		</AntCheckbox>
	);
};

export default CheckBox;
