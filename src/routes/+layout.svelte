<script>
	import '@picocss/pico/css/pico.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div id="main-content" data-theme="dark">
	<div class="container-fluid">
		<Navbar />
		<slot />
	</div>
</div>

<style>
	#main-content {
		background-color: var(--background-color);
		height: 100%;
		min-height: 100vh;
	}

	:global(.text-center) {
		text-align: center;
	}
	:global(.clickable-button) {
		cursor: pointer;
	}
</style>
