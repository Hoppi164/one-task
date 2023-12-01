<script>
	import Points from './Points.svelte';
	import { numPoints } from '$lib/stores/mainstore';
</script>

<nav>
	<ul>
		<li><strong>⚙️</strong></li>
	</ul>
	<ul>
		<li class="pointsCounter"><Points /><strong>{$numPoints}</strong></li>
	</ul>
</nav>

<style>
	.pointsCounter {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4px;
	}
</style>
