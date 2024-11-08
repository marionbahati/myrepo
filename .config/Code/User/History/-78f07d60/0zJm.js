

//var svg = d3.select("#svgID");

//var rect = svg.append("rect")
//  .attr("height", 20)
//.attr("width", 20)
//.style("fill", "red");
//rect.style("fill", "purple");


// var svg = d3.select("svg");
// var width = svg.attr("width");
// var height = svg.attr("height");

//initial data
// var graph = {
//     nodes: [
//         { name: "Alice" },
//         { name: "bob" },
//         { name: "chen" },
//         { name: "june" },
//         { name: "dan" },
//         { name: "Bless" },
//         { name: "jon" },
//         { name: "viv" },

//     ],
//     links: [
//         { source: "Alice", target: "bob" },
//         { source: "chen", target: "june" },
//         { source: "dan", target: "bless" },
//         { source: "jon", target: "viv" },
//     ]

// };

// var simulation = d3.forceSimulation(graph.nodes)
//     //link :enable nodes to be flexible able to move within the x and y axis
//     .force(
//         "link",
//         d3.forceLink(graph.links).id(function (d) {
//             return d.name;
//         })
//     )
//     //force is the way the nodes repell /distant eachother
//     .force("charge", d3.forceManyBody().strength(-30))
//     .force("center", d3.forceCenter(width / 2, height / 2))
//     .on("tick", ticked);

// var link = svg
//     .append("g")
//     .selectAll("line")
//     .data(graph.links)
//     .enter()
//     .append("line")
//     .attr("stroke-width", function (d) {
//         return 3;
//     })
//     .style("stroke", "pink");

// var node = svg
//     .append("g")
//     .selectAll("circle")
//     .attr("r", 5)
//     .attr("fill", function (d) {
//         return "orange";
//     })

// function ticked() {
//     link
//         .attr("x1", function (d) {
//             return d.source.x;
//         })
//         .attr("y1", function (d) {
//             return d.source.y;
//         })
//         .attr("x2", function (d) {
//             return d.source.x;
//         })
//         .attr("y2", function (d) {
//             return d.source.y;
//         })

//     node
//         .attr("cx", function (d) {
//             return d.x;

//         })
//         .attr("cy", function (d) {
//             return d.y;

//         })
// }



