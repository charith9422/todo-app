import "./Card.scss";

export interface ICardProps {
	className?: string;
}
const Card: React.FC<React.PropsWithChildren<ICardProps>> = ({
	className,
	children,
}) => {
	return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
