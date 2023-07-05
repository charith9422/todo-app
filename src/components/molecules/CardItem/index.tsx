import Card from "../../atoms/Card";
import "./CardItem.scss";
import { CloseCircleOutlined } from "@ant-design/icons";

export interface ICardItemProps {
	id: number;
	title: string;
	actionStatus?: React.ReactNode;
}

const CardItem: React.FC<ICardItemProps> = ({ actionStatus, id, title }) => {
	return (
		<Card className="card-item-wrapper">
			<section className="card-close">
				<CloseCircleOutlined />
			</section>
			<section className="card-item">
				<div className="card-item__content">
					<p className="card-item__number">{id}</p>
					<p className="card-item__title">{title}</p>
					<p className="card-item__action">{actionStatus}</p>
				</div>
			</section>
		</Card>
	);
};

export default CardItem;
