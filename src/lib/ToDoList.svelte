<script>
	import {afterUpdate, createEventDispatcher} from "svelte";
	const dispatch = createEventDispatcher();

	import TuiButton from "./TuiButton.svelte";
	import TuiIconTrash2Large from "../assets/tui-icons/iconsComponents/TuiIconTrash2Large.svelte";
	import {fade, fly} from "svelte/transition";
	import {flip} from "svelte/animate";

	export let todoItems = [];
	export let isLoading = false;
	export let loadingError = null;
	export let disabledItems = [];

	let prevTodoItems = todoItems;
	let autoScroll = false;
	let transitionCounter = 300;

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
		console.log(todoItems);
	});
</script>

{#if loadingError}
	<p class="todo-element__not-founded-label">{loadingError}</p>
{:else if isLoading}
	<p class="todo-element__not-founded-label">Loading...</p>
{:else if todoItems.length > 0}
	{#each todoItems as todoItem (todoItem.id)}
		<ul
			class="todo-element"
			in:fade|local={{duration: transitionCounter}}
			out:fly|local={{x: -100}}
			animate:flip={{duration: 400}}
		>
			<label class="todo-element__label">
				<input
					class="todo-element__delete-ico"
					type="checkbox"
					checked={todoItem.completed}
					disabled={disabledItems.includes(todoItem.id)}
					on:input={event => {
						event.currentTarget.checked = todoItem.completed;
						handleToggleTodo(todoItem.id, !todoItem.completed);
					}}
				/>
				<li class="todo-element__title" class:through={todoItem.completed}>
					{todoItem.title}
				</li>
			</label>
			<TuiButton
				label={false}
				size={"S"}
				backgroundColor={"var(--tui-negative)"}
				backgroundColorHover={"var(--tui-negative-hover)"}
				aria-label={`Remove element ${todoItem.title}`}
				title={`Remove element`}
				on:click={() => {
					handleDeleteTodo(todoItem.id);
				}}
				disabled={disabledItems.includes(todoItem.id)}
			>
				<div slot="icoLeft"><TuiIconTrash2Large /></div>
			</TuiButton>
		</ul>
	{/each}
{:else}
	<p class="todo-element__not-founded-label">Elements not founded</p>
{/if}

<style lang="scss">
	:root {
		font-size: 10px;
	}
	.todo-element {
		display: flex;
		align-items: center;
		justify-content: space-between;

		border-bottom: 1px solid gray;

		&__label {
			display: grid;
			align-items: center;
			grid-template-columns: 0.01fr 1fr;
		}

		&__delete-ico {
			width: 2rem;
			height: 2rem;
		}

		&__title {
			padding: 1.6rem;

			font-family: Manrope, sans-serif;
			font-weight: 500;
			font-style: normal;
			font-size: 1.5rem;
			line-height: 2.4rem;
			word-wrap: break-word;

			&.through {
				opacity: 0.5;

				text-decoration: line-through;
			}
		}

		&__not-founded-label {
			font-family: Manrope, sans-serif;
			font-weight: 500;
			font-style: normal;
			font-size: 1.5rem;
			color: var(--tui-text-03);
		}
	}
</style>
