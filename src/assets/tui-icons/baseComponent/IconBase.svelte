<script>
	export let title = null;
	export let viewBox;
	export let color = "currentColor";
</script>

<svg xmlns="http://www.w3.org/2000/svg" 
	{viewBox}
	style:color
	>
	{#if title}
		<title>{title}</title>
	{/if}
	<slot />
</svg>

<style>
	svg {
		width: 100%;
		height: auto;
		max-height: 100%;

		fill: currentColor;
		stroke: currentColor;
		stroke-width: 0;
	}
</style>
