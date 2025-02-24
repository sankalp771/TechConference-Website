<script>
	let selectedDay = "All";
	let schedule = [
		{ date: "Feb 24", time: "10:00 AM", topic: "AI & The Future", speaker: "John Doe" },
		{ date: "Feb 24", time: "2:00 PM", topic: "Blockchain Security", speaker: "Jane Smith" },
		{ date: "Feb 25", time: "11:00 AM", topic: "Cybersecurity Trends", speaker: "Alice Brown" },
	];

	function filterSchedule() {
		return selectedDay === "All" ? schedule : schedule.filter(event => event.date === selectedDay);
	}
</script>

<div class="container my-5">
	<h1 class="text-center">📅 Conference Schedule</h1>

	<div class="text-center mb-3">
		<select bind:value={selectedDay} class="form-select w-25 mx-auto">
			<option value="All">All Days</option>
			<option value="Feb 24">Feb 24</option>
			<option value="Feb 25">Feb 25</option>
		</select>
	</div>

	<table class="table">
		<thead>
		<tr>
			<th>Date</th>
			<th>Time</th>
			<th>Topic</th>
			<th>Speaker</th>
		</tr>
		</thead>
		<tbody>
		{#each filterSchedule() as event}
			<tr>
				<td>{event.date}</td>
				<td>{event.time}</td>
				<td>{event.topic}</td>
				<td>{event.speaker}</td>
			</tr>
		{/each}
		</tbody>
	</table>
</div>
