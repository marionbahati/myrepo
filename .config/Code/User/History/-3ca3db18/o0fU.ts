import { text } from "stream/consumers";

interface Isperson{
    name:string;
    age:number;
    speak(a:string):void;
    spend(a:number):number;

}

const me:Isperson={
    name:'Marion',
    age:33,

   speak(text:string):void{
    console.log(text);  },

    spend(amount:number):number{
        console.log('i spent' , amount);
        return amount;
    

   }
};
console.log(me);