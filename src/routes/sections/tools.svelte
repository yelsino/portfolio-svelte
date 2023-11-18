<script>
	import TitleSection from './components/title-section.svelte';
	import Tool from './components/tool.svelte';

	const tools = {
		backend: [
			{
				herramienta: 'NodeJS',
				nivel: 'Intermediante'
			},
			{
				herramienta: 'Express',
				nivel: 'Intermediante'
			},
			{
				herramienta: 'MongoDB',
				nivel: 'Intermediante'
			},
			{
				herramienta: 'Mongoose',
				nivel: 'Intermediante'
			},
			{
				herramienta: 'Spring Boot',
				nivel: 'Basico'
			},
			{
				herramienta: 'Mysql',
				nivel: 'Basico'
			}
		],
		frontend: [
			{
				herramienta: 'HTML',
				nivel: 'Experimentado'
			},
			{
				herramienta: 'CSS',
				nivel: 'Experimentado'
			},
			{
				herramienta: 'JavaScript',
				nivel: 'Experimentado'
			},
			{
				herramienta: 'React',
				nivel: 'Experimentado'
			},
			{
				herramienta: 'Tailwind',
				nivel: 'Experimentado'
			},
			{
				herramienta: 'Angular',
				nivel: 'Basico'
			}
		]
	};
</script>

<section id="tools" class="scroll-mt-20">

	<TitleSection title="Mis Herramientas" subtitle="¿Que uso para desarrollar?" />

	<div class="flex flex-col sm:flex-row gap-10">
    <Tool tools={tools.frontend} title="Frontend" />
    <Tool tools={tools.backend}  title="Backend" />
		
	</div>
</section>
