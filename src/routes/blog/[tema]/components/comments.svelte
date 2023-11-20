<script>
	// Datos de ejemplo para los comentarios
	let comentarios = [
		{
			id: 2,
			autor: {
				id: 2,
				nombre: 'Comentarista45',
				imagen: 'ruta/a/imagen2.jpg'
			},
			contenido: 'Me encantó la profundidad de los temas abordados. ¡Gran trabajo!',
			fechaCreacion: '2023-11-19',
			likes: 25,
			dislikes: 1,
			corazones: 12,
			guardados: 7
		},
		{
			id: 3,
			autor: {
				id: 3,
				nombre: 'LectorCurioso',
				imagen: 'ruta/a/imagen3.jpg'
			},
			contenido:
				'El artículo presenta información relevante de manera clara y concisa. ¡Felicidades!',
			fechaCreacion: '2023-11-18',
			likes: 18,
			dislikes: 2,
			corazones: 9,
			guardados: 4
		},
		{
			id: 4,
			autor: {
				id: 4,
				nombre: 'Explorador123',
				imagen: 'ruta/a/imagen4.jpg'
			},
			contenido:
				'Me gustaría profundizar más en uno de los puntos mencionados. ¿Hay alguna referencia adicional?',
			fechaCreacion: '2023-11-17',
			likes: 12,
			dislikes: 0,
			corazones: 6,
			guardados: 3
		},
		{
			id: 5,
			autor: {
				id: 5,
				nombre: 'FanDeLaRedacción',
				imagen: 'ruta/a/imagen5.jpg'
			},
			contenido:
				'Siempre espero con ansias nuevos artículos de este sitio. Son muy informativos y bien redactados.',
			fechaCreacion: '2023-11-16',
			likes: 30,
			dislikes: 4,
			corazones: 15,
			guardados: 10
		},
		{
			id: 6,
			autor: {
				id: 6,
				nombre: 'CriticoConstructivo',
				imagen: 'ruta/a/imagen6.jpg'
			},
			contenido: 'Buen enfoque, pero sería valioso explorar otros ángulos en futuros artículos.',
			fechaCreacion: '2023-11-15',
			likes: 8,
			dislikes: 6,
			corazones: 3,
			guardados: 2
		},
		{
			id: 7,
			autor: {
				id: 7,
				nombre: 'SeguidorFiel22',
				imagen: 'ruta/a/imagen7.jpg'
			},
			contenido:
				'Este tipo de contenido siempre me inspira a investigar más sobre el tema. ¡Gracias!',
			fechaCreacion: '2023-11-14',
			likes: 20,
			dislikes: 1,
			corazones: 11,
			guardados: 6
		},
		{
			id: 8,
			autor: {
				id: 8,
				nombre: 'OpiniónDiversa99',
				imagen: 'ruta/a/imagen8.jpg'
			},
			contenido:
				'Diversidad de opiniones enriquece la discusión. Me gusta la variedad de perspectivas presentadas.',
			fechaCreacion: '2023-11-13',
			likes: 15,
			dislikes: 3,
			corazones: 7,
			guardados: 4
		},
		{
			id: 9,
			autor: {
				id: 9,
				nombre: 'SeguidorEntusiasta',
				imagen: 'ruta/a/imagen9.jpg'
			},
			contenido: '¡Sigan así! Los contenidos son siempre interesantes y bien documentados.',
			fechaCreacion: '2023-11-12',
			likes: 22,
			dislikes: 0,
			corazones: 10,
			guardados: 8
		},
		{
			id: 10,
			autor: {
				id: 10,
				nombre: 'DebateApasionado',
				imagen: 'ruta/a/imagen10.jpg'
			},
			contenido:
				'Interesante artículo, pero difiero en ciertos puntos. ¿Se puede discutir más al respecto?',
			fechaCreacion: '2023-11-11',
			likes: 10,
			dislikes: 5,
			corazones: 4,
			guardados: 1
		}
		// Puedes agregar más comentarios si es necesario
	];
</script>

{#if comentarios.length > 0}
	<div class="flex gap-y-5 flex-col">
		{#each comentarios as comentario (comentario.id)}
			<div class="flex gap-x-3">
				<div class="w-10 h-10 bg-color_pink1 rounded-full"></div>
				<div class=" w-full">
					<div class="bg-gray-50 p-5">
						<div class="flex gap-x-3 items-center">
							<p class="font-bold text-xl">{comentario.autor.nombre}</p>
							<span class="text-gray-500">{comentario.fechaCreacion}</span>
						</div>
						<p class="text-xl">{comentario.contenido}</p>
					</div>
					<!-- reacciones -->
					<div class="flex gap-x-5">
						<div class="flex gap-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              
              

							<span>{comentario.likes}</span>
						</div>
						<!--  -->
						<div class="flex gap-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
              </svg>
              
							<span>{comentario.likes}</span>
						</div>
						<!--  -->
						<div class="flex gap-x-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-6 h-6"
							>
								<path
									d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z"
								/>
							</svg>

							<span>{comentario.likes}</span>
						</div>
						<!--  -->
					</div>
				</div>
			</div>
		{/each}
	</div>
{:else}
	<p>No hay comentarios aún.</p>
{/if}
