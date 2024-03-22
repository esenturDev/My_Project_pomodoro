import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { shortBreakTime } from "../../redux/tools/secondsSlice";
import scss from "./SecondTime2.module.scss";

const SecondTime2 = () => {
	const time2 = useAppSelector((state) => state.secondTime.time1);
	const [time, setTime] = useState<number | string | object>(time2);
	const dispatch = useDispatch();
	const [isResults, setIsResults] = useState<boolean>(false);
	useEffect(() => {
		setTime(time2);
	}, [time2]);
	useEffect(() => {
		let intervalId: NodeJs.Timeout;

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
	function toggleTimer() {
		setIsResults((prev) => !prev);
		if (!isResults) {
			dispatch(shortBreakTime({ value2: time }));
		}
	}

	function formRunningTime(seconds: number) {
		const minutes = Math.floor(seconds / 120);
		const remaningSeconds = seconds % 60;
		return `${minutes < 10 ? "0" : ""}${minutes} : ${
			remaningSeconds < 10 ? "0" : ""
		}${remaningSeconds}`;
	}
	return (
		<div className={scss.Timout2}>
			<div className="container">
				<div className={scss.div1}>
					<div className={scss.div2}>
						<p>{formRunningTime(time)}</p>
						<button onClick={toggleTimer}>
							{isResults ? "Pause" : "Start"}
						</button>
					</div>
				</div>
			</div>
			<span>{time2}</span>
		</div>
	);
};

export default SecondTime2;
