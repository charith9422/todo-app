import { Modal as AntModal } from "antd";
import React from "react";
import Button from "../../atoms/Button";

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
			{suggestedTask && ` ${suggestedTask}`}
			<Button
				type="link"
				size="small"
				text="Copy Text"
				onClick={() => {
					navigator.clipboard.writeText(suggestedTask);
				}}
			></Button>
		</AntModal>
	);
};

export default Modal;
