<script lang="ts">
	import tippy from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/material.css';

	export let project = {
		img: '',
		detalle: '323ewq',
		description: '',
		repository: '',
		liveDemo: '',
		tools: [
			{
				url: '',
				text: '',
				alt: '',
				color: ''
			}
		]
	};

	function tooltip(node:any, options:any) {
		const tooltip:any = tippy(node, options);

		return {
			update(options:any) {
				tooltip.setProps(options);
			},
			destroy() {
				tooltip.destroy();
			}
		};
	}



</script>

<div class="p-5 rounded-3xl bg-gray-50">
	<div class=" mx-auto flex flex-col gap-y-7">
		<img class="rounded-2xl object-cover" src={project.img} alt="gaaa" />

		<div>
			<p class="text-xl text-left font-bold font-poppins">{project.description}</p>
			<p class="text-lg text-left font-dm-sans">{project.detalle}</p>
		</div>

		<!-- <div class="text-lg text-left font-dm-sans">
			
		</div> -->

		<div class="flex gap-x-5 flex-col">
			<p class="text-left pb-2">Desarrollado con</p>

			<div class="flex flex-wrap gap-x-5 gap-y-2">
				{#each project.tools as tool}
					<div use:tooltip={{ content: tool.text, theme: 'tomato'}} class="w-12 h-12 flex justify-center items-center overflow-hidden">
						<img src={tool.url} alt={tool.alt} class="object-contain  grayscale-opaque" width="91%" />
					</div>
				{/each}
			</div>
		</div>

		<div class=" flex justify-start gap-x-5">
			<a
				target="_blank"
				href={project.liveDemo}
				class="p-3 px-6 transition ease-in-out duration-500 font-bold hover: rounded-md hover:shadow-lg bg-black text-white"
			>
				Ver demo
			</a>

			<a
				target="_blank"
				href={project.repository}
				class="flex gap-x-2 p-3 px-6 border border-color_purple3 transition ease-in-out duration-500 font-bold rounded-md hover:shadow-lg"
			>
				Github
				<img class="w-4" src="/github-icon.svg" alt="logo de github" />
			</a>
		</div>
	</div>
</div>

<style>
	/* Aplicar filtro de escala de grises con opacidad */
	.grayscale-opaque {
		filter: grayscale(100%) opacity(0.7); /* Cambia el valor de '0.5' según tu preferencia */
		transition: filter 0.3s ease;
	}

	/* Eliminar el filtro al hacer hover sobre la imagen */
	.grayscale-opaque:hover {
		filter: none;
	}

	.tippy-box[data-theme~='tomato'] {
  background-color: tomato;
  color: yellow;
}
</style>
