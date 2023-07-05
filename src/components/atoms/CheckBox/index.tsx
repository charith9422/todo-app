import { Checkbox as AntCheckbox } from "antd";

export interface ICheckBoxProps {
	checked: boolean;
	onChange: () => void;
	label: string;
	className?: string;
}
const CheckBox: React.FC<ICheckBoxProps> = ({
	label,
	checked,
	className,
	onChange,
}) => {
	return (
		<AntCheckbox checked={checked} onChange={onChange} className={className}>
			{label}
		</AntCheckbox>
	);
};

export default CheckBox;
