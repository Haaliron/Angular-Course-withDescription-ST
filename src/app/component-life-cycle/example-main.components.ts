import { Component } from '@angular/core';
import { ComponentLifeCycleComponent } from "./component-life-cycle.component";

//* ngOnChanges Example

/*
   ! @Component
   ! (
   !   {
   !   selector: 'app-ExampleMain',
   !   template:`
   !   <app-component-life-cycle data="merhaba"></app-component-life-cycle>
   !   `,
   !   styles:"",
   !   imports: [ComponentLifeCycleComponent]
   !   }
   ! )
   ! export class ExampleMainComponent
   ! {
   ! 
   ! }
*/

//* ngOnInit Example

@Component
(
  {
  selector: 'app-ExampleMain',
  template:`
  <app-component-life-cycle data="merhaba"></app-component-life-cycle>
  `,
  styles:"",
  imports: [ComponentLifeCycleComponent]
  }
)
export class ExampleMainComponent
{

}