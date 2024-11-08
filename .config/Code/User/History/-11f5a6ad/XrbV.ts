import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { KundenDataService } from '../kunden-data.service';
import { CommonModule } from '@angular/common';
import * as d3 from 'd3';
@Component({
  selector: 'app-kunden',
  standalone: true,
  imports: [],
  templateUrl: './kunden.component.html',
  styleUrl: './kunden.component.scss'
})
export class KundenComponent implements OnInit, AfterViewInit {

  parentCompany: string = '';
  connectionType: string = 'customer';
  depth: number = 1;

  @ViewChild('graph', { static: true }) private graphContainer!: ElementRef;

  constructor(
    private companyGraphService: KundenDataService) { }

  ngOnInit() { }

  ngAfterViewInit() { }

  fetchConnections() {
    this.companyGraphService
      .getCompanyConnections(this.parentCompany, this.connectionType, this.depth)
      .subscribe((data) => {
        this.createGraph(data);
      });
  }

  createGraph(data: any) {
    const element = this.graphContainer.nativeElement;
    d3.select(element).selectAll('*').remove(); // Clear existing graph

    const width = 800;
    const height = 600;

    const svg = d3
      .select(element)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const simulation = d3
      .forceSimulation(data.nodes)
      .force(
        'link',
        d3
          .forceLink(data.links)
          .id((d: any) => d.id)
          .distance(100)
      )
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(data.links)
      .enter()
      .append('line')
      .attr('stroke-width', 2)
      .attr('stroke', '#999');

    const node = svg
      .append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(data.nodes)
      .enter()
      .append('circle')
      .attr('r', 10)
      .attr('fill', (d: any) => color(d.group))
      .call(
        d3
          .drag()
          .on('start', (event: any, d: any) => this.dragstarted(event, d, simulation))
          .on('drag', (event: any, d: any) => this.dragged(event, d))
          .on('end', (event: any, d: any) => this.dragended(event, d, simulation))
      );

    node.append('title').text((d: any) => d.id);

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node
        .attr('cx', (d: any) => d.x)
        .attr('cy', (d: any) => d.y);
    });
  }

  dragstarted(event: any, d: any, simulation: any) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  dragged(event: any, d: any) {
    d.fx = event.x;
    d.fy = event.y;
  }

  dragended(event: any, d: any, simulation: any) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
}
