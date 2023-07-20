import {cubicInOut} from "svelte/easing";

export default function lineThrough(
	node,
	{
		delay = 0,
		duration = 400,
		thickness = "2px",
		color = "black",
		easing = cubicInOut,
		spin = 1,
	},
) {
	return {
		delay,
		duration,
		easing,
		css: t => {
			return `
				text-decoration: none;

				background-image: linear-gradient(${color}, ${color});
				background-position: center left;
				background-size: ${t * 100}% ${thickness};
				background-repeat: no-repeat;

				transition: background-size ${duration} ease-in-out;
			`;
		},
	};
}
