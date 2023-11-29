<script>
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
	import Card from './Card.svelte';
	export let items;
	const flipDurationMs = 300;
	function handleDndConsider(e) {
		items = e.detail.items;
	}
	function handleDndFinalize(e) {
		items = e.detail.items;
	}
</script>

<section
	use:dndzone={{ items, flipDurationMs }}
	on:consider={handleDndConsider}
	on:finalize={handleDndFinalize}
>
	{#each items as item (item.id)}
		<div animate:flip={{ duration: flipDurationMs }}>
			<Card task={item.name} numPoints={item.points} />
		</div>
	{/each}
</section>

<style>
	section {
		height: 100%;
		border: 1px solid black;
		display: flex;
		justify-content: center;
		align-items: start;
		flex-wrap: wrap;
		overflow-x: hidden;
	}
</style>
