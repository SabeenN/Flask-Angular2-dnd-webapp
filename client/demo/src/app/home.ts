/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Observable } from 'rxjs';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import {Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Contact } from './contact';
import {FormControl} from '@angular/forms';

class component {
name: string;
data: Array<string>;
}


@Component({
  selector: 'repeat-example',
  templateUrl: './home.html'
})
export class HomeComponent{
  public message: string = 'Coming soon...'
  public contact1: Contact = {name:"Sabeen Nawaz", email: "sabeenn@kth.se"};
  public servers : Array<Array<string>>=[[], [], []];
  public components:Array<component> = [{name:"Fruits", data: ['Apple',"Orange","Banana", "Pineapple"]},
  {name:"Coffees", data: ['Capuccino',"Latte","Espresso","Irish coffee","Mocha latte"]}];
  public headers: Array<string> = ['Bag 1', 'Bag 2','Bag 3'];
  public client: string;
  public type: string;
  public domain: string;
  public inputback: string;
  res: Response
  url = "http://192.168.99.100:5000/hello";
  hello: Array<string[]>;
  stateCtrl: FormControl;

  getDataFromBackend(): void {
      this.http.get(this.url).map((res:Response) => res.json()).subscribe(hello => this.hello = hello);
  }

  postDataToBackend(): void {
      this.http.post(this.url, {j: this.inputback}).map((res:Response) => res.json()).subscribe();  }

  addServers(size: number): void {
    this.servers[size]=[];
    this.headers[size]='App server ' + (size);
  }
  donothing(): void {
  }

  dropFunction(idd: string): void {
      document.getElementById(idd).classList.toggle("show");
  }
  public constructor(private dragulaService:DragulaService, private http: Http, private location: Location) {
    dragulaService.dropModel.subscribe((value:any) => {
      this.onDropModel(value.slice(1));
    });
    dragulaService.removeModel.subscribe((value:any) => {
      this.onRemoveModel(value.slice(1));
    });

  }

  private onDropModel(args:any):void {
    let [el, target, source] = args;
    console.log('onDropModel:');
    console.log(el);
    console.log(target);
    console.log(source);
  }

  private onRemoveModel(args:any):void {
    let [el, source] = args;
    console.log('onRemoveModel:');
    console.log(el);
    console.log(source);
  }
}

export const EXAMPLES:any[] = [
  HomeComponent,
];
