<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import ListArticles from './components/list-articles.svelte';

	const dispatch = createEventDispatcher();

	const filters = [
		{
			name: 'muestra todo',
			id: '1'
		},
		{
			name: 'solo AI',
			id: '2'
		},
		{
			name: 'programación',
			id: '3'
		},
		{
			name: 'cuida la vista',
			id: '4'
		}
	];

	let selectedOption: any = {
		name: 'muestra todo',
		id: '1'
	};

	function handleChange(event: any) {
		const selectedId = parseInt(event.target.value);
		selectedOption = filters.find((filter) => Number(filter.id) === selectedId);
		dispatch('change', selectedOption);
	}
</script>

<main
	class="selection:bg-fuchsia-200 selection:text-black max-w-5xl mx-auto relative flex flex-col mt-28 px-10 gap-y-10  pb-10"
>
	<section>
		<h1 class="text-center font-kodchasan text-4xl font-black">
			RELAJATE <br /> <span class="text-color_pink1">USA AI</span> A TU FAVOR <br /> PROGRAMACIÓN INTERACTIVA
		</h1>

		<p class="text-center font-mono text-2xl text-gray-600">
			Potencia tu creatividad con la sinergia entre la <br /> inteligencia artificial y la
			programación <br /> interactiva
		</p>
	</section>

	<section>
		<div class="flex gap-x-3 mb-10">
			{#each filters as filter}
				<label for={filter.id} class="flex items-center cursor-pointer">
					<input
						type="radio"
						id={filter.id}
						value={filter.id}
						on:change={handleChange}
						name="filters"
						bind:group={selectedOption.id}
						class="sr-only"
					/>
					<span
						class="px-2 py-1 rounded-full border-2 border-color_pink1 hover:bg-color_pink2 hover:border-color_pink1
                            {selectedOption.id === filter.id
							    ? 'bg-color_pink2 text-color_pink1 '
							    : 'bg-white'}"
					>
						{filter.name}
					</span>
				</label>
			{/each}
			
		</div>

		<ListArticles />
	</section>
</main>


