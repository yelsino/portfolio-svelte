<script lang="ts">
	import ItemTools from "./item-tools.svelte";
  export let tools:any;
  export let title:string
</script>

<div class="bg-gray-50 px-5 py-10 w-full sm:w-1/2 rounded-xl flex flex-col items-center ">
  <p class="text-center text-2xl pb-7">{title}</p>
  <div class="grid grid-cols-2 text-lg gap-10">
    {#each tools as tool}
      <ItemTools tool={tool} />
    {/each}
  </div>
</div>