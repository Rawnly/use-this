import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { useWindowResize, useScrollPercentage, useLocalStorage } from "../src/index";

const Section = ({ children, style, className }) => (
	<div
		style={{
			minHeight: "100vh",
			width: "100vw",
			padding: 35,
			boxSizing: "border-box",
			margin: 0,
			position: "relative",
		}}
		className={className}>
		{children}
	</div>
);

const ListItem = ({ children }) => (
	<li
		style={{
			margin: 5,
			padding: 5,
			width: "100%",
		}}>
		{children}
	</li>
);

const BreakLine = () => (
	<hr
		style={{
			opacity: 0.3,
			borderRadius: 5,
		}}
	/>
);

const Box = ({ children }) => (
	<div
		style={{
			background: "white",
			minWidth: 200,
			maxWidth: 350,
			padding: 15,
			boxSizing: "border-box",
			margin: 0,
			top: 35,
			left: 35,
			position: "sticky",
			borderRadius: 5,
			boxShadow: "-2px 3px 10px -1px rgba(0, 0, 0, .2), 0 0 5px 0 rgba(0,0,0, .1)",
		}}>
		{children}
	</div>
);

const App = () => {
	const [debounceDelay, setDebounceDelay] = useState(250);
	const size = useWindowResize(debounceDelay);
	const scroll = useScrollPercentage();

	return (
		<>
			<style>
				{`
          html,
          body {
            margin: 0;
            padding: 0;
            font-size: 18px;
						font-family: sans-serif;
						background: rgb(255,142,71);
						background: linear-gradient(128deg, rgba(255,142,71,1) 0%, rgba(255,44,237,1) 100%);
          }
        `}
			</style>

			<div
				style={{
					width: `${scroll}%`,
					position: "fixed",
					top: 0,
					left: 0,
					height: 5,
					transition: "all .25s ease-in-out ",
					background: "rgba(0,0,0, .2)",
					borderTopRightRadius: 5,
					borderBottomRightRadius: 5,
				}}
			/>
			<Section style={{ background: "#0070ff" }} />
			<Section>
				<Box>
					<ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
						<ListItem>Width: {size.x}px</ListItem>
						<ListItem>Height: {size.y}px</ListItem>
						<BreakLine />
						<ListItem>Scroll: {scroll}%</ListItem>
						<ListItem>
							<span>Resize debounce: </span>
							<input
								style={{
									width: 50,
									padding: 5,
									borderRadius: 5,
									border: "1px solid #ddd",
									outline: "none",
								}}
								type="number"
								min="0"
								placeholder="Debounce"
								value={debounceDelay}
								onChange={({ target: { value } }) => setDebounceDelay(value)}
							/>
							<small> ms</small>
						</ListItem>
					</ul>
				</Box>
			</Section>
			<Section />
		</>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
