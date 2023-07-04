import CardItem, { ICardItemProps } from "../../molecules/CardItem";

export interface ICardItemsList {
	data: ICardItemProps[];
	onClose: (id: string) => void;
}
const CardItemsList: React.FC<ICardItemsList> = ({ data, onClose }) => {
	return (
		<>
			<div>
				{data.map((cardData) => (
					<CardItem
						key={cardData.id}
						id={cardData.id}
						title={cardData.title}
						actionStatus={cardData.actionStatus}
					/>
				))}
			</div>
		</>
	);
};

export default CardItemsList;
