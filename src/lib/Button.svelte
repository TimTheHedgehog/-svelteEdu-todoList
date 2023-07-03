<script>
	export let size = 'L';

	export let backgroundColor = "#526ED3";
	export let backgroundColorHover = "#6C86E2";
	export let textColor = "#fff";
</script>

<button
	class:size-L={size == 'L'}
	class:size-M={size == 'M'}
	class:size-S={size == 'S'}
	class:size-XS={size == 'XS'}
	style:background={backgroundColor}
	
	style:color={textColor}
	{...$$restProps}
	>
	{#if $$slots.icoLeft}
	<div class="ico-left"
	class:ico-left_big={size == 'L' || size == 'M'}
	class:ico-left_small={size == 'S' || size == 'XS'}
	>
		<slot name="icoLeft"></slot>
	</div>
	{/if}
	
	<slot>
		<span
			class:main-text_big={size == 'L' || size == 'M'}
			class:main-text_small={size == 'S' || size == 'XS'}
			class="main-text">Button
		</span>
	</slot>
</button>

<style lang="scss">
	:root {
		font-size: 10px;
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;

		border-radius: 1.2rem;

		font-family: Manrope, sans-serif;
		font-weight: 800;
		font-style: normal;
		font-size: 1.5rem;
		line-height: 2.4rem;
		color: #ffffff;

		background: #526ED3;

		cursor: pointer;

		.ico-left {
			&_big {
			max-width: 2.4rem;
			max-height: 2.4rem;
			}

			&_small {
				max-width: 1.6rem;
				max-height: 1.6rem;
			}
		}

		.main-text {
			&_big {
				padding: 0 .8rem;
			}

			&_small {
				padding: 0 .4rem;
			}
		}

		&:disabled {
			opacity: 0.5600000023841858;

			cursor: not-allowed;
		}

		&.size-L {
			padding: 0 1.6rem;

			height: 5.6rem;

			font-weight: 800;
			font-size: 1.5rem;
			line-height: 2rem;
		}

		&.size-M {
			padding: 0 1rem;

			height: 4.4rem;

			font-weight: 800;
			font-size: 1.5rem;
			line-height: 2rem;
		}

		&.size-S {
			padding: 0 .8rem;

			height: 3.2rem;

			font-weight: 800;
			font-size: 1.3rem;
			line-height: 2rem;
		}

		&.size-XS {
			padding: 0 .4rem;

			height: 2.4rem;

			font-weight: 800;
			font-size: 1.3rem;
			line-height: 2rem;
		}
	}
</style>