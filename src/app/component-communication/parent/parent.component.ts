import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";

//* PARENT TO CHILD EXAMPLE

/*
  !@Component
  !(
  !  {
  !    selector: 'app-parent',
      imports: [ChildComponent], //^ Child Component Tanımı 
  !    //templateUrl: './parent.component.html',
  !    template : `
  !    <app-child [childData]="data"> </app-child>
  !    `,
  !    styleUrl: './parent.component.scss'
  !  }
  !)
  !export class ParentComponent 
  !{
  !  data : string = "Parent to child"
  !}
*/
//* CHILD TO PARENT EXAMPLE


@Component
(
  {
    selector: 'app-parent',
    imports: [ChildComponent], //^ Child Component Tanımı 
    //templateUrl: './parent.component.html',
    template : `
   <app-child (dataEvent)="childEvent($event)"></app-child> //^Child'da oluşturduğumuz dataEvent'i burdaki oluşturduğumuz fonksiyonla karşılıyoruz.
    `,
    styleUrl: './parent.component.scss'
  }
)
export class ParentComponent 
{
  childEvent(obj:any) //^Child Componentten gelen veriyi karşılamak için fonksiyon oluşturuyoruz.
  {
    console.log(obj);
  }
}
