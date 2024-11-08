import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphdataService {

  constructor() { }
  async getCompanies(): Company[] {
    let resp = await fetch('/assets/data.json');
    let json: Company[] = await resp.json();

  }

}
