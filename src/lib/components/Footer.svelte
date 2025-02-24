<script>
	export let year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="footer-content">
		<p>&copy; {year} FutureTech Summit. All Rights Reserved.</p>
		<nav class="footer-links">
			<a href="https://twitter.com" target="_blank">Twitter</a>
			<a href="https://linkedin.com" target="_blank">LinkedIn</a>
			<a href="https://facebook.com" target="_blank">Facebook</a>
		</nav>
	</div>
</footer>

<style>
    /* ✅ Make sure the body takes full height */
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
    }

    /* ✅ Main content expands to push footer down */
    main {
        flex: 1;
    }

    /* ✅ Cyberpunk Footer */
    .footer {
        background: #1a1a2e; /* Cyberpunk dark blue */
        color: #fff;
        text-align: center;
        padding: 20px;
        width: 100%;
        box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        bottom: 0;
        left: 0;
    }

    .footer-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .footer-links {
        display: flex;
        gap: 15px;
    }

    .footer a {
        color: #a29bfe; /* Neon lavender */
        text-decoration: none;
        font-weight: bold;
        transition: color 0.3s ease-in-out;
    }

    .footer a:hover {
        color: #ff00ff; /* Neon pink */
        text-shadow: 0 0 8px #ff00ff;
    }

    /* ✅ Dark Mode Adjustments */
    body.dark-mode .footer {
        background: #121212; /* Deep black for dark mode */
        color: white;
    }

    body.dark-mode .footer a {
        color: #00ffff; /* Neon cyan */
    }

    body.dark-mode .footer a:hover {
        color: #ff00ff;
    }
</style>
