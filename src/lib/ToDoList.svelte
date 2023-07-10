<script>
	import {
		afterUpdate,
		createEventDispatcher,
		onDestroy,
		onMount,
	} from "svelte";
	import TuiButton from "./TuiButton.svelte";
	import TuiIconTrash2Large from "../assets/tui-icons/iconsComponents/TuiIconTrash2Large.svelte";

	export let todoItems = [];
	let prevTodoItems = todoItems;
	let autoScroll = false;

	const dispatch = createEventDispatcher();

	function handleToggleTodo(id, value) {
		dispatch("toggletodo", {
			id,
			value,
		});
	}

	function handleDeleteTodo(id) {
		dispatch("deleTodo", {
			id,
		});
	}

	$: {
		autoScroll = todoItems.length > prevTodoItems.length;
		prevTodoItems = todoItems;
	}

	afterUpdate(() => {
		dispatch("afterUpdate", {
			autoScroll,
		});
	});
</script>

{#each todoItems as todoItem (todoItem.id)}
	<ul class="todo-element">
		<label>
			<input
				type="checkbox"
				checked={todoItem.completed}
				on:input={() => {
					handleToggleTodo(todoItem.id, !todoItem.completed);
				}}
			/>
			<li class:through={todoItem.completed}>{todoItem.title}</li>
		</label>
		<TuiButton
			label={false}
			size={"S"}
			backgroundColor={"var(--tui-negative)"}
			backgroundColorHover={"var(--tui-negative-hover)"}
			on:click={() => {
				handleDeleteTodo(todoItem.id);
			}}
		>
			<div slot="icoLeft"><TuiIconTrash2Large /></div>
		</TuiButton>
	</ul>
{/each}

<style lang="scss">
	:root {
		font-size: 10px;
	}
	.todo-element {
		display: flex;
		align-items: center;
		justify-content: space-between;

		border-bottom: 1px solid gray;

		label {
			display: grid;
			align-items: center;
			grid-template-columns: 0.01fr 1fr;

			input {
				width: 2rem;
				height: 2rem;
			}
		}
		li {
			padding: 1.6rem;

			font-family: Manrope, sans-serif;
			font-weight: 500;
			font-style: normal;
			font-size: 1.5rem;
			line-height: 2.4rem;
			word-wrap: break-word;

			&.through {
				text-decoration: line-through;
			}
		}
	}
</style>
