import { Injectable } from '@angular/core';

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
}
