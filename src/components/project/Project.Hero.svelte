<script>
	import Hero from "$components/helpers/Hero.svelte";

	/* 
		The Hero component is a full-width image or video with a headline, dek, and byline (these are optional).
		- hed: The headline for the hero.
		- dek: The dek for the hero.
		- byline: The byline for the hero.
		- src: The source of the image or video file.
		- alt: The alt text, if it's an image.
	*/
</script>

<Hero
	hed="<strong>The $315 Billion Question: How <br><span style='color: #f0a91d;'>Mass Deportation</span> Could Disrupt the <br>U.S. Economy </strong>"
	byline="By Edison Wu, Ava Hu, Tina Chen"
	src="assets/demo/test.jpg"
	alt=""
/>

<!-- Hero with video -->
<!-- <Hero
	hed="This is a placeholder headline"
	dek="Welcome to this demo"
	byline="By This Person and That Person"
	src="assets/demo/test.mp4"
	alt="Flourescent jellyfish moving around"
/> -->
