import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*
Binding, bağlantı yapısına göre şekillenebilmektedir,

Text Interpolations
Property Binding
Event Binding
Two Way Data Binding
Attribute Binding
Class Binding
Style Binding
*/

//* TEXT INTERPOLATION EXAMPLE (ONE - WAY DATA BINDING)

  /*  
      & @Component(
      &   {
      &   selector: 'app-databinding',
      &   imports: [],
      &   template:`
      &     <h1>Data Binding</h1>
      &     <p>{{data}}</p>`, // Text Interpolation işlemi için Interpolation Syntax operatörü {{}} kullanılır.
      &   styleUrl: './databinding.component.scss'
      &   }
      & )
      & export class DatabindingComponent 
      & {
      &  data : string = "Data";
      & }
  */

//* PROPERTY BINDING EXAMPLE

/*
      ! @Component(
      !   {
      !   selector: 'app-databinding',
      !   imports: [],
      !   //template:`<img src="{{source}}">`, // Single Property Binding
      !   template:`<img [src]="source" [width]="width">`, // Multi Property Binding
      !   styleUrl: './databinding.component.scss'
      !   }
      ! )
      ! export class DatabindingComponent 
      ! {
      !  source : string = "https://lh3.googleusercontent.com/zYC5m1Ag_BlrEhIusmI4nfu6k4wNt8uPo4hhAy66pzuVuTWmuwQZiKiaQmqYEdSwToUhdgq_15j6B9T3D2ZTbZRCk68=s1280-w1280-h800";
      !  width: number = 500;
      !  @Input() pageName : string =""; // Bu alanın Input olmasını sağlar
      ! }
*/

//* EVENT BINDING EXAMPLE

/*
      ? @Component(
      ?   {
      ?   selector: 'app-databinding',
      ?   imports: [],
      ?   template:`<button (click) ="btnClick1()">Tıkla</button>`, // Single Event Binding
      ?   template:`<button on-click="btnClick1(); btnClick2()">Tıkla</button>`, // Multi Event Binding
      ?   styleUrl: './databinding.component.scss'
      ?   }
      ? )
      ? export class DatabindingComponent 
      ? {
      ?   btnClick1() //Tanımlanan Fonksiyon
      ?   {
      ?     //...
      ?   }
      ?   btnClick2() //Tanımlanan Fonksiyon
      ?   {
      ?     //...
      ?   }
      ? }
*/

//* TWO - WAY DATA BINDING EXAMPLE

/*
      ^ @Component(
      ^   {
      ^   selector: 'app-databinding',
      ^   imports: [FormsModule], // T-WDB Kullanabilmek için FormsModule import etmek gerekiyor. Form kontrollerini yönetmek için kullanılır. 
      ^   template:`<input type="text" [(ngModel)] = "name"><h1>{{name}}</h1>`, // Two-Way Data Binding
      ^   styleUrl: './databinding.component.scss'
      ^   }
      ^ )
      ^ export class DatabindingComponent 
      ^ {
      ^  name : string = ""; 
      ^ }
*/

//* ATTRIBUTE BINDING EXAMPLE

/*
      ~ @Component(
      ~   {
      ~   selector: 'app-databinding',
      ~   imports: [],
      ~   template:`<button [disabled]="disabled">Tıkla</button>`, // Attribute Binding, Property Bindinge benzer
      ~   styleUrl: './databinding.component.scss'
      ~   }
      ~ )
      ~ export class DatabindingComponent 
      ~ {
      ~   disabled : boolean = true;// Attribute Değeri
      ~ }
*/

//* STYLE AND CLASS BINDING EXAMPLE


       @Component(
         {
         selector: 'app-databinding',
         imports: [],
         template:`<button [style.background-color]= "bgColor">Tıkla</button>`, // Style Binding
         styleUrl: './databinding.component.scss'
         }
       )
       export class DatabindingComponent 
       {
         bgColor : string = "green"; // Style Binding Değeri
       }
