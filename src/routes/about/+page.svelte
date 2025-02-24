<script>
	import { onMount } from "svelte";

	let aboutText = "Welcome to FutureTech Summit 2025, where innovation meets vision. Join industry leaders, developers, and tech enthusiasts for an immersive experience covering AI, Web3, Cybersecurity, and more.";

	onMount(() => {
		document.title = "About | FutureTech Summit 2025";
	});
</script>

<div class="container my-5">
	<h1 class="text-center mb-4">🚀 About the Conference</h1>
	<p class="lead text-center">{aboutText}</p>

	<div class="row mt-5 align-items-center">
		<!-- Image Section -->
		<div class="col-md-6 text-center">
			<img src="/techconf.jpg" alt="Conference Event" class="about-img">
		</div>

		<!-- Text Content -->
		<div class="col-md-6">
			<h3> Why Attend?</h3>
			<ul>
				<li>💡 Connect with top tech leaders and innovators.</li>
				<li>📈 Stay ahead with the latest tech trends and advancements.</li>
				<li>🛠️ Engage in hands-on workshops and networking opportunities.</li>
			</ul>
		</div>
	</div>
</div>

<style>
    .about-img {
        width: 100%;
        max-width: 500px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease-in-out;
    }

    .about-img:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }

    ul {
        list-style: none;
        padding-left: 0;
    }

    ul li {
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: bold;
        display: flex;
        align-items: center;
    }


</style>
