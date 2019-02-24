import { useState } from "react";

/**
 * @name useLocalStorage
 *
 * @param {String} key
 * @param {Any} defaultValue
 *
 * @description LocalStorage Hook
 *
 * @returns {Void}
 */
function useLocalStorage(key, defaultValue) {
	const [item, setItem] = useState(defaultValue);

	const setStorageValue = (value) => {
		window.localStorage.setItem(key, value);
		setItem(window.localStorage.getItem(key));
	};

	return [item, setStorageValue];
}

export default useLocalStorage;
