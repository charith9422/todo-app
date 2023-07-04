import { Col, Container, Row } from "react-bootstrap";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { PlusCircleOutlined } from "@ant-design/icons";
import CardItemsList from "../../organisms/CardList";
import "./Home.scss";
import React from "react";
import Modal from "../../molecules/Modal";

export interface IHomeProps {
	onChangeSearch: (v: string) => void;
}
const Home: React.FC<IHomeProps> = ({ onChangeSearch }) => {
	const [showModal, setShowModal] = React.useState(false);
	return (
		<>
			<Container className="home__wrapper">
				<Row>
					<Col lg="11">
						<Input onchange={onChangeSearch} placeholder="Search Todo..." />
					</Col>
					<Col lg="1">
						<Button
							text="Add New"
							style={{ background: "green" }}
							icon={<PlusCircleOutlined />}
							type="primary"
							size="middle"
							onClick={() => {
								console.log("d");
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
							data={[
								{
									id: "1",
									title: "kjsd jlsdl",
									actionStatus: "",
								},
								{
									id: "2",
									title: "test kjhkj",
									actionStatus: "",
								},
							]}
						/>
					</Col>
				</Row>
			</Container>
			{showModal && (
				<Modal
					title="New ToDo"
					modalOpen={showModal}
					setModalOpen={setShowModal}
				/>
			)}
		</>
	);
};

export default Home;
