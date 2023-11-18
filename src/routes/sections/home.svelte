<script lang="ts">
	import SocialMedia from "./components/social-media.svelte";
	import type { PageData } from "../$types";
  import tippy from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/material.css';
	import { onMount, onDestroy  } from "svelte";
  
  export let tools:PageData;
  // let activeImages = Object.keys(tools);

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

  let activeImages:any = []; // Lista de imágenes activas
  let activateAll = true; // Indica si deben activarse todas las imágenes

  const toggleImages = () => {
  if (activateAll) {
    // Activar aleatoriamente una imagen que esté desactivada
    const inactiveImages = Object.keys(tools).filter((key) => !activeImages.includes(key));
    if (inactiveImages.length > 0) {
      const randomIndex = Math.floor(Math.random() * inactiveImages.length);
      const randomKey = inactiveImages[randomIndex];
      const imgElement = document.getElementById(randomKey);

      if (imgElement !== null) {
        imgElement.classList.remove('grayscale-opaque');
        activeImages.push(randomKey);
      } else {
        console.error(`Elemento con ID ${randomKey} no encontrado.`);
      }
    } else {
      activateAll = false; // Todas las imágenes están activas, cambiar a apagar
    }
  } else {
    // Desactivar aleatoriamente una imagen activa
    if (activeImages.length > 0) {
      const randomIndex = Math.floor(Math.random() * activeImages.length);
      const randomKey = activeImages[randomIndex];
      const imgElement = document.getElementById(randomKey);

      if (imgElement !== null) {
        imgElement.classList.add('grayscale-opaque');
        activeImages.splice(randomIndex, 1);
      } else {
        console.error(`Elemento con ID ${randomKey} no encontrado.`);
      }
    } else {
      // Todas las imágenes están apagadas, cambiar a activar de nuevo
      activateAll = true;
      activeImages = [];
    }
  }
};

  onMount(() => {
    const interval = setInterval(toggleImages, 500); // Intervalo de 0.5 segundos

    // Limpiar el intervalo al salir del componente para evitar pérdida de memoria
    onDestroy(() => {
      clearInterval(interval);
    });
  });


</script>

<section id="home" class="sm:h-[calc(100vh-70px)] h-auto  pt-32 sm:pt-20 scroll-mt-20 flex flex-col justify-center items-center gap-y-10 relative">
  <p class="text-xl font-mono">Hola, soy</p>
  <div class="flex justify-center flex-col items-center">
    <h1 class="text-7xl font-semibold tracking-wider font-kodchasan ">Yelsiño</h1>
  <h2 class=" text-xl pt-3 font-mono text-gray-500">Full Stack Developer</h2>
  </div>

  <div class="flex justify-center gap-x-5">
    <button class="p-3 px-6 border border-color_purple3 transition ease-in-out duration-500 bg-black  text-white font-bold rounded-md hover:shadow-lg">
      <a download="cv yelsiño" href="/cv-yelsiño.pdf">
        Descargar CV
      </a>
    </button>
    <button class="p-3 px-6 border  transition ease-in-out duration-500 font-bold rounded-md hover:shadow-lg flex gap-x-2">
      <a
        target="_blank"
        href="https://wa.me/939616350?text=Me%20interesa%20tu%20perfil%20de%20desarrollador"
      >
        Hablemos 
      </a>
      <span><img src="/send.svg" alt=""></span>
    </button>
  </div>

  <div class="flex flex-wrap gap-x-5 gap-y-2 max-w-md mx-14">
    {#each Object.entries(tools) as [key, tool]}
      <div use:tooltip={{ content: tool.text, theme: 'tomato'}} class="w-12 h-12 flex justify-center items-center overflow-hidden">
        <img id={key} src={tool.url} alt={tool.alt} class="object-contain  grayscale-opaque" width="91%" />
      </div>
    {/each}
  </div>

  <SocialMedia />
  
</section>


<style>
	/* Aplicar filtro de escala de grises con opacidad */
	.grayscale-opaque {
    filter: grayscale(100%) opacity(0.2); 
  transition: filter 0.3s ease-in-out, opacity 0.5s ease-in-out; 
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