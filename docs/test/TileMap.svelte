<script>
	import { onMount } from "svelte";
	import * as d3 from "d3";

	let data = []; // 存储数据
	let svgElement; // 绑定 <svg> DOM

	// 图表配置
	const width = 800;
	const height = 600;
	const tileSize = 50; // 每个方块边长
	const tilePadding = 5; // 方块之间的间距

	// 颜色比例尺（根据 percent 着色）
	const colorScale = d3
		.scaleThreshold()
		.domain([0.5, 1, 2, 5, 10, 20])
		.range(["#f7fcf0", "#ccece6", "#99d8c9", "#66c2a4", "#2ca25f", "#006d2c"]);

	// 组件挂载后读取数据并绘图
	onMount(async () => {
		// 1. 读取数据 (CSV / JSON)
		data = await d3.csv("/data.csv", (d) => ({
			state: d.state,
			abbr: d.abbr,
			x: +d.x, // 转换为数值
			y: +d.y,
			number: +d.number.replace(/,/g, ""), // 处理千分位
			percent: parseFloat(d.percent.replace("%", "")) // 去掉百分号并转换数值
		}));

		// 2. 选择 <svg> 进行绘图
		const svg = d3
			.select(svgElement)
			.attr("width", width)
			.attr("height", height);

		// 3. 绘制方块
		svg
			.selectAll("rect")
			.data(data)
			.join("rect")
			.attr("x", (d) => d.x * (tileSize + tilePadding))
			.attr("y", (d) => d.y * (tileSize + tilePadding))
			.attr("width", tileSize)
			.attr("height", tileSize)
			.attr("fill", (d) => colorScale(d.percent))
			.attr("stroke", "#fff")
			.attr("stroke-width", 2)
			.on("mouseover", function (event, d) {
				d3.select(this).attr("stroke", "black").attr("stroke-width", 3);
			})
			.on("mouseout", function () {
				d3.select(this).attr("stroke", "#fff").attr("stroke-width", 2);
			});

		// 4. 在方块中央写州缩写
		svg
			.selectAll("text")
			.data(data)
			.join("text")
			.attr("x", (d) => d.x * (tileSize + tilePadding) + tileSize / 2)
			.attr("y", (d) => d.y * (tileSize + tilePadding) + tileSize / 2)
			.attr("text-anchor", "middle")
			.attr("dominant-baseline", "middle")
			.style("font-size", "14px")
			.style("fill", "#000")
			.text((d) => d.abbr);
	});
</script>

<!-- SVG 绑定 -->
<svg bind:this={svgElement}></svg>
