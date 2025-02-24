<script>
	import { onMount } from 'svelte';
	let darkMode = false;

	function toggleDarkMode() {
		darkMode = !darkMode;
		document.body.classList.toggle("dark-mode", darkMode);
		localStorage.setItem("darkMode", darkMode); // Store user preference
	}

	onMount(() => {
		darkMode = localStorage.getItem("darkMode") === "true";
		document.body.classList.toggle("dark-mode", darkMode);
	});
</script>

<button on:click={toggleDarkMode} class="toggle-btn">
	{darkMode ? "Light Mode" : "Dark Mode"}
</button>

<style>
    .toggle-btn {
        background-color: #444;
        color: white;
        padding: 8px 15px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        margin-left: auto;
    }

    .dark-mode {
        background-color: #121212;
        color: white;
    }
</style>
