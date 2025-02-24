<script>
	let name = "";
	let email = "";
	let message = "";

	function submitForm() {
		alert(`Thank you, ${name}! Your message has been sent.`);
	}
</script>

<div class="container my-5">
	<h1 class="text-center mb-4">📍 Contact Us</h1>
	<p class="text-center">Have questions? Reach out to us!</p>

	<div class="row justify-content-center">
		<div class="col-md-6">
			<form on:submit|preventDefault={submitForm}>
				<div class="mb-3">
					<label class="form-label">Name</label>
					<input type="text" class="form-control" bind:value={name} required />
				</div>
				<div class="mb-3">
					<label class="form-label">Email</label>
					<input type="email" class="form-control" bind:value={email} required />
				</div>
				<div class="mb-3">
					<label class="form-label">Message</label>
					<textarea class="form-control" bind:value={message} required></textarea>
				</div>
				<button type="submit" class="btn btn-primary w-100">Send Message</button>
			</form>
		</div>
	</div>

</div>
