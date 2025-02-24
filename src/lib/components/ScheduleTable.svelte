<script>
	export let schedule = [
		{ date: "Feb 26", time: "10:00 AM", topic: "AI & The Future", speaker: "Dr. John Doe" },
		{ date: "Feb 26", time: "2:00 PM", topic: "Blockchain Security", speaker: "Sarah Lee" },
	];
</script>

<table class="table table-bordered">
	<thead class="thead-dark">
	<tr>
		<th>Date</th>
		<th>Time</th>
		<th>Topic</th>
		<th>Speaker</th>
	</tr>
	</thead>
	<tbody>
	{#each schedule as session}
		<tr>
			<td>{session.date}</td>
			<td>{session.time}</td>
			<td>{session.topic}</td>
			<td>{session.speaker}</td>
		</tr>
	{/each}
	</tbody>
</table>

<style>
    table {
        width: 100%;
    }
</style>
