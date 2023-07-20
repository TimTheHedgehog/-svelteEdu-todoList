<script>
	import {fade, fly} from "svelte/transition";
	import spin from "./transitions/spin";
	import {afterUpdate, onMount} from "svelte";

	export let todoNumber;
	export let isTodoItemsLoaded = false;
</script>

<div class="counter">
	<slot>Replace me</slot>
	{#if isTodoItemsLoaded}
		{#key todoNumber}
			<span in:spin|local>{todoNumber}</span>
		{/key}
	{/if}
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
