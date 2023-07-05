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
	//onChangeSearch: (v: string) => void;
}
export interface ITodo {
	id: number;
	title: string;
	actionStatus: any;
}
const Home: React.FC<IHomeProps> = () => {
	const [showModal, setShowModal] = React.useState(false);
	const [todoList, setTodoList] = React.useState<ITodo[]>(INITIAL_TODO_LIST);

	const [todoName, setTodoName] = React.useState<string>("");
	const [searchTerm, setSearchTerm] = React.useState<string>("");
	const [filteredTodoList, setFilteredTodoList] = React.useState<ITodo[]>([]);

	const handleAddNewTodo = () => {
		if (todoName) {
			setTodoList((todoList) => [
				...todoList,
				{ actionStatus: "", id: todoList.length + 1, title: todoName },
			]);
			setTodoName("");
		}
	};

	const onChangeSearch = (value: string) => {
		setSearchTerm(value);
		setFilteredTodoList(() =>
			todoList.filter((todo) =>
				todo.title.toLowerCase().startsWith(value.toLowerCase())
			)
		);
	};

	return (
		<>
			<Container className="home__wrapper">
				<Row>
					<Col lg="11">
						<Input
							onChange={(searchTerm) => onChangeSearch(searchTerm)}
							placeholder="Search Todo..."
							value={searchTerm}
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
						{!searchTerm ? (
							<CardItemsList
								onClose={(id) => {
									console.log(id);
								}}
								data={todoList}
							/>
						) : (
							<CardItemsList
								onClose={(id) => {
									console.log(id);
								}}
								data={filteredTodoList}
							/>
						)}
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
