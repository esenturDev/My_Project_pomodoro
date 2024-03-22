import { FC, ReactNode } from "react";
import scss from "./Button.module.scss";
import scss2 from './Button2.module.scss';

export const Button: FC<{
	children: ReactNode;
	onClick: () => void;
}> = ({ children, onClick }) => {
	return (
		<button className={`${scss.buttons} ${scss2.buttons2}`} onClick={onClick}>
			{children}
		</button>
	);
};
