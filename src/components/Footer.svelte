<script>
	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
</script>

<footer>
	<div class="footer-top">
		<h4><strong>About</strong></h4>
		<button class="back-to-top" on:click={scrollToTop}>Back to Top</button>
	</div>
	<p>
		The $315 Billion Question is a project produced by Edison Wu, Ava Hu, and
		Tina Chen at the UC Berkeley Graduate School of Journalism, under the
		guidance of lecturer Michelle Pera-McGhee.
	</p>
</footer>

<style>
	footer {
		background: var(--color-gray-800);
		color: white;
		padding: 3rem 10rem;
		font-family: "Lato", sans-serif;
		font-size: 16px;
	}

	/* 让标题和按钮并排，标题居左，按钮居右 */
	.footer-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem; /* 与段落留点间距 */
	}

	.footer-top h4 {
		margin: 0;
	}

	.back-to-top {
		background-color: #f0a91d;
		color: #001947;
		border: none;
		border-radius: 4px;
		padding: 0.5rem 1rem;
		cursor: pointer;
		font-size: 14px;
	}

	.back-to-top:hover {
		opacity: 0.8;
	}

	p {
		padding-right: 200px;
	}
</style>
