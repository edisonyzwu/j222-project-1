<script>
</script>

<header>
	<div class="logo-container">
		<img src="project/logo.png" alt="Berkeley Journalism" />
	</div>

	<nav>
		<ul>
			<li><a href="#project">Project</a></li>
			<!-- <li><a href="#methodology">Methodology</a></li> -->
			<li><a href="#about">Behind the Story</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
		position: fixed;
		width: 100%;
		z-index: 1000;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background-color: rgb(243, 243, 243);
		color: black;
	}

	.logo-container img {
		height: 40px;
		/* 
    width: 150px;
    object-fit: contain; 
    */
	}

	nav ul {
		list-style: none;
		display: flex;
		gap: 5rem;
		margin: 0;
		padding-right: 5rem;
	}

	nav a {
		text-decoration: none;
		color: rgb(123, 122, 122);
		font-family: "Lato", sans-serif;
		font-size: 16px;
		font-weight: bolder;
		font-family:
			ui-sans-serif,
			system-ui,
			-apple-system;
	}

	nav a:hover {
		opacity: 0.8;
		color: rgb(6, 21, 85);
	}
</style>
