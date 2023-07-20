import {cubicInOut} from "svelte/easing";

export default function spin(
	node,
	{delay = 0, duration = 300, easing = cubicInOut, spin = 1},
) {
	const originalTransform = getComputedStyle(node).transform.replace(
		"none",
		"",
	);
	console.log(originalTransform);
	return {
		delay,
		duration,
		easing,
		css: t => {
			return `
		transform: ${originalTransform} rotate(${spin * t * 360}deg);
			`;
		},
	};
}
