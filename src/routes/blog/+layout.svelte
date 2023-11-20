<script lang="ts">
	import type { LayoutData } from './$types';
	import Footer from './components/footer.svelte';
	import NavBar from './components/nav-bar.svelte';

	export let data: LayoutData;
</script>


<div class="mx-auto relative flex flex-col  items-center">
    <NavBar />
    <slot />
    <Footer />

</div>




