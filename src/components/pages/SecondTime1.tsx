// import { useDispatch } from "react-redux";
// import { useAppSelector } from "../../redux/store";
// import { useEffect, useState } from "react";

// export const SecondTime1 = () => {
// 	const time1 = useAppSelector((state) => state.secondTime.time);
// 	console.log(time1);

// 	const [time, setTime] = useState<number | string>(time1);
// 	const [isResults, setIsResults] = useState<boolean>(false);

// 	useEffect(() => {
// 		let intervalId;
// 		if (isResults) {
// 			intervalId = setInterval(() => {
// 				setTime((prevId) => {
// 					if (prevId === 0) {
// 						clearInterval(intervalId);
// 						return 0;
// 					}
// 					return prevId - 1;
// 				});
// 			}, 1000);
// 		} else {
// 			clearInterval(intervalId);
// 		}
// 		return () => clearInterval(intervalId);
// 	}, [isResults]);

// 	function toggleTimer() {
// 		setIsResults((prev) => !prev);
// 	}
// 	function formisRunning(seconds) {
// 		const minutes = Math.floor(seconds / 60);
// 		const reminingSeconds = seconds % 60;
// 		return `${minutes < 10 ? "0" : ""}${minutes} : ${
// 			reminingSeconds < 10 ? "0" : ""
// 		}${reminingSeconds}`;
// 	}

// 	return (
// 		<div>
// 			<h1>{formisRunning(time)}</h1>
// 			<span>{time1}</span>
// 			<button onClick={toggleTimer}>{isResults ? "Pause" : "Start"}</button>
// 		</div>
// 	);
// };

// SecondTime1.tsx
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/store";
import { useEffect, useState } from "react";
import { pomodoroTime } from "../../redux/tools/secondsSlice";
import scss from "./SecondTime1.module.scss";

export const SecondTime1 = () => {
	const time1 = useAppSelector((state) => state.secondTime.time);
	const dispatch = useDispatch();

	// Добавляем обновление времени из Redux в локальное состояние
	const [time, setTime] = useState<number | string | object>(time1);

	// Запуск или остановка таймера
	const [isResults, setIsResults] = useState<boolean>(false);

	// Обновляем локальное состояние времени, когда оно меняется в Redux
	useEffect(() => {
		setTime(time1);
	}, [time1]);

	useEffect(() => {
		let intervalId: NodeJS.Timeout;

		if (isResults) {
			intervalId = setInterval(() => {
				setTime((prevId) => {
					if (prevId === 0) {
						clearInterval(intervalId);
						return 0;
					}
					return prevId - 1;
				});
			}, 1000);
		} else {
			clearInterval(intervalId);
		}

		return () => clearInterval(intervalId);
	}, [isResults]);

	// Функция для переключения таймера
	function toggleTimer() {
		setIsResults((prev) => !prev);
		// Добавляем обновление времени в Redux, когда таймер запускается
		if (!isResults) {
			dispatch(pomodoroTime({ value1: time }));
		}
	}

	// Функция для форматирования времени в формат ММ:СС
	function formatRunningTime(seconds: number) {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes < 10 ? "0" : ""}${minutes}:${
			remainingSeconds < 10 ? "0" : ""
		}${remainingSeconds}`;
	}

	return (
		<div className={scss.Timout1}>
			<div className="container">
				<div className={scss.div1}>
					<div className={scss.div2}>
						<p>{formatRunningTime(time)}</p>
						<button onClick={toggleTimer}>
							{isResults ? "Pause" : "Start"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
