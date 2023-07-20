<script>
	import {v4 as uuid} from "uuid";

	import TuiInput from "./lib/TuiInput.svelte";
	import Button from "./lib/TuiButton.svelte";
	import ToDoList from "./lib/ToDoList.svelte";

	import TuiIconPlusCircleLarge from "./assets/tui-icons/iconsComponents/TuiIconPlusCircleLarge.svelte";
	import {onMount} from "svelte";
	import ToDoCounter from "./lib/ToDoCounter.svelte";

	import spin from "./lib/transitions/spin";

	let todoInput, todoItemsWrapper, toDoList;
	let todoItems = [];
	let loadingError, isLoading;
	let isAdding = false;
	let disabledItems = [];
	let isTodoItemsLoaded = false;

	$: completedTodos = todoItems.filter(todo => todo.completed == true);

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

		isTodoItemsLoaded = true;
	}

	function addTodo() {
		if (!todoInput) return;

		isAdding = true;
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
				todoItems = [{...element, id: uuid()}, ...todoItems];
				console.log(todoItems);
			});

		todoInput = "";
	}

	function handleToggleTodo(event) {
		const id = event.detail.id;
		console.log(event);

		if (disabledItems.includes(id)) return;
		disabledItems = [...disabledItems, id];

		fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
			method: "PATCH",
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
			body: JSON.stringify({
				completed: event.detail.value,
			}),
		}).then(async response => {
			if (response.ok) {
				const updatedTodo = await response.json();

				if (!("id" in updatedTodo)) {
					todoItems = todoItems.map(todo => {
						if (todo.id == event.detail.id) {
							return {...todo, completed: event.detail.value};
						}
						return {...todo};
					});
				} else {
					todoItems = todoItems.map(todo => {
						if (todo.id == event.detail.id) {
							return updatedTodo;
						}
						return {...todo};
					});
				}
			}

			disabledItems = disabledItems.filter(element => {
				element != id;
			});
		});
	}

	async function handleDeleteTodo(event) {
		const id = event.detail.id;

		if (disabledItems.includes(id)) return;
		disabledItems = [...disabledItems, id];

		await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
			method: "DELETE",
		}).then(response => {
			if (response.ok) {
				todoItems = todoItems.filter(element => element.id != event.detail.id);
			}
		});

		disabledItems = disabledItems.filter(element => {
			element != id;
		});
	}

	function todoListAfterUpdate(event) {
		if (event.detail.autoScroll && isAdding) {
			todoItemsWrapper.scrollTo(0, 0);
		}
		isAdding = false;
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

		<section class="todo__counters">
			<ToDoCounter {isTodoItemsLoaded} todoNumber={todoItems.length}
				>Number of todos:</ToDoCounter
			>
			<ToDoCounter {isTodoItemsLoaded} todoNumber={completedTodos.length}
				>Completed:</ToDoCounter
			>
		</section>

		<article class="todo__items" bind:this={todoItemsWrapper}>
			<ToDoList
				{disabledItems}
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

		&__counters {
			display: flex;
			justify-content: space-between;

			padding: 0 1rem;
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
