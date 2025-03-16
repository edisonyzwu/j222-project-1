<script>
	import Scrolly from "$components/helpers/Scrolly.svelte";

	/*
		Scrolly is a component that allows you to create a scrollytelling effect.
		- value: Takes on the value of the current scroll step that's most in view.

		When using Scrolly, create a container with the class "sticky" and the CSS in the example below.
		That will create a sticky container that will stay in place while the steps scroll over it.
	*/

	let value = $state();

	const explanation = [
		"If considered as a state, their population would rank among the nation’s top 10.",
		"comparable to Georgia’s entire population.",
		"These people, though, are more than just numbers.\n\nThey've been living here for ten, twenty years, or more.\n\nThey work, pay taxes, and raise their families here.",
		"They are your neighbors, taxi drivers, the ones who keep your garden pretty and keep your house clean.",
		"They are the ones who offered care and support for your kids in school and for your parents in hospitals. ",
		"However, if the mass deportation program goes forward, their fate could be irrevocably altered in just a few weeks."
	];
</script>

<section id="scrolly">
	<div class="sticky">
		{#if value === 0}
			<img src="/project/map1.svg" alt="a map of US" />
		{:else if value === 1}
			<img src="/project/map1-1.svg" alt="a map of US with Georgia" />
		{:else if value === 2}
			<img src="/project/family.png" alt="an immigrant family" />
		{:else if value === 3}
			<img src="/project/driver.png" alt="immigrant workers" />
		{:else if value === 4}
			<img src="/project/hospital.png" alt="immigrant workers" />
		{:else if value === 5}
			<img src="/project/leave.png" alt="immigrant workers left" />
		{:else}
			<h2>Current scroll step: <span>{value}</span></h2>
		{/if}
	</div>

	<div class="spacer"></div>

	<Scrolly bind:value>
		{#each explanation as text, i}
			{@const active = value === i}
			<div class="step" class:active>
				<p>{text}</p>
			</div>
		{/each}
	</Scrolly>

	<div class="spacer"></div>
</section>

<style>
	.sticky {
		position: sticky;
		top: 10em;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60vh;
		z-index: -1;
	}

	.sticky img {
		width: 80vw;
		height: auto;
		max-width: 1000px;
	}

	.spacer {
		height: 50vh;
	}

	.step {
		margin: 80vh 0;
		background: var(--color-gray-100);
		text-align: center;
	}

	.step p {
		padding: 3rem;
	}

	span {
		background: var(--color-mark);
		padding: 0 8px;
	}

	p {
		white-space: pre-line;
		line-height: 1.5;
	}
</style>
