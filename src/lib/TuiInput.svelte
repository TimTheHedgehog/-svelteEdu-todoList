<svelte:options immutable={true} />

<script>
	export let value;
	export let placeholder = "Hello";
</script>

<input type="text" {placeholder} bind:value />

<style lang="scss">
	:root {
		font-size: 10px;
	}

	input {
		border: 1px solid var(--day-base-base-04, #e0e0e0);

		border-radius: 1.2rem;

		padding: 0rem 0.8rem 0rem 1.6rem;

		width: 100%;
		height: 56px;

		font-family: Manrope, sans-serif;
		font-weight: 500;
		font-style: normal;
		font-size: 1.5rem;
		line-height: 2.4rem;

		background: var(--night-text-text-01, #fff);
	}
</style>
