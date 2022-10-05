<script>
	export let title = 'iframe';
	export let src = undefined;
</script>

<iframe data-why {title} {src}>
	<slot />
</iframe>