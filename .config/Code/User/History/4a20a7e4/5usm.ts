import { SafeResourceUrl } from "@angular/platform-browser"

export class product{

title:string;
description:string;
price:string;
image:SafeResourceUrl;

constructor(){
    this.title='';
    this.description='';
    this.price='';
    this.image='';
}

}