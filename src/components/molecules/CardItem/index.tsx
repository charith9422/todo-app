import React from "react";
import Card from "../../atoms/Card";
import CheckBox from "../../atoms/CheckBox";
import "./CardItem.scss";
import { CloseCircleOutlined } from "@ant-design/icons";

export interface ICardItemProps {
	id: number;
	title: string;
	actionStatus?: boolean;
	onClose?: () => void;
	onChangeDone: () => void;
}

const CardItem: React.FC<ICardItemProps> = ({
	actionStatus = false,
	id,
	title,
	onClose,
	onChangeDone,
}) => {
	// Used BEM for scss stylings
	const [checked, setChecked] = React.useState(actionStatus);
	return (
		<Card className="card-item-wrapper">
			<section className="card-close" data-testid="card-item">
				<CloseCircleOutlined onClick={onClose} className="card-close__icon" />
			</section>
			<section className="card-item">
				<div className={`card-item__content ${checked ? "--deleted" : ""}`}>
					<p className="card-item__number">{id}</p>
					<p className="card-item__title">{title}</p>
					<p className="card-item__action">
						<CheckBox
							checked={checked}
							onChange={() => {
								onChangeDone();
								setChecked((checked) => !checked);
							}}
							label={checked ? "Done" : "Not Done"}
							className="card-item__checkbox"
						/>
					</p>
				</div>
			</section>
		</Card>
	);
};

export default CardItem;
