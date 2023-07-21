<script>
	export let isThrough = false;

	export let opacity = 0.5;
	export let backgroundSize = "100% 2px";
</script>

<span class="strike-item" class:cross-out={isThrough}
	><slot>Replace me</slot></span
>

<style>
	.strike-item {
		text-decoration: none;

		background-image: linear-gradient(black, black);
		background-position: center left;
		background-size: 0% 2px;
		background-repeat: no-repeat;

		transition: background-size 300ms ease-in-out;
	}

	.cross-out {
		opacity: 0.5;

		background-size: 100% 2px;
	}
</style>
