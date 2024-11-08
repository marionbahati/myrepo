import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss'
})
export class GraphComponent implements OnInit {
  graphData: any;
  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.createGraph();
  }
  createGraph() {
    throw new Error('Method not implemented.');
  }

  private createSvg(): void {
    const svg = d3.select("svg");
    const width = +svg.attr("width");
    const height = +svg.attr("height");

    const graphData = {
      nodes: [{ name: "A" }, { name: "B" }, { name: "C" }, { name: "D" }],
      links: [
        { source: "A", target: "B" },
        { source: "B", target: "C" },
        { source: "D", target: "C" }
      ]
    };

    const simulation = d3.forceSimulation(this.graphData.nodes)
      .force("charge", d3.forceManyBody().strength(-30))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("link", d3.forceLink(graphData.links).id(d => (d as any).name))
      .on("tick", ticked);

    const links = svg.append("g")
      .selectAll("line")
      .data(graphData.links)
      .enter()
      .append("line")
      .attr("stroke-width", 3)
      .style("stroke", "orange");

    const nodes = svg.append("g")
      .selectAll("circle")
      .data(graphData.nodes)
      .enter()
      .append("circle")
      .attr("r", 10)
      .attr("fill", "red");

    const drag = d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);

    nodes.call(this.drag);

    function ticked() {
      nodes.attr("cx", function (d) { return (d as any).x; })
        .attr("cy", function (d) { return (d as any).y; });

      links.attr("x1", function (d) { return (d.source as any).x; })
        .attr("y1", function (d) { return (d.source as any).y; })
        .attr("x2", function (d) { return (d.target as any).x; })
        .attr("y2", function (d) { return (d.target as any).y; });
    }

    function dragstarted(event: any, d: any) {
      simulation.alphaTarget(0.3).restart();
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragged(event: any, d: any) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event: any, d: any) {
      simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }
  drag(drag: any) {
    throw new Error('Method not implemented.');
  }
}
