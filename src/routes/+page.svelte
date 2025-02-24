<script>
	let eventDate = new Date("2025-02-24T16:00:00").getTime();
	let countdown = "";

	function updateCountdown() {
		let now = new Date().getTime();
		let diff = eventDate - now;
		if (diff <= 0) {
			countdown = "Event Started!";
		} else {
			let days = Math.floor(diff / (1000 * 60 * 60 * 24));
			let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
			countdown = `${days}d ${hours}h ${minutes}m`;
		}
	}

	setInterval(updateCountdown, 1000);
</script>

<div class="container text-center my-5">
	<h1>🚀 FutureTech Summit 2025</h1>
	<p>Innovating Tomorrow, Today!</p>
	<button class="btn btn-primary btn-lg">Register Now</button>
</div>

<div class="container text-center my-5">
	<h2>Countdown to Event</h2>
	<p class="display-4">{countdown}</p>
</div>

<div class="container text-center my-5">
	<h2>Keynote Speakers</h2>
	<div class="row">
		<div class="col-md-4 speaker-card">
			<img src="/speaker1.jpg" alt="Speaker 1">
			<h4>Sunil Ajmera</h4>
			<p>CTO, TechCorp</p>
		</div>
		<div class="col-md-4 speaker-card">
			<img src="/speaker2.jpg" alt="Speaker 2">
			<h4>Rajesh Shukla</h4>
			<p>CEO, AI Innovations</p>
		</div>
		<div class="col-md-4 speaker-card">
			<img src="/speaker3.jpg" alt="Speaker 3">
			<h4>Matthew D'Silva</h4>
			<p>Lead Engineer, CloudX</p>
		</div>
	</div>
</div>

<style>
    .speaker-card {
        background-color: #222;
        padding: 15px;
        border-radius: 10px;
        color: white;
        text-align: center;
        margin: 5px; /* Reduced margin to keep them in one row */
        flex: 1; /* Makes each card take equal space */
        min-width: 250px;
    }

    .speaker-card img {
        width: 100px; /* Reduced size */
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 10px;
        border: 3px solid #fff;
    }

    .speaker-container {
        display: flex;
        justify-content: center; /* Centers items */
        gap: 10px; /* Space between cards */
        flex-wrap: wrap; /* Ensures responsiveness */
    }
</style>

