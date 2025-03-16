<script>
	import { onMount } from "svelte";
	import * as d3 from "d3";

	let data = [];
	let svgElement;
	let legendElement;
	let tooltip;

	const width = 800;
	const height = 600;
	const tileSize = 50;
	const tilePadding = 0;

	// Color scale (Pew Research Center classification)
	const colorScale = d3
		.scaleThreshold()
		.domain([25000, 75000, 175000, 400000, 2800000])
		.range(["#f7d7c4", "#e7b192", "#cf7c5c", "#b44f2f", "#1d1d1d"]);

	const legendLabels = [
		"<25K",
		"25K-75K",
		"75K-175K",
		"175K-400K",
		"400K-2.8M"
	];

	onMount(async () => {
		try {
			data = await d3.csv("/data.csv", d3.autoType);
			console.log("📌 CSV Data Loaded Successfully:", data);

			const svg = d3
				.select(svgElement)
				.attr("width", width)
				.attr("height", height);

			// Create tooltip
			tooltip = d3
				.select("body")
				.append("div")
				.attr("class", "tooltip")
				.style("opacity", 0)
				.style("position", "absolute")
				.style("pointer-events", "none")
				.style("background", "rgba(0, 0, 0, 0.8)")
				.style("color", "#fff")
				.style("padding", "6px 10px")
				.style("border-radius", "4px")
				.style("font-size", "14px")
				.style("font-family", "sans-serif")
				.style("text-align", "center");

			// Create groups (g) for each tile to ensure text and rect are combined
			const tileGroups = svg
				.selectAll("g.tile-group")
				.data(data)
				.join("g")
				.attr("class", "tile-group")
				.attr(
					"transform",
					(d) =>
						`translate(${d.x * (tileSize + tilePadding)}, ${d.y * (tileSize + tilePadding)})`
				)
				.on("mouseover", function (event, d) {
					// Apply hover effect to rect
					d3.select(this)
						.select("rect")
						.style("filter", "drop-shadow(0px 0px 3px black)")
						.style("cursor", "pointer");

					// Show tooltip
					tooltip.transition().duration(200).style("opacity", 1);
					tooltip
						.html(
							`<strong>${d.state}</strong><br>
						Population: ${d3.format(",")(d.number)}<br>
						Percentage: ${d.percent}`
						)
						.style("left", event.pageX + 10 + "px")
						.style("top", event.pageY - 40 + "px");
				})
				.on("mousemove", function (event) {
					// Update tooltip position dynamically
					tooltip
						.style("left", event.pageX + 10 + "px")
						.style("top", event.pageY - 40 + "px");
				})
				.on("mouseout", function () {
					// Remove hover effect
					d3.select(this)
						.select("rect")
						.style("filter", "none")
						.style("cursor", "default");

					// Hide tooltip
					tooltip.transition().duration(200).style("opacity", 0);
				});

			// Append tiles inside each <g>
			tileGroups
				.append("rect")
				.attr("width", tileSize)
				.attr("height", tileSize)
				.attr("fill", (d) => colorScale(d.number))
				.attr("stroke", "#fff")
				.attr("stroke-width", "2px");

			// Append state abbreviations inside each <g>
			tileGroups
				.append("text")
				.attr("x", tileSize / 2)
				.attr("y", tileSize / 2)
				.attr("text-anchor", "middle")
				.attr("dominant-baseline", "middle")
				.style("font-size", "14px")
				.style("font-family", "sans-serif")
				.style("fill", "#fff")
				.style("pointer-events", "none") // Prevent text from blocking hover
				.text((d) => d.abbr);

			// Draw the legend
			const legendWidth = 600;
			const legendHeight = 30;
			const legendPadding = 5;
			const legendItemWidth = legendWidth / legendLabels.length;

			const legendSvg = d3
				.select(legendElement)
				.attr("width", legendWidth)
				.attr("height", legendHeight);

			// Draw legend color rectangles
			legendSvg
				.selectAll("rect")
				.data(colorScale.range())
				.join("rect")
				.attr("x", (_, i) => i * legendItemWidth)
				.attr("y", 0)
				.attr("width", legendItemWidth - legendPadding)
				.attr("height", legendHeight - 10)
				.attr("fill", (d) => d);

			// Add legend labels
			legendSvg
				.selectAll("text")
				.data(legendLabels)
				.join("text")
				.attr("x", (_, i) => i * legendItemWidth + legendItemWidth / 2)
				.attr("y", legendHeight - 7)
				.attr("text-anchor", "middle")
				.attr("dominant-baseline", "hanging")
				.style("font-size", "10px")
				.style("font-family", "sans-serif")
				.text((d) => d);
		} catch (error) {
			console.error("❌ Failed to load CSV data:", error);
		}
	});
</script>

<!-- 标题 -->
<h2 class="map-title">
	At Least 13 States Surpass 175K Undocumented Immigrants
</h2>

<h3 class="map-sub">
	In California, nearly 25% of population are undocumented immigrants.
</h3>

<!-- Legend -->
<svg class="legend-svg" bind:this={legendElement}></svg>

<!-- Tile Grid Map -->
<svg bind:this={svgElement}></svg>

<div class="note">
	<p>Note: Data is as of 2019.</p>
	<p>Source: Migration Policy institute</p>
</div>

<style>
	svg {
		display: block;
		margin: 10px auto;
		background: white;
	}

	.tooltip {
		position: absolute;
		background: rgba(0, 0, 0, 0.8);
		color: white;
		padding: 6px 10px;
		border-radius: 4px;
		pointer-events: none;
		font-size: 14px;
		font-family: sans-serif;
		text-align: center;
	}

	.map-title {
		font-size: 20px;
	}

	.map-sub {
		font-size: 14px;
	}

	.note {
		font-size: 12px;
		color: gray;
		line-height: 0.3;
	}
</style>
