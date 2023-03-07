<script>
	/** @type {string} */
	export let task;

	/** @type {string} */
	export let points;

	/** @type {boolean} */
	export let isRepeatingTask = false;

	/** @type {string} */
	export let image;
</script>

<div>
	<div class="cardHeader" />
	<div class="cardFooter">
		<h1>{task}</h1>
		<div class="grid">
			<span>#{points}</span>
			<span>{isRepeatingTask}</span>
		</div>
	</div>
</div>

<style>
</style>
