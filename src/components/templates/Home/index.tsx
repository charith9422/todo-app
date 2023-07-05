import { Col, Container, Row } from "react-bootstrap";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { PlusCircleOutlined } from "@ant-design/icons";
import CardItemsList from "../../organisms/CardList";
import "./Home.scss";
import React from "react";
import NewTodo from "../../organisms/NewTodo";
import { INITIAL_TODO_LIST } from "../../../shared/utils";
import { ICardItemProps } from "../../molecules/CardItem";

const Home: React.FC = () => {
	const [showModal, setShowModal] = React.useState(false);
	const [todoList, setTodoList] =
		React.useState<ICardItemProps[]>(INITIAL_TODO_LIST);

	const [todoName, setTodoName] = React.useState<string>("");
	const [searchTerm, setSearchTerm] = React.useState<string>("");
	const [filteredTodoList, setFilteredTodoList] = React.useState<
		ICardItemProps[]
	>([]);

	const handleAddNewTodo = () => {
		if (todoName) {
			setTodoList((todoList) => [
				...todoList,
				{
					actionStatus: false,
					id: todoList.length + 1,
					title: todoName,
					isDeleted: false,
					onChangeDone: () => {},
				},
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

	const handleOnDelete = (id: number) => {
		setTodoList(() => todoList.filter((todo) => todo.id !== id));
	};

	const handleOnTaskDone = (id: number) => {
		setTodoList((todoList) => {
			return todoList.map((data) => {
				if (data.id === id) {
					return { ...data, actionStatus: true };
				} else {
					return data;
				}
			});
		});
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
								onClose={(id) => handleOnDelete(id)}
								data={todoList}
								onChangeDone={(v) => handleOnTaskDone(v)}
							/>
						) : (
							<CardItemsList
								onClose={(id) => handleOnDelete(id)}
								data={filteredTodoList}
								onChangeDone={(v) => handleOnTaskDone(v)}
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
