<script>
	import LineThroughStyles from "./LineThroughEffectSettings";

	export let isThrough = false;
	// export let backgroundImage = "linear-gradient(black, black)";
</script>

<span
	class={isThrough == true
		? `${LineThroughStyles.LineThroughActive} ${LineThroughStyles.LineThroughMain}`
		: `${LineThroughStyles.LineThroughMain}`}><slot>Replace me</slot></span
>
