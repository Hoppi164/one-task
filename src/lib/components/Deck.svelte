<script>
	// This is done in a single file for clarity. A more factored version here: https://svelte.dev/repl/288f827275db4054b23c437a572234f6?version=3.38.2
	import { flip } from 'svelte/animate';
	import Card from './Card.svelte';
	import { swipeable } from '@react2svelte/swipeable';
	import Points from './Points.svelte';
	import { numPoints, animationDuration } from '$lib/stores/mainstore';
	export let items;
	$: itemsFiltered = items.filter((item) => item.status === 'Todo');

	function animateCardRight(e) {
		const card = e.srcElement.querySelector('.card');
		card.animate(
			[{ transform: 'translateX(0) rotate(0)' }, { transform: 'translateX(150%) rotate(45deg)' }],
			{
				duration: $animationDuration,
				easing: 'ease-in-out',
				fill: 'forwards'
			}
		);
	}

	function animateCardUp(e) {
		const card = e.srcElement.querySelector('.card');
		card.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-150%)' }], {
			duration: $animationDuration,
			easing: 'ease-in-out',
			fill: 'forwards'
		});
	}

	function animatePoints(e) {
		const point = e.srcElement.querySelector('.point');
		point.animate([{ transform: 'translateX(75vw) translateY(-45vh)', zIndex: 1 }], {
			duration: $animationDuration,
			easing: 'ease-in-out',
			fill: 'forwards'
		});
	}

	function getTopCardIndex() {
		const topCard = itemsFiltered[0];
		const index = items.findIndex((item) => item.id === topCard.id);
		return index;
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
			console.log('animating');
			animateCardRight(e);
			animatePoints(e);
			setTimeout(() => {
				items[index].status = 'Done';
				numPoints.update((n) => n + items[index].points);
			}, $animationDuration);
		} else if (direction === 'Up') {
			animateCardUp(e);
			setTimeout(() => {
				items[index].status = 'Skipped';
			}, $animationDuration);
		}
		console.log(items);
	}
</script>

<section class="deck">
	{#each itemsFiltered as item (item.id)}
		<div
			animate:flip={{ duration: $animationDuration }}
			use:swipeable={{ delta: 100, preventScrollOnSwipe: true }}
			on:swiped={handler}
		>
			<Card task={item.name} numPoints={item.points} />
			<div class="point">
				<Points pointType="star" />
			</div>
		</div>
	{/each}

	{#if itemsFiltered.length === 0}
		<h1>Done!</h1>
		<h2>No More Tasks Left</h2>
	{/if}
</section>

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

	.point {
		position: absolute;
		/* top: 0; */
		/* left: 0; */
		z-index: -1;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: -15%;
	}
</style>
