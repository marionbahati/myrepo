import { Injectable } from '@angular/core';
import { Company } from './interfaces/company';

@Injectable({
  providedIn: 'root'
})
export class GraphdataService {
  companies: Company[] = [];
  constructor() {
    console.log("constructing GraphData-Service")
    this.loadCompanies().then((c: Company[]) => this.companies = c);
  }
  getCompanies() {
    return this.companies;
  }
  async loadCompanies(): Promise<Company[]> {
    let resp = await fetch('/assets/data.json');
    let json: Company[] = await resp.json() as Company[];
    console.log(json);
    return json;
  }

}
