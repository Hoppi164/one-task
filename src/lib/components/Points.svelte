<script>
	/** @type {String} */
	export let pointType = 'star';
	$: pointImageSrc = `images/${pointType}.svg`;
</script>

<img src={pointImageSrc} alt="Number of points" class="pointsImage" />

<style>
	.pointsImage {
		/* box-shadow: 0 0 2px 2px black; */
		filter: drop-shadow(0px 0px 4px black);
		width: var(--points-image-width, 21px);
	}
</style>
