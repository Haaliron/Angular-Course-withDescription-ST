import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

//* COMPONENT LIFE CYCLE HOOK = Bir Component'in yaşam sürecinde uygun noktalardaki tepkilerini/reflekslerini ifade eden bir kavramdır.

/*
  ~ constructor -> ngOnChanges -> ngOnInit -> ngDoCheck -> ngAfterContentInit -> ngAfterContentChecked -> ngAfterViewInit ->
  ~ ngAfterViewChecked -> ngOnDestroy 

  ^ ngOnChanges -> Component'in Input değişkenleri selector referansı üzerinden değiştiği durumlarda tetiklenir.
  ^ OnChanges interface'i ile uygulanabilir.


    !@Component
    !(
    !  {
    !  selector: 'app-component-life-cycle',
    !  imports: [],
    !  templateUrl: './component-life-cycle.component.html',
    !  styleUrl: './component-life-cycle.component.scss'
    !  }
    !)
     export class ComponentLifeCycleComponent implements OnChanges //^ onChanges interface'i implement edilir.
    !{
    !  @Input() data: string;
    !
       ngOnChanges(changes: SimpleChanges): void //^ interface'in event'i implement edilir.
    !  {
    !    console.log("ngOnChanges");
    !  }
    !  
    !}

  ^ ngOnInit -> Component ilk kez oluşturulduğu zaman tetiklenir. OnInit Interface'i ile uygulanabilir.

    ! @Component
    ! (
    !   {
    !   selector: 'app-component-life-cycle',
    !   imports: [],
    !   templateUrl: './component-life-cycle.component.html',
    !   styleUrl: './component-life-cycle.component.scss'
    !   }
    ! )
      export class ComponentLifeCycleComponent implements OnInit //^ OnInit interface'i implement edilir.
    ! {
        ngOnInit(): void //^ Interface'in event'i implement edilir.
    !   {
    !     console.log("ngOnInit");
    !   }
    ! }

  ^ ngDoCheck -> Angular, component'in güncellenmesi durumunda sık sık bu metodu tetiklemektedir. DoCheck interface'i ileuygulanabilir.

    ! @Component
    ! (
    !   {
    !   selector: 'app-component-life-cycle',
    !   imports: [FormModule],
    !   //templateUrl: './component-life-cycle.component.html',
    \   template: `<input type="text" [(NgModel)] ="data">`, //^Input her değiştiği zaman ngDoCheck Tetiklenmiş olucak.
    !
    !   styleUrl: './component-life-cycle.component.scss'
    !   }
    ! )
    ! export class ComponentLifeCycleComponent implements DoCheck
    ! {
    !   @Input() data: string;
    !   ngDoCheck(): void 
    !   {
    !     console.log("ngDoCheck");
    !   }
    ! }

  ^ ngAfterContentInit -> Component içeriği ilk kez oluşturulduğunda tetiklenir. AfterContentInit interface'i ile uygulanabilir.

    ! @Component
    ! (
    !   {
    !   selector: 'app-component-life-cycle',
    !   imports: [],
    !   //templateUrl: './component-life-cycle.component.html',
    !   template:`<ng-content>burası içeriktir</ng-content>`,
    !   styleUrl: './component-life-cycle.component.scss'
    !   }
    ! )
    ! export class ComponentLifeCycleComponent implements AfterContentInit
    ! {
    !   ngAfterContentInit(): void 
    !   {
    !     console.log("ngAfterContentInit");
    !   }
    ! }

  ^ ngAfterContentChecked -> Component'in içeriği güncellendiğinde tetiklenir. AfterContentChecked interface'i ile uygulanabilir. ngDoCheck'in aksine sadece içeriğin değişikliğini kontrol eder.
  
    ! @Component
    ! (
    !   {
    !   selector: 'app-component-life-cycle',
    !   imports: [],
    !   templateUrl: './component-life-cycle.component.html',
    !   styleUrl: './component-life-cycle.component.scss'
    !   }
    ! )
    ! export class ComponentLifeCycleComponent implements AfterContentChecked
    ! {
    !   ngAfterContentChecked(): void 
    !   {
    !     console.log("ngAfterContentChecked");
    !   }
    ! }

  ^ ngAfterViewInit -> Component'in view'i (template'i) ilk kez oluşturulduğunda tetiklenir. AfterViewInit interface'i ile uygulanabilir.

    ! @Component
    ! (
    !   {
    !   selector: 'app-component-life-cycle',
    !   imports: [],
    !   templateUrl: './component-life-cycle.component.html',
    !   styleUrl: './component-life-cycle.component.scss'
    !   }
    ! )
    ! export class ComponentLifeCycleComponent implements AfterViewInit
    ! {
    !   ngAfterViewInit(): void 
    !   {
    !     console.log("ngAfterViewInit");
    !   } 
    ! }

    ^ ngAfterViewChecked -> Component'in view'i (template'i) güncellendiğinde tetiklenir. AfterViewChecked interface'i ile uygulanabilir.

    ! @Component
    ! (
    !   {
    !   selector: 'app-component-life-cycle',
    !   imports: [],
    !   templateUrl: './component-life-cycle.component.html',
    !   styleUrl: './component-life-cycle.component.scss'
    !   }
    ! )
    ! export class ComponentLifeCycleComponent implements AfterViewChecked
    ! {
    !   ngAfterViewChecked(): void 
    !   {
    !     console.log("ngAfterViewChecked");
    !   } 
    ! }

  ^ ngOnDestroy -> Component'in kaldırılması / yönlendirilmesi / silinmesi / imhası durumunda tetiklenir. OnDestroy interface'i ile uygulanabilir.

    ! @Component
    ! (
    !   {
    !   selector: 'app-component-life-cycle',
    !   imports: [],
    !   templateUrl: './component-life-cycle.component.html',
    !   styleUrl: './component-life-cycle.component.scss'
    !   }
    ! )
    ! export class ComponentLifeCycleComponent implements OnDestroy
    ! {
    !   ngOnDestroy(): void 
    !   {
    !     console.log("ngOnDestroy");
    !   } 
    ! }

*/


@Component
(
  {
  selector: 'app-component-life-cycle',
  imports: [],
  templateUrl: './component-life-cycle.component.html',
  styleUrl: './component-life-cycle.component.scss'
  }
)
export class ComponentLifeCycleComponent
{
 
}