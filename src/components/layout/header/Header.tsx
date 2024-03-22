// Header.tsx
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Input from "../../ul/input/Input";
import { Button } from "../../ul/button/Button";
import { useDispatch } from "react-redux";
import scss from "./Header.module.scss";
import {
	pomodoroTime,
	shortBreakTime,
	longBreakTime,
} from "../../../redux/tools/secondsSlice";
import { useLocation } from "react-router-dom";
import { Modal } from "../../modal/Modal";

export const Header = () => {
	const [modal, setModal] = useState<boolean>(false);
	const [time1, setTime1] = useState<string | number>(0);
	const [time2, setTime2] = useState<string | number>(0);
	const [time3, setTime3] = useState<string | number>(0);
	const { pathname } = useLocation();
	const dispatch = useDispatch();
	function resultDispatch() {
		dispatch(handleModalClose());
	}
	useEffect(() => {
		if (pathname === "/") {
			dispatch(pomodoroTime({ value1: time1 }));
		} else if (pathname === "/time") {
			dispatch(shortBreakTime({ value2: time2 }));
		} else if (pathname === "/time3") {
			dispatch(longBreakTime({ value3: time3 }));
		}
	}, [pathname]);

	const handleModalClose = () => {
		dispatch(pomodoroTime({ value1: time1 })),
			dispatch(shortBreakTime({ value2: time2 })),
			dispatch(longBreakTime({ value3: time3 })),
			setModal(false);
	};

	return (
		<>
			<header className={scss.header}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.div1}>
							<img
								src="https://pomofocus.io/images/icon-white2.png"
								alt="photos"
							/>
							<p>Pomofocus</p>
						</div>
						<div className={scss.div2}>
							<Button>Report</Button>
							<Button onClick={() => setModal(true)}>Setting</Button>
							<Button>Login</Button>
						</div>
					</div>
				</div>
			</header>
			{modal &&
				createPortal(
					<Modal>
						<div className={scss.modalContentsContainer}>
						<h2 className={scss.h2}>SETTING</h2>
							<h2>TIMER</h2>
							<h3>Time (minutes)</h3>
							<div className={scss.forms}>
								<div className={scss.div1}>
									<p>Pomodoro</p>
									<Input type="number" value={time1} setData={setTime1} />
								</div>
								<div className={scss.div1}>
									<p>Short Break</p>
									<Input type="number" value={time2} setData={setTime2} />
								</div>
								<div className={scss.div1}>
									<p>Long Break</p>
									<Input type="number" value={time3} setData={setTime3} />
								</div>
							</div>
								<Button onClick={resultDispatch}>OK</Button>
								<Button onClick={() => setModal(false)}>Cancel</Button>
						</div>
					</Modal>,
					document.getElementById("modal")
				)}
		</>
	);
};
