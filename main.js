const main = function() {
  const circleR = [5, 6, 2, 4, 1, 3];

  const container = d3.select("#chart-container");
  const svg = container
    .append("svg")
    .attr("width", 800)
    .attr("height", 400);

  svg
    .selectAll("circle")
    .data(circleR)
    .enter()
    .append("circle")
    .attr("r", n => n * 10)
    .attr("cx", (n, i) => 120 * i + 80)
    .attr("cy", 80)
    .attr("fill", (n, i) => `rgb(${n * 50}, ${i * 10} ,${i * 10})`);
};

window.onload = main;
