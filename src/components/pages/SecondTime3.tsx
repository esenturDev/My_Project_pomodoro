import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { longBreakTime } from "../../redux/tools/secondsSlice";
import scss from "./SecondTime3.module.scss";
// import {NodeJS} from 'nodejs';

export const SecondTime3 = () => {
	const time3 = useAppSelector((state) => state.secondTime.time2);
	const dispatch = useDispatch();
	const [time, setTime] = useState<number | string | object>(time3);
	const [isResults, setIsResults] = useState<boolean>(false);

	useEffect(() => {
		setTime(time3);
	}, [time3]);

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
	function toggleTimer() {
		setIsResults((prev) => !prev);
		if (!isResults) {
			dispatch(longBreakTime({ value3: time }));
		}
	}

	const formatRunningTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 120);
		const remainingSeconds = seconds % 60;
		return `${minutes < 10 ? "0" : ""}${minutes}:${
			remainingSeconds < 10 ? "0" : ""
		}${remainingSeconds}`;
	};
	return (
		<div className={scss.Timout3}>
			<div className="container">
				<div className={scss.div1}>
					<div className={scss.div2}>
						<p>{formatRunningTime(time)}</p>
						<button onClick={toggleTimer}>
							{isResults ? "Pause" : "start"}
						</button>
					</div>
				</div>
			</div>
			<span>{time3}</span>
		</div>
	);
};
