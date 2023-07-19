<script>
	import {fly} from "svelte/transition";

	export let todoNumber = 0;
</script>

<div class="counter">
	<slot>Replace me</slot>
	{#key todoNumber}
		<span in:fly|local={{y: -10}}>{todoNumber}</span>
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
