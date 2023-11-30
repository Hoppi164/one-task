<script>
	// This is done in a single file for clarity. A more factored version here: https://svelte.dev/repl/288f827275db4054b23c437a572234f6?version=3.38.2
	import { flip } from 'svelte/animate';
	import Card from './Card.svelte';
	import { swipeable } from '@react2svelte/swipeable';
	export let items;
	$: itemsFiltered = items.filter((item) => item.status === 'Todo');
	$: itemsReversed = [...itemsFiltered].reverse();

	const flipDurationMs = 1000;

	function getTopCardIndex() {
		const topCard = itemsFiltered[0];
		console.log({ topCard });
		const index = items.findIndex((item) => item.id === topCard.id);
		console.log({ index });
		console.log(items[index]);
		return items.findIndex((item) => item.id === topCard.id);
	}

	function handler(e) {
		console.log(e);
		if (e.velocity <= 0.1) {
			return;
		}

		console.log('User swiped!', e.detail);
		const index = getTopCardIndex();
		const direction = e.detail.dir;

		if (direction === 'Right' && e.detail.absX >= 200) {
			items[index].status = 'Done';
		} else if (direction === 'Up') {
			items[index].status = 'Skipped';
		}
		console.log(items);
	}
</script>

<section class="deck">
	{#each itemsFiltered as item (item.id)}
		<div
			animate:flip={{ duration: flipDurationMs }}
			use:swipeable={{ delta: 100, preventScrollOnSwipe: true }}
			on:swiped={handler}
		>
			<Card task={item.name} numPoints={item.points} />
		</div>
	{/each}

	{#if itemsFiltered.length === 0}
		<h1>Done!</h1>
		<h2>No More Tasks Left</h2>
	{/if}
</section>

<!-- Todo -->
<!-- Re-implement this with swipable instead of drag and drop -->

<!-- https://github.com/react2svelte/swipeable -->
<style>
	:global(body) {
		overflow-y: hidden;
	}

	.deck {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 256px;
	}

	.deck > div {
		height: 80%;
		width: 80%;
	}
</style>
