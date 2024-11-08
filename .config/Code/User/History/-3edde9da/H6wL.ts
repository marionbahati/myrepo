import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { GraphdataService } from '../graphdata.service';
import { Company } from '../interfaces/company';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss'
})
export class BarComponent {
  searchTerm: string = '';
  selectedRelation: string = '';
  selectedCenterCompany: string = 'CodeShaffer'; // Initially, CodeShaffer is the central company

  available_relations: string[] = [];
  available_companies: string[] = [];

  private nodes: any[] = [];
  private links: any[] = [];
  private svg: any;
  private width = 1200;
  private height = 900;

  constructor(private data: GraphdataService) { }

  ngOnInit(): void {
    if (this.data.isReady()) {
      this.initializeGraph();
    } else {
      this.data.ready$.subscribe(() => this.initializeGraph());
    }
  }

  // Initialize graph when data is ready
  initializeGraph() {
    this.available_companies = this.data.getCompanyNames(); // Get company names for the dropdown
    this.available_relations = this.getAvailableRelations(); // Generate relation types dynamically

    this.createNodes();
    this.createLinksFromCenterCompany();
    this.createSvg();
    this.drawGraph(this.nodes, this.links);
  }

  // Filter and update the graph based on search term, relation, or selected company
  filterGraph() {
    if (!this.searchTerm && !this.selectedRelation && !this.selectedCenterCompany) {
      return; // If no search term, relation, or center company is selected, do nothing
    }

    let filteredLinks = this.links;
    let filteredNodes = this.nodes;

    // Filter nodes based on the search term
    if (this.searchTerm) {
      const searchedNode = this.nodes.find(node => node.name.toLowerCase() === this.searchTerm.toLowerCase());
      if (searchedNode) {
        filteredLinks = this.links.filter(link => link.source === searchedNode || link.target === searchedNode);
        filteredNodes = [searchedNode, ...filteredLinks.map(link => link.source), ...filteredLinks.map(link => link.target)];
      } else {
        alert('Node not found!');
        return;
      }
    }

    // Filter links based on selected relation type
    if (this.selectedRelation) {
      filteredLinks = filteredLinks.filter(link => {
        const sourceCompany = this.data.getCompanies().find(company => company.name === link.source.name);
        return sourceCompany?.Relations.some(rel => rel.relation_type === this.selectedRelation);
      });
    }

    // Filter links based on selected center company
    if (this.selectedCenterCompany) {
      const centerNode = this.getNodeByName(this.selectedCenterCompany);
      filteredLinks = this.links.filter(link => link.source === centerNode || link.target === centerNode);
      filteredNodes = [centerNode, ...filteredLinks.map(link => link.source), ...filteredLinks.map(link => link.target)];
    }

    // Clear existing graph
    d3.select('figure#netgraph').selectAll('*').remove();

    // Redraw graph
    this.createSvg();
    this.drawGraph(filteredNodes, filteredLinks);
  }

  // Create nodes based on the service data
  createNodes() {
    this.nodes = this.data.getCompanies().map((c: Company, i: number) => ({
      index: i,
      name: c.name,
      group: 0
    }));
  }

  // Create links from the parent company (CodeShaffer) to all other companies
  createLinksFromCenterCompany() {
    const centerNode = this.getNodeByName(this.selectedCenterCompany);

    if (centerNode) {
      this.links = this.data.getCompanies().map(company => ({
        source: centerNode,
        target: this.getNodeByName(company.name)
      })).filter(link => link.target && link.target.name !== this.selectedCenterCompany); // Exclude self-links
    }
  }

  // Get node by its name
  getNodeByName(name: string) {
    return this.nodes.find(node => node.name === name);
  }

  // Create SVG container for the graph
  private createSvg(): void {
    this.svg = d3.select('figure#netgraph')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g');
  }

  // Draw the graph with the provided nodes and links
  private drawGraph(nodes: any, links: any): void {
    const simulation = d3.forceSimulation(nodes)
      .force('charge', d3.forceManyBody().strength(-150))
      .force('center', d3.forceCenter(this.width / 2, this.height / 2))
      .force('link', d3.forceLink(links).id((d: any) => d.index))
      .on('tick', ticked);

    // const link = this.svg
    //   .append('g')
    //   .selectAll('line')
    //   .data(links)
    //   .enter()
    //   .append('line')
    //   .attr('stroke-width', 2)
    //   .style('stroke', 'orange');


    const link = this.svg
      .append('g')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke-width', 2)
      .style('stroke', 'orange');

    const node = this.svg
      .append('g')
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', 25)
      .attr('fill', (d: any, i: number) => d3.schemeCategory10[i % 10])
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended)
      );

    const text = this.svg
      .append('g')
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .style('stroke', (d: any, i: number) => d3.schemeCategory10[i % 10])
      .text((d: any) => d.name);

    function ticked() {
      node
        .attr('cx', (d: any) => d.x)
        .attr('cy', (d: any) => d.y);


      link
        .attr('x1', (d: any) => d.source.x * 1)
        .attr('y1', (d: any) => d.source.y * 1)
        .attr('x2', (d: any) => d.target.x * 1)
        .attr('y2', (d: any) => d.target.y * 1);

      text
        .attr('dx', (d: any) => d.x * 1)
        .attr('dy', (d: any) => d.y * 1);


    }


    // function ticked() {
    //   node.attr('cx', (d: any) => d.x).attr('cy', (d: any) => d.y);
    //   link.attr('x1', (d: any) => d.source.x).attr('y1', (d: any) => d.source.y)
    //     .attr('x2', (d: any) => d.target.x).attr('y2', (d: any) => d.target.y);
    //   text.attr('dx', (d: any) => d.x).attr('dy', (d: any) => d.y);
    // }

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

  // Get available relation types dynamically
  getAvailableRelations(): string[] {
    const relations = new Set<string>();
    this.data.getCompanies().forEach(company => {
      company.Relations.forEach(relation => relations.add(relation.relation_type));
    });
    return Array.from(relations);
  }

}
