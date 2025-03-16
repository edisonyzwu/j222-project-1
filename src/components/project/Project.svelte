<script>
	import ProjectHero from "$components/project/Project.Hero.svelte";
	import ProjectScrolly from "$components/project/Project.Scrolly.svelte";
	// import ProjectImages from "$components/project/Project.Images.svelte";
	// import ProjectVideo from "$components/project/Project.Video.svelte";
	import TileMap from "$components/project/TileMap.svelte";
	/*
		This is a demonstration of all the helper components.
	*/
</script>

<div id="demo">
	<ProjectHero />

	<div class="text">
		<p>
			Over the past months since President Donald Trump took back the office,
			the United States has witnessed an unprecedented surge in immigration
			enforcement. From airports to residential neighborhoods, from city streets
			to factory floors, reports of immigration officers rounding up
			undocumented immigrants have dominated national headlines.
		</p>

		<p>
			Proposals for mass deportation have become not just political slogans, but
			“realistic” options for policymakers. But is it really realistic?
		</p>

		<p>
			Behind this seemingly simple policy choice are hundreds of billions of
			dollars in costs, ripple effects that would profoundly alter the structure
			of the economy, and changes in the fate of countless families.
		</p>

		<p>
			If these measures are meant to make America “safer and stronger,” then one
			fundamental question must be answered first:
		</p>

		<div class="decorated-title">
			<h1>What is the price?</h1>
		</div>

		<p>First of all, let’s count the number of undocumented immigrants.</p>

		<p>
			As of 2022, there are approximately <strong>11 million </strong> undocumented
			immigrants in the United States.
		</p>

		<p>That's 3.3% of the total population.</p>

		<section>
			<TileMap />
		</section>

		<p class="mid">But what does 11 million people mean?</p>

		<!-- <section>
			<ProjectImages />
		</section> -->

		<!-- <section>
			<ProjectVideo />
		</section> -->

		<section>
			<ProjectScrolly />
		</section>

		<p>
			The process of expelling an immigrant can be roughly divided into four
			stages. At every stage, it consumes huge amounts of fiscal spending.
		</p>

		<div class="image">
			<img src="/project/process.svg" alt="process of deportation" />
		</div>

		<p>And all at the expense of the American taxpayer.</p>

		<div class="arrest-section">
			<div class="content">
				<h2 class="title">1. Arrest</h2>
				<p>
					The first step in mass deportation is arresting undocumented
					immigrants.
				</p>
				<p>This is not an easy task. The immigrants will not sit still.</p>
			</div>
			<div class="icon-container">
				<img src="/project/icon-arrest.svg" alt="Police officers" />
			</div>
		</div>

		<p>
			How is the government going to arrest hundreds or tens of millions of
			immigrants in a short period of time?
		</p>
		<p>
			The most likely way is to rely on the cooperation of local law enforcement
			agencies. massive raids on neighborhoods, factories, and construction
			sites.
		</p>
		<p>And even take people directly from hospitals, schools, and shelters.</p>

		<p>The financial costs are just as staggering.</p>
		<p>
			According to the American Immigration Council, each arrest – when
			factoring in the cost of transporting an arrestee to a detention center –
			amounts to roughly $6,737 per person.
		</p>
		<p>
			Overall, to execute the entire deportation program, the government would
			need to spend an astonishing $89.3 billion solely on arrests.
		</p>

		<div class="arrest-section">
			<div class="content">
				<h2 class="title">2. Detention</h2>
				<p>
					After arrest, many would be sent to immigration detention centers to
					await deportation proceedings.
				</p>
				<p>
					But the problem is: detention centers simply can't hold that many
					people.
				</p>
			</div>
			<div class="icon-container">
				<img src="/project/icon-detention.svg" alt="Detention" />
			</div>
		</div>
		<p>
			Currently, there are approximately 40,000[2] detention beds across the
			United States, which is nowhere near enough to support the need to hold
			more than one million people per year.
		</p>
		<p>
			As a result, the government will need to build new detention facilities
			and pay high operating costs over time.
		</p>

		<div class="image-space">
			<img src="/project/detention-cost.svg" alt="cost" />
		</div>
		<div class="image-space">
			<img src="/project/space.svg" alt="space" />
		</div>

		<div class="arrest-section">
			<div class="content">
				<h2 class="title">3. Legal Process</h2>
				<p>
					Every immigrant who is deported has the right to a legal proceeding.
				</p>
				<p>
					his means that millions of cases need to be handled by the immigration
					courts.
				</p>
			</div>
			<div class="icon-container">
				<img src="/project/icon-legal.svg" alt="Legal Process" />
			</div>
		</div>

		<p>
			The average cost per case handled by the Executive Office for Immigration
			Review (EOIR) is $1,719.57.
		</p>
		<p>
			The Office of the Principal Legal Advisor (OPLA) has an average cost of
			$850 per case.
		</p>
		<p>However, the U.S. immigration court system is already overburdened.</p>
		<p>There are already over 2.5 million pending cases in 2023.</p>
		<p>
			If another 1 million deportation cases per year are added, the entire
			system will be completely overwhelmed.
		</p>
		<p>
			Therefore, a large number of new judges would need to be recruited to
			handle the cases.
		</p>
		<p>
			Estimates of government spending on legal proceedings are expected to
			reach $34.1 billion.
		</p>
		<p>Equivalent to approximately $100 per U.S. resident[3].</p>

		<div class="arrest-section">
			<div class="content">
				<h2 class="title">4. Deportation</h2>
				<p>
					Removing undocumented immigrants from the U.S. to their countries of
					origin requires a huge logistical and financial investment.
				</p>
			</div>
			<div class="icon-container">
				<img src="/project/icon-deportation.svg" alt="Deportation" />
			</div>
		</div>

		<p>
			Some immigrants come from countries that are far away, such as China,
			India, Venezuela, African countries
		</p>
		<p>Not every country is willing to accept deportees.</p>

		<div class="datawrapper">
			<iframe
				title="Unauthorized Immigrant Population Estimates by Top 10 Countries of Birth: 2022"
				aria-label="Bar Chart"
				id="datawrapper-chart-ATfZK"
				src="https://datawrapper.dwcdn.net/ATfZK/1/"
				scrolling="no"
				frameborder="0"
				style="width: 0; min-width: 100% !important; border: none;"
				height="470"
				data-external="1"
			></iframe><script type="text/javascript">
				!(function () {
					"use strict";
					window.addEventListener("message", function (a) {
						if (void 0 !== a.data["datawrapper-height"]) {
							var e = document.querySelectorAll("iframe");
							for (var t in a.data["datawrapper-height"])
								for (var r = 0; r < e.length; r++)
									if (e[r].contentWindow === a.source) {
										var i = a.data["datawrapper-height"][t] + "px";
										e[r].style.height = i;
									}
						}
					});
				})();
			</script>
		</div>
		<p>
			In these cases, the U.S. government has no option but to rely on costly
			charter flights to return migrants to their home countries. Each chartered
			flight is estimated to cost approximately $17,000 per hour. Factoring in
			airfare, security escorts, and document processing, the total government
			expenditure on deportations is projected to reach $24.1 billion.
		</p>
		<p>
			Considering these costs, even under the most conservative estimate,
			deporting all 13.3 million individuals at once would amount to an
			unprecedented financial burden.
		</p>

		<div class="total-cost">
			<h3>
				<strong
					>It would cost at least <br />
					<span style="color: #f0a91d;">$315 Billion</span> in total.</strong
				>
			</h3>
		</div>

		<p>
			However, in practice, it would be nearly impossible to evict so many
			people at once, so evictions would need to be spread out over a number of
			years.
		</p>
		<p>
			It is estimated that if 1 million people were evicted each year for 10.6
			years, the total cost would amount to about <strong>$967.9 Billion</strong
			>.
		</p>

		<div class="total-cost">
			<h3>
				<strong
					>This is about
					<span style="color: #f0a91d;">three times </span> <br />as much as
					$315 Billion!</strong
				>
			</h3>
		</div>

		<p>
			And these expenses only represent the direct costs of deportation, without
			counting the broader economic impact.
		</p>

		<div class="decorated-title">
			<h1>U.S. Economic Impact</h1>
		</div>

		<p>
			The United States is a country that relies heavily on immigrants.
			especially in labor-intensive industries such as construction,
			agriculture, and hospitality.
		</p>
		<p>What would happen if we lose them?</p>
		<div class="image">
			<img src="/project/construction.svg" alt="construction and agriculture" />
		</div>
		<p>
			Specific occupations: trades such as plasterers, roofers, and painters,
			where about 30% of the workforce are undocumented immigrants.
		</p>
		<p>
			But in a family, as the parent, as the child, they will lose almost 100%
			of the stability of life if they are forced apart.
		</p>
		<p>
			Undocumented immigrants have a labor participation rate of 90%. while the
			labor participation rate for native-born Americans is only 61.3%.
		</p>
		<p>
			1 in 20 workers are undocumented immigrants Undocumented immigrants play
			an important role in the labor force in many states.
		</p>
		<p>
			Undocumented immigrants aren’t just numbers—they’re the people who keep
			daily life running smoothly. If they were gone, everyday conveniences
			would take a hit.
		</p>
		<p>
			Uber waiting times will be double. Deliveries may expect delays. Keeping
			your gardens neat and beautiful without a hardworking gardener would be
			much harder.
		</p>
		<p>
			If they are massively deported, it will be very difficult for American
			businesses to fill those positions, leading to higher prices, inflation
			and recession.
		</p>
		<p>Ultimately, all Americans will have to bear the consequences.</p>

		<div class="methodology">
			<h2>Authors' note</h2>
			<p>
				Data collected by <a
					href="https://www.americanimmigrationcouncil.org/research/mass-deportation"
					target="_blank"
					rel="noopener noreferrer">American Immigration Council</a
				>
			</p>
			<p>[1]</p>
			<p>
				[2] PBS Immigrant detention beds may be maxed out as Trump promises mass
				deportations
			</p>
			<p>[3] U.S. Population Projected to Reach 341,145,670</p>
		</div>
	</div>
