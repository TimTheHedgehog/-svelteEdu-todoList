<script>
	import Button from "./lib/Button.svelte";
	import TuiIconCheckCircleLarge from "./assets/tui-icons/24px/TuiIconCheckCircleLarge.svelte"

	let isDisabled = false;
</script>

<Button 
	size="L" 
	backgroundColor="var(--tui-primary)"
	backgroundColorHover="var(--tui-primary-hover)"
	textColor="var(--tui-text-01-night)"
	disabled={isDisabled}
>
	<div slot="icoLeft">
		<TuiIconCheckCircleLarge />
	</div>
</Button>