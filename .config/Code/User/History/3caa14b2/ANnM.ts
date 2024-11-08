import { HasFormatter } from "./innterface2"

export class User implements HasFormatter{
   //public name:string
   //protected age:number
   //private city:string

    constructor(
        public name:string,
        public age:number,
        public city:string){}

    //getter
    get getApplecity():string{
        return 'aple ${this.city}'
    }
    format(){
        return '${this.city} has alot of people aged ${this.age}';
    }
}
     const hiteche=new User("marion",34,"Berlin")
       console.log(hiteche.format)