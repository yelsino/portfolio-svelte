<script lang="ts">
	import type { PageData } from './$types';
	import Comments from './components/comments.svelte';

	export let data: PageData;
</script>

<main
	class="selection:bg-fuchsia-200 selection:text-black max-w-5xl mx-auto relative flex flex-col mt-24 px-10 gap-y-10 pb-10  w-full"
>
	<div>
		<span class="text-gray-500">Lunes 25 de Mayo 2023</span>
		<p class="bg-black text-white w-full py-8 text-4xl px-5 font-bold ">{data.title}</p>
	</div>

    <div class="flex flex-col gap-y-5">
        {#each data.content as content }
            <section>
                <h2 class="font-bold text-2xl">{content.section}</h2>
                <p class="text-xl">{content.description}</p>
            </section>
        {/each}
    </div>

    <Comments />
</main>
