import { useState, useEffect } from "react";
import _d from "lodash.debounce";

const _ = {
	debounce: _d,
};

/**
 * @name useWindowResize
 * @description Get the window size on resize
 */
const useWindowResize = (debounceDelay = 0) => {
	const [size, setSize] = useState({ x: 0, y: 0 });

	const handleResize = _.debounce(() => {
		setSize({
			...size,
			x: window.innerWidth,
			y: window.innerHeight,
		});
	}, debounceDelay);

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	return size;
};

export default useWindowResize;
