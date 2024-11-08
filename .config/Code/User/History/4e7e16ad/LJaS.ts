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
  getCompanies(): Company[] {
    return this.companies;
  }
  getCompanyNames(): string[] {
    return this.companies.map((x: Company) => x.name);
  }
  async loadCompanies(): Promise<Company[]> {
    let resp = await fetch('/assets/data.json');
    let json: Company[] = await resp.json() as Company[];
    console.log(json);
    return json;
  }

}
