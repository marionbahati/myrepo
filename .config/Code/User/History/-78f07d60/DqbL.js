

var svg = d3.select("svgID");

var rect = svg.append("rect")
    .attr("height", 10)
    .attr("width", 10)
    .style("fill", "red");
rect.style("fill", "purple");


