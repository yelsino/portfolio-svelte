<script lang="ts">
	import Modal from './components/Modal/modal.svelte';
	import Footer from './components/footer.svelte';
	import NavBar from './components/nav-bar.svelte';
	
	let showModal = false;

	const handleModal = ()=> (showModal = !showModal);



</script>


<div class="mx-auto relative flex flex-col  items-center">
    <NavBar handleModal={handleModal} />
    <slot />
    
		<Footer />

		<Modal bind:showModal>
			<h2 slot="header">
				modal
				<small><em>adjective</em> mod·al \ˈmō-dəl\</small>
			</h2>
		
			<ol class="definition-list">
				<li>of or relating to modality in logic</li>
				<li>
					containing provisions as to the mode of procedure or the manner of taking effect —used of a
					contract or legacy
				</li>
				<li>of or relating to a musical mode</li>
				<li>of or relating to structure as opposed to substance</li>
				<li>
					of, relating to, or constituting a grammatical form or category characteristically indicating
					predication
				</li>
				<li>of or relating to a statistical mode</li>
			</ol>
		
			<a href="https://www.merriam-webster.com/dictionary/modal">merriam-webster.com</a>
		</Modal>

</div>




