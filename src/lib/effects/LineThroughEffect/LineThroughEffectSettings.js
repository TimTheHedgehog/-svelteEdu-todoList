import {css} from "@emotion/css";

let opacity = 0.5;
let throughWidth = "100";
let throughThickness = "2";

const LineThroughStyles = {
	/**
	 * Set new opacity value for all active element
	 *
	 * @param {number} value - New value for opacity.
	 * @default 0.5
	 * @returns {void}
	 */
	setOpacity(value) {
		opacity = value;
	},

	/**
	 * Set new width for strikethrough line (from 0 to 100)
	 *
	 * @param {number} value - New value for strikethrough line width.
	 * @default 100
	 * @returns {void}
	 */
	setThroughWidth(value) {
		throughWidth = `${value}`;
	},

	/**
	 * Set new thickness for strikethrough line
	 *
	 * @param {number} value - New value for strikethrough line thickness.
	 * @default 2
	 * @returns {void}
	 */
	setThroughThickness(value) {
		throughThickness = `${value}`;
	},

	get LineThroughActive() {
		return css`
			opacity: ${opacity};
			background-size: ${throughWidth}% ${throughThickness}px !important;
		`;
	},

	get LineThroughMain() {
		return css`
			text-decoration: none;
			background-image: linear-gradient(black, black);
			background-position: center left;
			background-size: 0% 2px;
			background-repeat: no-repeat;
			transition: background-size 300ms ease-in-out, opacity 300ms ease-in-out;
		`;
	},
};

export default LineThroughStyles;
