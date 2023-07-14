<script>
	import {v4 as uuid} from "uuid";

	import TuiInput from "./lib/TuiInput.svelte";
	import Button from "./lib/TuiButton.svelte";
	import ToDoList from "./lib/ToDoList.svelte";

	import TuiIconPlusCircleLarge from "./assets/tui-icons/iconsComponents/TuiIconPlusCircleLarge.svelte";
	import {onMount} from "svelte";

	let todoInput, todoItemsWrapper, toDoList;
	let todoItems = [];
	let loadingError, isLoading;
	let afterUpdateCounter = 0;

	onMount(() => {
		loadTodos();
	});

	async function loadTodos() {
		isLoading = true;
		await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					loadingError = "Error loading todos from server";
					console.log("Loading error");
				}
			})
			.then(todoItemsFromAPI => (todoItems = todoItemsFromAPI));
		isLoading = false;
	}

	function addTodo() {
		if (!todoInput) return;

		fetch("https://jsonplaceholder.typicode.com/todos", {
			method: "POST",
			headers: {"Content-type": "application/json"},
			body: JSON.stringify({
				id: uuid(),
				title: todoInput,
				completed: false,
			}),
		})
			.then(response => response.json())
			.then(element => {
				todoItems = [...todoItems, {...element, id: uuid()}];
			});

		todoInput = "";
	}

	function handleToggleTodo(event) {
		todoItems = todoItems.map(todo => {
			if (todo.id == event.detail.id) {
				return {...todo, completed: event.detail.value};
			}
			return {...todo};
		});
	}

	function handleDeleteTodo(event) {
		todoItems = todoItems.filter(todo => {
			return event.detail.id == todo.id ? false : true;
		});
	}

	function todoListAfterUpdate(event) {
		if (event.detail.autoScroll && afterUpdateCounter > 3) {
			todoItemsWrapper.scrollTo(0, todoItemsWrapper.scrollHeight);
		} else {
			todoItemsWrapper.scrollTo(0, 0);
		}
		afterUpdateCounter++;
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
					aria-label="Add element"
					title="Add element"
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
				{isLoading}
				{loadingError}
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

		&__items {
			overflow: auto;

			border: 1px solid var(--tui-base-03);

			border-radius: 10px;

			padding: 20px;

			height: calc(50vh);

			background: var(--tui-base-01);
		}
	}
</style>
