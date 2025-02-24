<script>
	import { onMount } from "svelte";

	// Check local storage for theme preference
	let darkMode = true;

	function toggleTheme() {
		darkMode = !darkMode;
		document.documentElement.classList.toggle("light-mode", !darkMode);
		localStorage.setItem("theme", darkMode ? "dark" : "light");
	}

	onMount(() => {
		darkMode = localStorage.getItem("theme") !== "light";
		document.documentElement.classList.toggle("light-mode", !darkMode);
	});
</script>

<button on:click={toggleTheme} class="theme-button">Toggle Mode</button>

<style>
    :global(:root) {
        --bg-dark: #1a1a2e;
        --bg-light: #ffffff;
        --text-dark: #e0e0e0;
        --text-light: #1a1a2e;
        --neon-purple: #8a2be2;
        --neon-blue: #00f0ff;
    }

    :global(body) {
        background-color: var(--bg-dark);
        color: var(--text-dark);
        transition: background 0.3s, color 0.3s;
    }

    :global(.light-mode) {
        background-color: var(--bg-light);
        color: var(--text-light);
    }

    .theme-button {
        background: linear-gradient(45deg, var(--neon-purple), var(--neon-blue));
        color: white;
        border: none;
        padding: 12px 24px;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        border-radius: 5px;
        text-shadow: 0 0 5px white;
        box-shadow: 0 0 10px var(--neon-purple), 0 0 20px var(--neon-blue);
    }

    .theme-button:hover {
        box-shadow: 0 0 15px var(--neon-purple), 0 0 30px var(--neon-blue);
        transform: scale(1.05);
    }
</style>
