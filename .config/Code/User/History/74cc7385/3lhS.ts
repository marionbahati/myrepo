import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiveService {

  constructor() { }
  
  dataEmiter= new EventEmitter<string>();

  raisedDataEmitter(data:string){
    this.dataEmiter.emit(data);
  }
}
