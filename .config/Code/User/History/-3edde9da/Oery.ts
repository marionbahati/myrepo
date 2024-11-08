import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { GraphdataService } from '../graphdata.service';
import { Company } from '../interfaces/company';
import { FormsModule } from '@angular/forms';
import { first } from 'rxjs';
@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss'
})
export class BarComponent {

  constructor(private data: GraphdataService) { }

  searchTerm: string = '';
  private nodes: any[] = [];
  private links: any[] = [];
  private svg: any;
  private margin = 20;
  private width = 1200 - (this.margin * 2);
  private height = 900 - (this.margin * 2);
  centerCompanyName = 'CodeShaffer'; // Center company set to CodeShaffer

  ngOnInit(): void {
    if (this.data.isReady()) {
      this.draw();
    } else {
      this.data.ready$.pipe(first()).subscribe(() => this.draw());
    }
  }

  // Prepare and draw the graph
  draw(): void {
    this.setupData();  // Set up the nodes and links
    this.createSvg();   // Create the SVG canvas
    this.drawGraph(this.nodes, this.links);  // Draw the graph
  }

  // Setup data for nodes and links
  setupData() {
    this.createNodes();
    this.createCenterLinks();
  }

  // Create SVG container
  private createSvg(): void {
    this.svg = d3.select('figure#netgraph')
      .append('svg')
      .attr('width', this.width + (this.margin * 2))
      .attr('height', this.height + (this.margin * 2))
      .append('g')
      .attr('transform', `translate(${this.margin}, ${this.margin})`);
  }

  // Create all the nodes from company data
  createNodes(): void {
    // Map the list of companies to d3 nodes
    this.nodes = this.data.getCompanies().map((company: Company, index: number) => ({
      id: company.name, // Use company name as the node identifier
      name: company.name,
      group: 0 // Assign group if needed for future color coding
    }));
  }

  // Create links from all companies to the central company (CodeShaffer)
  createCenterLinks(): void {
    const centerNode = this.nodes.find(node => node.name === this.centerCompanyName);

    if (centerNode) {
      this.links = this.nodes.map(node => ({
        source: centerNode, // Center company as the source
        target: node // Each company is linked to the center node
      })).filter(link => link.target.name !== this.centerCompanyName); // Exclude self-links
    } else {
      console.error('Center company not found!');
    }
  }

  // Draw the D3 graph
  private drawGraph(nodes: any[], links: any[]): void {
    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id((d: any) => d.id).distance(200)) // Distance between nodes
      .force('charge', d3.forceManyBody().strength(-300)) // Repulsive force between nodes
      .force('center', d3.forceCenter(this.width / 2, this.height / 2)) // Center the graph in the SVG
      .on('tick', ticked);

    // Add links (lines)
    const link = this.svg.append('g')
      .selectAll('line')
      .data(links)
      .enter().append('line')
      .attr('stroke-width', 2)
      .attr('stroke', 'orange');

    // Add nodes (circles)
    const node = this.svg.append('g')
      .selectAll('circle')
      .data(nodes)
      .enter().append('circle')
      .attr('r', 25)
      .attr('fill', (d: any, i: number) => d3.schemeCategory10[i % 10])
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

    // Add text labels to nodes
    const text = this.svg.append('g')
      .selectAll('text')
      .data(nodes)
      .enter().append('text')
      .style('fill', 'black')
      .attr('dy', 3)
      .attr('text-anchor', 'middle')
      .text((d: any) => d.name);

    // Update positions as the simulation progresses
    function ticked() {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node
        .attr('cx', (d: any) => d.x)
        .attr('cy', (d: any) => d.y);

      text
        .attr('x', (d: any) => d.x)
        .attr('y', (d: any) => d.y);
    }

    // Handle drag events for node movement
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
