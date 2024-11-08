import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphdataService {

  constructor() { }
  getCompanies(): Company[]
}
