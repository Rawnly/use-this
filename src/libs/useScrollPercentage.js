import { useState, useEffect } from "react";

const getPageHeight = () => {
	if (typeof window !== "undefined") {
		const { document } = window;

		var body = document.body,
			html = document.documentElement;

		return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
	}

	return 0;
};

const useScrollPercentage = (precision = 2) => {
	const [scrollPercentage, setScrollPercentage] = useState(0);

	const handleScroll = (e) => {
		const Y =
			Math.floor(
				((window.scrollY * Math.pow(10, precision)) / (getPageHeight() - window.innerHeight)) * Math.pow(10, precision),
			) / 100;

		setScrollPercentage(Y);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	return scrollPercentage;
};

export default useScrollPercentage;
