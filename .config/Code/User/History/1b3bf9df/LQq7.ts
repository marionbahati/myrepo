import { Component } from '@angular/core';
import * as d3 from 'd3';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SimulationNodeDatum, color, selectAll } from 'd3';
import { first } from 'rxjs';
import { d3link } from '../../interfaces/d3link';
import { d3node } from '../../interfaces/d3node';
import { GraphDataAdapterService } from '../../services/graph-data-adapter.service';

@Component({
  selector: 'app-newgraph',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './newgraph.component.html',
  styleUrl: './newgraph.component.scss'
})
export class NewgraphComponent {
  [x: string]: any;
  relatntype!: string;


  constructor(private graphDataAdapter: GraphDataAdapterService) {

  }

  private svg: any;
  private margin = 20;
  private width = 1200 - (this.margin * 2);
  private height = 900 - (this.margin * 2);

  selected_relation: string = '';
  selected_company: string = 'Codeschaffer';

  /** 
   * make graphAdapter accessible in HTML-Template 
   **/
  graphAdapter(): GraphDataAdapterService {
    return this.graphDataAdapter;
  }
  /**
   * If data already available, draw it, else, wait for it to become available and draw then.
   **/

  ngOnInit(): void {
    if (this.graphDataAdapter.isConstructed()) {
      this.dataUpdated();
    } else {
      this.graphDataAdapter.onDataConstructed$.pipe(first()).subscribe({
        next: () => this.dataUpdated()
      })
    }
  }

  /**
   * Update data on changes to the relation-selection
   **/
  relationChanged(event: any) {
    this.dataUpdated();
  }

  setRelation(ev: Event) {
    this.selected_relation = this.getStringFromEvent(ev);
    this.dataUpdated();
  }

  getStringFromEvent(ev: Event): string {
    return (ev.target as any)['value'];
  }
  setCompany(ev: Event) {
    this.selected_company = this.getStringFromEvent(ev);
    this.dataUpdated();
  }



  private createSvg(): void {

    this.svg = d3.select('figure#netgraph')
      .append('svg')
      .attr('width', this.width + (this.margin * 2))
      .attr('height', this.height + (this.margin * 2))
      .append('g');
  }


  d3Data: {
    node: any,
    link: any,
    simulation: any,
    text: any
  } = {
      node: undefined,
      link: undefined,
      simulation: undefined,
      text: undefined
    };
  private drawGraph(nodes: any, links: any): void {
    this.createSvg();
    this.d3Data.simulation = d3.forceSimulation(nodes)
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(this.width / 2, this.height / 2))
      .force('link', d3.forceLink(links).id((d: any) => d.index))
      .force('collision', d3.forceCollide().radius(30))
      .force('link', d3.forceLink(links).id((d: any) => d.index).distance(250))
      .on('tick', this.ticked);

    this.d3Data.link = this.svg
      .append('g')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke-width', 2)
      .style('stroke', 'orange');

    this.d3Data.node = this.svg
      .append('g')
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', 25)
      .attr('fill', (d: any, i: number) => d3.schemeCategory10[i % 10])
      .call(d3.drag()
        .on('start', (e, d) => this.dragstarted(e, <SimulationNodeDatum>d))
        .on('drag', (e, d) => this.dragged(e, <SimulationNodeDatum>d))
        .on('end', (e, d) => this.dragended(e, <SimulationNodeDatum>d))
      );

    this.d3Data.text = this.svg
      .append('g')
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .style('stroke', (d: any, i: number) => d3.schemeCategory10[i % 10])
      .text((d: any) => d.name);




    this.d3Data.simulation.nodes().forEach((node: any) => {
      if (node.name === this.selected_company) {
        node.fx = this.width / 2;
        node.fy = this.height / 2;
      }
    });
  }


  dragged = (event: any, d: SimulationNodeDatum) => {
    d.fx = event.x;
    d.fy = event.y;
  }

  dragended = (event: any, d: SimulationNodeDatum) => {
    if (!event.active) this.d3Data.simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
  dragstarted = (event: any, d: SimulationNodeDatum) => {
    if (!event.active) this.d3Data.simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  };
  ticked = () => {
    //
    this.d3Data.simulation.nodes().forEach(
      (node: any) => {
        //console.log({ node: node })
        if (node.name === this.selected_company) {
          //console.log(node);
        }
      });
    this.d3Data.node
      .attr('cx', (d: any) => d.x)
      .attr('cy', (d: any) => d.y);


    this.d3Data.link
      .attr('x1', (d: any) => {
        return d.source.x * 1;
      })
      .attr('y1', (d: any) => d.source.y * 1)
      .attr('x2', (d: any) => d.target.x * 1)
      .attr('y2', (d: any) => d.target.y * 1);

    this.d3Data.text
      .attr('dx', (d: any) => d.x * 1)
      .attr('dy', (d: any) => d.y * 1);


  }
  deleteSearchterm() {

    // this.selected_company = '';
    this.dataUpdated();
  }
  relationsStringList: string[] = [];


  displaySearchTermRelations() {
    this.relationsStringList = [];
    const searchedNode = this.graphDataAdapter.getNodes().find(node => node.name.toLowerCase() === this.selected_company.toLowerCase());
    for (let company of this.graphDataAdapter.getCompanies()) {
      if (company.name.toLowerCase() === this.selected_company.toLowerCase()) {
        for (let relation of company.Relations ?? []) {
          let targetCompany = this.graphDataAdapter.getNodeById(relation.ObjectID);
          if (targetCompany) {
            this.relationsStringList.push(`${relation.relation_type}  : ${targetCompany.name}`);
          }
        }
      }
    }
    if (this.relationsStringList.length === 0) {
      this.relationsStringList.push(`${this.selected_company} ist ein nur kunde von Codeschaffer.Weitere bekannte Beziehungen gibt es nicht`);
    }
  }


  dataUpdated() {
    let graph = this.graphDataAdapter.getRelationGraphForCompany(this.selected_company, this.selected_relation);


    this.displaySearchTermRelations();
    d3.select('figure#netgraph').selectAll('*').remove();

    this.drawGraph(graph.nodes, graph.links);
  }


}