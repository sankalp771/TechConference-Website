<script>
	export let name;
	export let logo;
	export let link;
</script>

<a href={link} target="_blank" class="sponsor-card">
	<img src={logo} alt={name} />
	<p>{name}</p>
</a>

<style>
    .sponsor-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: inherit;
    }
    .sponsor-card img {
        width: 100px;
        height: auto;
    }
</style>
