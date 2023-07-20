import {cubicInOut} from "svelte/easing";

export default function spin(
	node,
	{delay = 0, duration = 300, easing = cubicInOut, spin = 1},
) {
	return {
		delay,
		duration,
		easing,
		css: t => {
			return `
		transform: rotate(${t * 360}deg);
			`;
		},
	};
}
