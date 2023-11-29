<script>
	import HorizontalList from './HorizontalList.svelte';

	let tasks = [
		{ id: 1, name: 'Take out the trash', points: 11 },
		{ id: 2, name: 'Do the dishes', points: 5 },
		{ id: 3, name: 'Clean the bathroom', points: 7 },
		{ id: 4, name: 'Do the laundry', points: 9 },
		{ id: 5, name: 'Clean the kitchen', points: 3 },
		{ id: 6, name: 'Vacuum the floor', points: 4 },
		{ id: 7, name: 'Mop the floor', points: 6 },
		{ id: 8, name: 'Clean the windows', points: 8 }
	];
</script>

<HorizontalList items={tasks} />
