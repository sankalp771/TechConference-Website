<script>
	let speakers = [
		{
			name: "Sunil Ajmera",
			image: "/speaker1.jpg",
			bio: "Sunil is a seasoned software engineer with 10 years of experience in full-stack development."
		},
		{
			name: "Rajesh Shukla",
			image: "/speaker2.jpg",
			bio: "Rajesh is an expert in UI/UX design and has worked on top-rated applications for various industries."
		},
		{
			name: "Matthew D'Silva",
			image: "/speaker3.jpg",
			bio: "Matthew is a data scientist specializing in AI and machine learning with a focus on predictive analytics."
		}
	];
</script>
<br>
<h1 class="text-center"> Meet Our Speakers</h1>

<div class="row">
	{#each speakers as { name, image, bio }}
		<div class="col-md-4">
			<div class="card">
				<img src={image} class="card-img-top" alt={name}>
				<div class="card-body">
					<h5 class="card-title">{name}</h5>
					<p class="card-text">{bio}</p>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
    .card {
        border: none;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease-in-out;
        text-align: center;
    }

    .card:hover {
        transform: scale(1.05);
    }

    .card-img-top {
        width: 100%; /* Ensure responsiveness */
        height: 350px; /* Set a max height */
        object-fit: cover; /* Crop the image properly */
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .card-body {
        padding: 15px;
        background: #f8f9fa; /* Light background */
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .card-title {
        font-size: 1.25rem;
        font-weight: bold;
    }

    .card-text {
        font-size: 1rem;
        color: #666;
    }

    .row {
        display: flex;
        justify-content: center;
        gap: 0px;
        margin-top: 20px;
    }
</style>
