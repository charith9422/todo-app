import { Modal as AntModal } from "antd";
import React from "react";

export interface IModalProps {
	modalOpen: boolean;
	setModalOpen: (val: boolean) => void;
	title: string;
	handleOk: () => void;
}
const Modal: React.FC<React.PropsWithChildren<IModalProps>> = ({
	children,
	modalOpen,
	title,
	setModalOpen,
	handleOk,
}) => {
	return (
		<AntModal
			title={title}
			centered
			open={modalOpen}
			onOk={handleOk}
			onCancel={() => setModalOpen(!modalOpen)}
		>
			{children}
		</AntModal>
	);
};

export default Modal;
