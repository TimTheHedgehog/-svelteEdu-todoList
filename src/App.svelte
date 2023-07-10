<script>
	import { v4 as uuid } from "uuid";

	import Button from "./lib/TuiButton.svelte";

	import TuiIconCheckCircleLarge from "./assets/tui-icons/iconsComponents/TuiIconCheckCircleLarge.svelte";
	import TuiIconPlusCircleLarge from "./assets/tui-icons/iconsComponents/TuiIconPlusCircleLarge.svelte";

	import ToDoList from "./lib/ToDoList.svelte";
	import TuiInput from "./lib/TuiInput.svelte";

	let todoInput, todoItemsWrapper, toDoList;

	let todoItems = [
		{
			id: uuid(),
			title: "Title 1",
			completed: true,
		},
		{
			id: uuid(),
			title: "Title 2",
			completed: false,
		},
		{
			id: uuid(),
			title: "Title 3",
			completed: true,
		},
	];

	function addTodo() {
		if (!todoInput) return;

		todoItems = [
			...todoItems,
			{
				id: uuid(),
				title: todoInput,
				completed: false,
			},
		];

		todoInput = "";
	}

	function handleToggleTodo(event) {
		todoItems = todoItems.map((todo) => {
			if (todo.id == event.detail.id) {
				return { ...todo, completed: event.detail.value };
			}
			return { ...todo };
		});
		console.log(todoItems);
	}

	function handleDeleteTodo(event) {
		todoItems = todoItems.filter((todo) => {
			return event.detail.id == todo.id ? false : true;
		});
	}

	function todoListAfterUpdate(event) {
		if (event.detail.autoScroll) {
			todoItemsWrapper.scrollTo(0, todoItemsWrapper.scrollHeight);
		}
	}
</script>

<main>
	<section class="todo">
		<form class="todo__form" on:submit|preventDefault={addTodo} action="">
			<div class="todo__input">
				<TuiInput
					bind:value={todoInput}
					placeholder={"Write title of your todo"}
				/>
			</div>

			<div class="todo__button">
				<Button
					size="Fill"
					backgroundColor="var(--tui-primary)"
					backgroundColorHover="var(--tui-primary-hover)"
					textColor="var(--tui-text-01-night)"
					type="submit"
					disabled={!todoInput}
					>Add todo
					<div slot="icoLeft">
						<TuiIconPlusCircleLarge />
					</div>
				</Button>
			</div>
		</form>

		<article class="todo__items" bind:this={todoItemsWrapper}>
			<ToDoList
				{todoItems}
				on:toggletodo={handleToggleTodo}
				on:deleTodo={handleDeleteTodo}
				on:afterUpdate={todoListAfterUpdate}
				bind:this={toDoList}
			/>
		</article>
	</section>
</main>

<style lang="scss">
	.todo {
		margin: 0 auto;

		max-width: 500px;

		&__input {
			margin-bottom: 10px;
		}

		&__button {
			margin-bottom: 30px;
		}
	}

	.todo__items {
		overflow: auto;

		border: 1px solid var(--tui-base-03);

		border-radius: 10px;

		padding: 20px;

		height: calc(50vh);

		background: var(--tui-base-01);
	}
</style>
