<script lang="ts">
	export let handleModal:any;
</script>

<nav
	class="w-full fixed max-w-5xl mx-auto py-3 z-30 flex justify-between items-center px-10  bg-white font-kodchasan top-0  "
>
	<!-- <div class="flex gap-x-5 items-center"> -->
		<ul class="font-bold text-lg">
			<a href="/">Yelsiño</a>
		</ul>

		<button on:click={handleModal} 
			class="flex items-center gap-x-3 bg-color_pink2 px-2 py-1 rounded-lg font-dm-sans font-medium cursor-pointer select-none text-color_pink1"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="w-4 h-4"
			>
				<path
					fill-rule="evenodd"
					d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
					clip-rule="evenodd"
				/>
			</svg>
			<p>Buscar</p>
			<div class=" rounded-lg px-2 border-[1.4px] border-color_pink1 text-sm">Ctrl k</div>
		</button>
	<!-- </div> -->

</nav>



	<!-- <div class="flex gap-x-3 items-center">
		<button class="text-color_pink1 tracking-tight font-medium">Iniciar sesion</button>
		<a
			href="/blog"
			class="rounded-full px-4 py-1 bg-black text-white  ease-in-out duration-300 font-kodchasan font-bold"
			>Subscribe</a
		>
	</div> -->