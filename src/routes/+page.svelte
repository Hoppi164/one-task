<script>
	// import Hand from '$lib/components/Hand.svelte';
	import Deck from '$lib/components/Deck.svelte';

	let tasks = [
		{ id: 1, name: 'Take out the trash', points: 11, status: 'Todo' },
		{ id: 2, name: 'Do the dishes', points: 5, status: 'Todo' },
		{ id: 3, name: 'Clean the bathroom', points: 7, status: 'Todo' },
		{ id: 4, name: 'Do the laundry', points: 9, status: 'Todo' },
		{ id: 5, name: 'Clean the kitchen', points: 3, status: 'Todo' },
		{ id: 6, name: 'Vacuum the floor', points: 4, status: 'Todo' },
		{ id: 7, name: 'Mop the floor', points: 6, status: 'Todo' },
		{ id: 8, name: 'Clean the windows', points: 8, status: 'Todo' }
	];
</script>

<!-- <Hand /> -->
<Deck items={tasks} />
