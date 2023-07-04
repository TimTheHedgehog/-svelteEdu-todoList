<script>
	import { v4 as uuid } from "uuid";

	import Button from "./lib/TuiButton.svelte";
	import TuiIconCheckCircleLarge from "./assets/tui-icons/24px/TuiIconCheckCircleLarge.svelte";

	import ToDoList from "./lib/ToDoList.svelte";

	let isDisabled = false;

	let todoItems = [
		{
			id: uuid(),
			title: "Title 1",
			completed: true
		},
		{
			id: uuid(),
			title: "Title 2",
			completed: true
		},
		{
			id: uuid(),
			title: "Title 3",
			completed: true
		},
	]
</script>

<Button 
	size="fill" 
	backgroundColor="var(--tui-primary)"
	backgroundColorHover="var(--tui-primary-hover)"
	textColor="var(--tui-text-01-night)"
	disabled={isDisabled}
>
	<div slot="icoLeft">
		<TuiIconCheckCircleLarge />
	</div>
</Button>

<ToDoList todoItems={todoItems}/>