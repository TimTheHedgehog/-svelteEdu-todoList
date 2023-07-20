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
	<p
		in:fly|local={{x: 100}}
		out:fade|local={{duration: 100}}
		class="todo-element__not-founded-label"
	>
		{loadingError}
	</p>
{:else if isLoading}
	<p
		in:fly|local={{x: 100}}
		out:fade|local={{duration: 100}}
		class="todo-element__not-founded-label"
	>
		Loading...
	</p>
{:else if todoItems.length > 0}
	<ul>
		{#each todoItems as todoItem (todoItem.id)}
			<li
				class="todo-element"
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
					<li class="todo-element__title">
						<span
							class="todo-element__title-span"
							class:through-active={todoItem.completed}>{todoItem.title}</span
						>
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
			</li>
		{/each}
	</ul>
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
		}

		&__title-span {
			text-decoration: none;

			background-image: linear-gradient(black, black);
			background-position: center left;
			background-size: 0% 2px;
			background-repeat: no-repeat;

			transition: background-size 300ms ease-in-out;
		}

		&__not-founded-label {
			font-family: Manrope, sans-serif;
			font-weight: 500;
			font-style: normal;
			font-size: 1.5rem;
			color: var(--tui-text-03);
		}
	}

	.through-active {
		opacity: 0.5;

		background-size: 100% 2px;
	}
</style>
