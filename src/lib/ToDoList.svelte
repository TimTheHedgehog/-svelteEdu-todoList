<script>
	export let todoItems = [];
</script>

{#each todoItems as todoItem, index (todoItem.id)}
	<ul>
		<li>{todoItem.title}</li>
	</ul>
{/each}

<style lang="scss">
	ul {
		li {
			padding: 1.6rem;

			font-family: Manrope, sans-serif;
			font-weight: 500;
			font-style: normal;
			font-size: 1.5rem;
			line-height: 2.4rem;
		}
	}
</style>