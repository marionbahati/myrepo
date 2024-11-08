import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphServiceService {

  constructor() { }

  private nodes = [
    { index: 0, name: 'Kunden', group: 0 },
    { index: 1, name: 'Fruit', group: 1 },
    { index: 2, name: 'Vegetable', group: 2 },
    { index: 3, name: 'Orange', group: 1 },
    { index: 4, name: 'Apple', group: 1 },
    { index: 5, name: 'Banana', group: 1 },
    { index: 6, name: 'Peach', group: 1 },
    { index: 7, name: 'Bean', group: 2 },
    { index: 8, name: 'Pea', group: 2 },
    { index: 9, name: 'Carrot', group: 2 },
    { index: 10, name: 'potato', group: 3 },
    { index: 11, name: 'cucumber', group: 3 },
    { index: 12, name: 'melon', group: 3 },
    { index: 13, name: 'water', group: 4 },
    { index: 14, name: 'milk', group: 4 },
    { index: 15, name: 'juice', group: 4 },
    { index: 16, name: 'David', group: 5 },
    { index: 17, name: 'Daniel', group: 5 },
    { index: 18, name: 'Marion', group: 5 },

  ];

  private links = [
    { source: this.nodes[0], target: this.nodes[1] },
    { source: this.nodes[0], target: this.nodes[2] },
    { source: this.nodes[1], target: this.nodes[3] },
    { source: this.nodes[1], target: this.nodes[4] },
    { source: this.nodes[1], target: this.nodes[5] },
    { source: this.nodes[1], target: this.nodes[6] },
    { source: this.nodes[2], target: this.nodes[7] },
    { source: this.nodes[2], target: this.nodes[8] },
    { source: this.nodes[7], target: this.nodes[11] },
    { source: this.nodes[7], target: this.nodes[12] },
    { source: this.nodes[7], target: this.nodes[10] },
    { source: this.nodes[8], target: this.nodes[13] },
    { source: this.nodes[8], target: this.nodes[14] },
    { source: this.nodes[8], target: this.nodes[15] },
    { source: this.nodes[4], target: this.nodes[16] },
    { source: this.nodes[4], target: this.nodes[17] },
    { source: this.nodes[4], target: this.nodes[18] }

  ];

  getNodes() {
    return this.nodes;
  }

  // Method to return the links data
  getLinks() {
    return this.links;
  }
}
