import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

//* PARENT TO CHILD EXAMPLE

/*
  !@Component
  !(
  !  {
  !    selector: 'app-child',
  !    imports: [],
  !    //templateUrl: './child.component.html',
  !    template : `
  !    <div>{{childData}}</div>
  !    `,
  !    styleUrl: './child.component.scss'
  !  }
  !)
  !export class ChildComponent 
  !{
     @Input() childData : string; //^ Parent'tan veri alabilmesi için Input decorator'u ile işaretlenmelidir.
  !}
*/

//* CHILD TO PARENT EXAMPLE


 @Component
 (
   {
     selector: 'app-child',
     imports: [],
     //templateUrl: './child.component.html',
     template : `
     <div></div>
     `,
     styleUrl: './child.component.scss'
   }
 )
 export class ChildComponent implements OnInit //^ Event'i çalıştıracak bir arayüze ihtiyaç duyar. OnInit arayüzü component sayfaya
 //^ ilk yüklendiği zaman o componentin bir eventi olduğunu bildirir.
 {
  ngOnInit(): void //^ Sayfa ilk yüklendiği zaman çalışan eventtir.
   {
     this.dataEvent.emit({message: 'Hi!'})
   }
   //^Child Parent'a veri gönderebilmesi için event oluşturması gerekir.
   @Output() dataEvent : EventEmitter<any> = new EventEmitter(); //^Parent'a veri gönderebilmesi için output decorator'u ile işaretlenmelidir.
 }


//* CHILD TO CHILD EXAMPLE 

//? Haberleşmek için parent'i kullanır. Child'in birisi input olur. o parente gönderir. parent outputa gönderir.