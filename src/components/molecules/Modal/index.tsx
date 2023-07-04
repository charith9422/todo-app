import { Modal as AntModal } from "antd";
import React from "react";

export interface IModalProps {
	modalOpen: boolean;
	setModalOpen: (val: boolean) => void;
	title: string;
}
const Modal: React.FC<React.PropsWithChildren<IModalProps>> = ({
	children,
	modalOpen,
	title,
	setModalOpen,
}) => {
	return (
		<AntModal
			title={title}
			centered
			open={modalOpen}
			onOk={() => setModalOpen(!modalOpen)}
			onCancel={() => setModalOpen(!modalOpen)}
		>
			{children}
		</AntModal>
	);
};

export default Modal;
