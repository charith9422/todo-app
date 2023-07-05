import CardItem, { ICardItemProps } from "../../molecules/CardItem";
import "./CardList.scss";

export interface ICardItemsList {
	data: ICardItemProps[];
	onClose: (id: number) => void;
	onChangeDone: (id: number) => void;
}
const CardItemsList: React.FC<ICardItemsList> = ({
	data,
	onClose,
	onChangeDone,
}) => {
	return (
		<>
			<ul className="card-list__wrapper">
				{data.map((cardData) => (
					<li key={cardData.id}>
						<CardItem
							key={cardData.id}
							id={cardData.id}
							title={cardData.title}
							actionStatus={cardData.actionStatus}
							onClose={() => onClose(cardData.id)}
							onChangeDone={() => onChangeDone(cardData.id)}
						/>
					</li>
				))}
			</ul>
		</>
	);
};

export default CardItemsList;
