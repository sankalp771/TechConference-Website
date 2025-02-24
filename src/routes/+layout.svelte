<script>
	import "bootstrap/dist/css/bootstrap.min.css";
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from "$lib/components/Footer.svelte";
	import { onMount } from "svelte";

	let darkMode = false;

	// Load user's dark mode preference
	onMount(() => {
		darkMode = localStorage.getItem("darkMode") === "true";
		updateTheme();
	});

	function toggleDarkMode() {
		darkMode = !darkMode;
		localStorage.setItem("darkMode", darkMode);
		updateTheme();
	}

	function updateTheme() {
		if (darkMode) {
			document.body.classList.add("dark-mode");
		} else {
			document.body.classList.remove("dark-mode");
		}
	}
</script>

<svelte:head>
	<style>
      :root {
          --primary-color: #8A2BE2;
          --secondary-color: #E6E6FA;
          --dark-bg: #121212;
          --light-bg: #ffffff;
      }

      body {
          background-color: var(--light-bg);
          color: black;
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
      }

      /* ✅ Dark Mode Styles */
      body.dark-mode {
          background-color: var(--dark-bg);
          color: white;
      }

      /* ✅ Fix Footer Floating Issue */
      html, body {
          height: 100%;
          display: flex;
          flex-direction: column;
      }

      .wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh; /* ✅ Full height of viewport */
      }

      main {
          flex: 1; /* ✅ Pushes footer to bottom */
          padding-bottom: 20px;
      }

      footer {
          width: 100%;
          background: #1a1a2e; /* ✅ Cyberpunk dark blue */
          color: white;
          text-align: center;
          padding: 15px;
          box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);
          margin-top: auto; /* ✅ Ensures footer stays at the bottom */
      }

      body.dark-mode footer {
          background: #222;
          color: white;
      }

      footer a {
          color: #a29bfe; /* ✅ Cyberpunk Neon */
          text-decoration: none;
          margin: 0 10px;
          font-weight: bold;
      }

      footer a:hover {
          color: #ff00ff; /* ✅ Neon pink hover */
          text-shadow: 0 0 8px #ff00ff;
      }
	</style>
</svelte:head>

<div class="wrapper">
	<Navbar {darkMode} on:toggleDarkMode={toggleDarkMode} />
	<main>
		<slot /> <!-- This slot will render the current page content -->
	</main>
	<Footer />
</div>
