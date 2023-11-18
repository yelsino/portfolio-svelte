<script lang="ts">
	import AboutMe from './sections/about-me.svelte';
	import Experiences from './sections/experiences.svelte';
	import Home from './sections/home.svelte';
	import Tools from './sections/tools.svelte';
	import Portfolio from './sections/portfolio.svelte';
	import NavBar from './sections/components/nav-bar.svelte';
	import ScrollDown from './sections/components/scroll-down.svelte';
	import type { PageData } from './$types';
	// import let data;

	export let data:PageData;
</script>

<main class="selection:bg-fuchsia-200 selection:text-black max-w-5xl mx-auto relative flex flex-col ">
	<NavBar />
	<div class="px-10 sm:px-20 flex flex-col gap-y-10">
		<Home tools={data} />
		<!-- <h1 class="text-black">{data.title}</h1> -->
		<AboutMe />
		<Experiences />
		<Tools />
		<Portfolio tools={data} />
	</div>
	<ScrollDown />
</main>
