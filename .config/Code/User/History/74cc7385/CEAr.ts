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
 //we can achieve the same results using subject instead of eventemitter

 // dataEmitter=new Subject<string>();
 //    raisedDataEmitter(data:string){
  //     this.dataEmiter.next(data);