<script>
	export let name;
	export let title;
	export let image;
	export let bio;
</script>

<div class="card speaker-card">
	<img src={image} alt={name} class="card-img-top" />
	<div class="card-body">
		<h5 class="card-title">{name}</h5>
		<p class="card-subtitle text-muted">{title}</p>
		<p class="card-text">{bio}</p>
	</div>
</div>

<style>
    .speaker-card {
        text-align: center;
    }
    .card-img-top {
        width: 100%;
        height: 100px;
        object-fit: cover;
        border-radius: 10px;
    }
</style>
