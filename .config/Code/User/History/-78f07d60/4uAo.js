

var svg = d3.select("svg");

svg.append("rect")
    .attr("height", 10)
    .attr("width", 10)
    .style("fill", "red");


svg.append("circle")
    .attr("r", 20)
    .style("fill", "green");