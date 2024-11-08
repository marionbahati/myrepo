import { Injectable } from '@angular/core';
import { EventEmitter } from 'node:stream';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  users=[
    {name:'john',job:'Teacher',Gender:'male',Country:'Germany'},
    {name:'june',job:'Cleaner',Gender:'Female',Country:'Sweden'},
    {name:'Marion',job:'Nurse',Gender:'Female',Country:'Kenya'},
    {name:'Daniel',job:'Pilot',Gender:'male',Country:'UK'}

  ]



  onShowDetailsClicked= new EventEmitter<{name:string,job:string,Gender:string,Country:string}>();

showDetails(user:{name:string,job:string,Gender:string,Country:string}){
this.onShowDetailsClicked.emit(user);
}

}
