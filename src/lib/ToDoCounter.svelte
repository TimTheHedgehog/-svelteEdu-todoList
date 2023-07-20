<script>
	import {fly} from "svelte/transition";
	import spin from "./transitions/spin";

	export let todoNumber = 0;
</script>

<div class="counter">
	<slot>Replace me</slot>
	{#key todoNumber}
		<span in:spin>{todoNumber}</span>
	{/key}
</div>

<style lang="scss">
	.counter {
		font-family: Manrope, sans-serif;
		font-weight: 500;
		font-style: normal;
		font-size: 1.3rem;
		line-height: 2.4rem;
		word-wrap: break-word;

		span {
			display: inline-block;
		}
	}
</style>
