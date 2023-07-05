import { Modal as AntModal } from "antd";
import React from "react";

export interface IModalProps {
	modalOpen: boolean;
	setModalOpen: (val: boolean) => void;
	title: string;
	suggestedTask?: string;
	handleOk: () => void;
}
const Modal: React.FC<React.PropsWithChildren<IModalProps>> = ({
	children,
	modalOpen,
	title,
	suggestedTask = "",
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
			{suggestedTask && `Hint: ${suggestedTask}`}
		</AntModal>
	);
};

export default Modal;
