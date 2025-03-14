<svelte:head>
	<!-- ✅ Correctly add Bootstrap JS -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" defer></script>

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

      /* ✅ Ensure Navbar Works */
      .navbar-collapse {
          transition: height 0.3s ease-in-out;
      }
	</style>
</svelte:head>

<script>
	import 'bootstrap/dist/css/bootstrap.min.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';

	let darkMode = false;

	onMount(() => {
		darkMode = localStorage.getItem('darkMode') === 'true';
		updateTheme();
	});

	function toggleDarkMode() {
		darkMode = !darkMode;
		localStorage.setItem('darkMode', darkMode);
		updateTheme();
	}

	function updateTheme() {
		if (darkMode) {
			document.body.classList.add('dark-mode');
		} else {
			document.body.classList.remove('dark-mode');
		}
	}
</script>

<div class="wrapper">
	<Navbar {darkMode} on:toggleDarkMode={toggleDarkMode} />
	<main>
		<slot />
	</main>
	<Footer />
</div>
