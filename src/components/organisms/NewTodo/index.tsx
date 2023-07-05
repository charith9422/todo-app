import Input from "../../atoms/Input";
import Modal from "../../molecules/Modal";

export interface INewTodoProps {
	showModal: boolean;
	setShowModal: (val: boolean) => void;
	onChangeInput: (val: string) => void;
	handleOk: () => void;
	inputValue: string;
	suggestedTask?: string;
}
const NewTodo: React.FC<INewTodoProps> = ({
	showModal,
	inputValue,
	suggestedTask,
	setShowModal,
	onChangeInput,
	handleOk,
}) => {
	return (
		<Modal
			suggestedTask={suggestedTask}
			handleOk={handleOk}
			title="New Todo"
			modalOpen={showModal}
			setModalOpen={setShowModal}
			children={<Input onChange={onChangeInput} value={inputValue} />}
		/>
	);
};

export default NewTodo;
