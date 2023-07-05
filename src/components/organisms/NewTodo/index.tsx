import Input from "../../atoms/Input";
import Modal from "../../molecules/Modal";

export interface INewTodoProps {
	showModal: boolean;
	setShowModal: (val: boolean) => void;
	onChangeInput: (val: string) => void;
	handleOk: () => void;
	inputValue: string;
}
const NewTodo: React.FC<INewTodoProps> = ({
	showModal,
	inputValue,
	setShowModal,
	onChangeInput,
	handleOk,
}) => {
	return (
		<Modal
			handleOk={handleOk}
			title="New Todo"
			modalOpen={showModal}
			setModalOpen={setShowModal}
			children={<Input onChange={onChangeInput} value={inputValue} />}
		/>
	);
};

export default NewTodo;
