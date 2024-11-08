import { AfterViewInit, Component, ElementRef } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-network-graph',
  standalone: true,
  imports: [],
  templateUrl: './network-graph.component.html',
  template: '<svg width="600" height="400"></svg>',
  styleUrl: './network-graph.component.scss'
})
export class NetworkGraphComponent implements AfterViewInit {


  private svg;
  private width: number = 600;
  private height: number = 400;

  public graphData = {
    nodes: [
      { name: "A" }, { name: "B" }, { name: "C" }, { name: "D" },
      { name: "E" }, { name: "F" }, { name: "G" }, { name: "H" },
      { name: "I" }, { name: "J" }
    ],
    links: [
      { source: "A", target: "B" },
      { source: "B", target: "C" },
      { source: "C", target: "D" },
      { source: "D", target: "E" },
      { source: "E", target: "F" },
      { source: "F", target: "G" },
      { source: "G", target: "H" },
      { source: "H", target: "I" },
      { source: "I", target: "J" },
      { source: "I", target: "A" }
    ]
  };

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.drawGraph();
  }

  private drawGraph(): void {
    this.svg = d3.select(this.el.nativeElement).select('svg');

    const simulation = d3.forceSimulation(this.graphData.nodes)
      .force('link', d3.forceLink().id((d: any) => d.name).distance(50))
      .force('charge', d3.forceManyBody().strength(-100))
      .force('center', d3.forceCenter(this.width / 2, this.height / 2));

    const link = this.svg.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(this.graphData.links)
      .enter().append('line')
      .attr('stroke', '#999')
      .attr('stroke-width', 1.5);

    const node = this.svg.append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(this.graphData.nodes)
      .enter().append('circle')
      .attr('r', 5)
      .attr('fill', '#69b3a2')
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

    node.append('title')
      .text((d: any) => d.name);

    simulation
      .nodes(this.graphData.nodes)
      .on('tick', ticked);

    simulation.force<d3.ForceLink<any>>(‘link’)!.links(this.graphData.links);

    function ticked() {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node
        .attr('cx', (d: any) => d.x)
        .attr('cy', (d: any) => d.y);
    }

    function dragstarted(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: any, d: any) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }

}
