import { Col, Container, Row } from "react-bootstrap";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { PlusCircleOutlined } from "@ant-design/icons";
import CardItemsList from "../../organisms/CardList";
import "./Home.scss";
import React from "react";
import NewTodo from "../../organisms/NewTodo";
import { INITIAL_TODO_LIST } from "../../../shared/utils";

export interface IHomeProps {
	onChangeSearch: (v: string) => void;
}
export interface ITodo {
	id: number;
	title: string;
	actionStatus: any;
}
const Home: React.FC<IHomeProps> = ({ onChangeSearch }) => {
	const [showModal, setShowModal] = React.useState(false);
	const [todoList, setTodoList] = React.useState<ITodo[]>(INITIAL_TODO_LIST);

	const [todoName, setTodoName] = React.useState<string>("");

	const handleAddNewTodo = () => {
		if (todoName) {
			setTodoList((todoList) => [
				...todoList,
				{ actionStatus: "", id: todoList.length + 1, title: todoName },
			]);
			setTodoName("");
		}
	};
	return (
		<>
			<Container className="home__wrapper">
				<Row>
					<Col lg="11">
						<Input
							onChange={onChangeSearch}
							placeholder="Search Todo..."
							value=""
						/>
					</Col>
					<Col lg="1">
						<Button
							text="Add New"
							style={{ background: "green" }}
							icon={<PlusCircleOutlined />}
							type="primary"
							size="middle"
							onClick={() => {
								setShowModal((showModal) => !showModal);
							}}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<CardItemsList
							onClose={(id) => {
								console.log(id);
							}}
							data={todoList}
						/>
					</Col>
				</Row>
			</Container>
			{showModal && (
				<NewTodo
					showModal={showModal}
					setShowModal={setShowModal}
					onChangeInput={(name) => setTodoName(name)}
					handleOk={handleAddNewTodo}
					inputValue={todoName}
				/>
			)}
		</>
	);
};

export default Home;