</div>

<style>
	.text {
		max-width: 40rem;
		padding: 16px;
		margin: 0 auto;
		font-family:
			ui-sans-serif,
			system-ui,
			-apple-system;
	}

	section {
		margin: 50px auto;
		padding-top: 32px;
	}

	.decorated-title {
		display: flex;
		align-items: center;
		width: 100%;
		margin: 30px 0;
		margin-bottom: 50px;
	}

	.decorated-title h1 {
		padding: 0 20px;
		font-size: 36px;
		margin-top: 30px;
		white-space: nowrap;
	}

	.decorated-title::before,
	.decorated-title::after {
		content: "";
		height: 1px;
		background-color: #000;
		flex-grow: 1;
	}

	.mid {
		text-align: center;
		margin-top: 200px;
		font-size: 20px;
	}

	.image {
		margin: 100px auto;
		width: 70%;
		height: auto;
		justify-content: center;
	}

	/* 调整arrest头图 */

	.arrest-section {
		position: relative;
		background-color: #e6e6e6;
		padding: 30px 30px 30px 60px;
		margin: 100px 0;
		display: flex;
		align-items: top;
		overflow: visible;
	}

	.content {
		flex: 1;
		padding-right: 50px;
	}

	.title {
		font-size: 1.8rem;
		font-weight: bold;
		margin-bottom: 16px;
	}

	.icon-container {
		position: relative;
		width: 150px;
		height: 100px;
	}

	.icon-arrest {
		position: absolute;
		width: 100%;
		bottom: -30px; /* 调整这个值使图标部分突出背景 */
		right: 0;
	}

	.image-space {
		margin: 100px 0;
	}

	.datawrapper {
		margin: 50px 0;
	}

	.total-cost {
		text-align: center;
		font-weight: bolder;
		margin: 100px 0;
	}

	.methodology {
		margin-top: 100px;
	}
</style>
