<script>
	import Card from '$lib/components/Card.svelte';
</script>

<div class="cardContainer">
	<Card task="Take out the trash" numPoints={11} />
</div>

<style>
	.cardContainer {
		height: 100vh;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
