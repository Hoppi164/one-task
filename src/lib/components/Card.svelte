<script>
	import Points from './Points.svelte';

	/** @type {string} */
	export let task;

	/** @type {number} */
	export let numPoints;

	/** @type {boolean} */
	export let isRepeatingTask = false;

	/** @type {string} */
	export let image = 'tarot-red-leaf';
	$: cardImage = `images/${image}.webp`;
</script>

<div class="card" style="--card-image: url({cardImage});">
	<div class="cardHeader" />
	<div class="cardFooter">
		<h2 class="task">{task}</h2>
		<div>
			<div class="points">
				<Points />
				<span>{numPoints}</span>
			</div>
			{#if isRepeatingTask}
				<span>REPEAT</span>
			{/if}
		</div>
	</div>
</div>

<style>
	.card {
		background: var(--card-image);
		aspect-ratio: 8.22 / 11.22;
		background-repeat: no-repeat;
		height: 50%;
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 8px;
		box-shadow: 0 0 2px 2px darkgrey;
	}

	.cardHeader {
		width: 100%;
		background-color: rgba(255, 255, 255, 0.4);
	}
	.cardFooter {
		width: 100%;
		background-color: rgba(255, 255, 255, 0.4);
		margin-bottom: 16px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		vertical-align: middle;
	}

	.cardFooter h2 {
		margin: 0;
		margin-top: 8px;
	}

	.task {
		font-family: 'Roboto';
		font-size: 18pt;
	}

	.points {
		font-family: monospace;
		font-size: 16pt;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 4px;
		padding: 4px;
	}
</style>
