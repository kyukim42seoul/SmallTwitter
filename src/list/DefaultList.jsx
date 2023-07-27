/**
 * return List of JSX with specific element
 * get dataArray or listLength
 * 
 * element 와 횟수, 필요한 attribute 묶음을 받아 반복 렌더링
 * element 와 횟수를 받아 반복 렌더링
 * element 와 array 만 들어온 경우 array.length 만큼 반복 렌더링
 */

import { DefaultButton } from "../button/DefaultButton";

/**
 * @param {String} element 
 * @param {Array} dataArray
 * @param {Number} length
 * @param {Object} elementProps
 * @returns {[JSX]}
 */

export const DefaultList = ({element, length}) => {
	const CustomTag = `${element}`;
	console.log(length);
	return (
		<CustomTag>
			hello
		</CustomTag>
	);
};