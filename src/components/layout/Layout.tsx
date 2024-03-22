import { useState } from "react";
import scss from "./Layout.module.scss";
import { Header } from "./header/Header";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { SecondTime1 } from "../pages/SecondTime1";
import SecondTime2 from "../pages/SecondTime2";
import { SecondTime3 } from "../pages/SecondTime3";

const Layout = () => {
	const [style, setStyle] = useState<string>(`${scss.layout}`);
	function result1() {
		setStyle(`${scss.layout}`);
	}
	const result2 = () => {
		setStyle(`${scss.layout2}`);
	};
	const result3 = () => {
		setStyle(`${scss.layout3}`);
	};
	// if(style === `${scss.layout}`) {
	//   result1()
	// } else if(style === `${scss.layout2}`) {
	//   result2()
	// } else if(style === `${scss.layout3}`) {
	//   result3()
	// }
	return (
		<div className={`${style}`}>
			<Header />
			<main className={scss.main}>
				<nav className={scss.navbar}>
					<ul>
						<NavLink style={{backgroundColor: 'transparent', color: '#fff'}} onClick={result1} to="/">
							Pomodoro
						</NavLink>
						<NavLink style={{backgroundColor: 'transparent', color: '#fff'}} onClick={result2} to="/time">
							Short Break
						</NavLink>
						<NavLink style={{backgroundColor: 'transparent', color: '#fff'}} onClick={result3} to="/time3">
							Long Break
						</NavLink>
					</ul>
				</nav>
				<Routes>
					<Route path="/" element={<SecondTime1 />} />
					<Route path="/time" element={<SecondTime2 />} />
					<Route path="/time3" element={<SecondTime3 />} />
				</Routes>
				<div className={scss.section}>
					<p>#3</p>
					<p>Time to focus!</p>
					<h3>Tasks</h3>
					<div></div>
					<button>Add Task</button>
				</div>
			</main>
		</div>
	);
};

export default Layout;
