import { Component } from '@angular/core';

@Component(
  {

  selector: 'app-directives',
  imports: [],
  //templateUrl: './directives.component.html',
  template: `<div>...</div>`, //* template: `<div Directive Buraya Yazılır ! >...</div>`,
  styleUrl: './directives.component.scss'

  })
export class DirectivesComponent 
{

}

// Directive'ler Hazır ve Custom olarak kullanılarbilirler

//* Hazır Directive'ler ;
/*
  ^ *ngFor = Listeyi Döngüye Sokar. Örnek :

  !   @Component(
  !   {
  ! 
  !   selector: 'app-directives',
  !   imports: [],
      template:`<div *ngFor = "let letter of letters; index as i"> {{letter}} - {{i}} </div>`,
  ?                                        index as i ile dönen elemanın indexini de alıp i değişkenine atayabiliyoruz.
  ~                                        index = dönen elemanın indexi
  ~                                        first = dönen ilk eleman mı ?
  ~                                        last = dönen son eleman mı ?
  ~                                        even = dönen eleman çift mi ?
  ~                                        odd = dönen elemna tek mi ?
  !   styleUrl: './directives.component.scss'
  ! 
  !   })
  ! export class DirectivesComponent 
  ! {
      letters : string[] = ["A","B","C","D","E"]
  ! }

  ^ *ngIf = Koddaki if else ile aynı mantıkta çalışır.

  !   @Component(
  !   {
  ! 
  !   selector: 'app-directives',
  !   imports: [],
      template:`<div *ngIf = "visible; else elseMessage">If Message</div>
               <ng-template #elseMessage> Else Message</ng-template>`,
  !   styleUrl: './directives.component.scss'
  ! 
  !   })
  ! export class DirectivesComponent 
  ! {
  !
  ! }

  ^ *ngSwitch = Koddaki switch-case ile aynı mantıkta çalışır.

  !   @Component(
  !   {
  ! 
  !   selector: 'app-directives',
  !   imports: [],
  !   template:`
              <div[ngSwitch] = "sayi">
                <div *ngSwitchCase = "1">Sayı 1</div>
                <div *ngSwitchCase = "2">Sayı 2</div>
                <div *ngSwitchDefault>Hiçbiri</div>
              </div>  
                `,
  !   styleUrl: './directives.component.scss'
  !   })
  ! export class DirectivesComponent 
  ! {
  !   sayi : number = 1;
  ! }

  ^ [ngClass] = Etiketlerin class değerlerini dinamik olarak yönetebilmemizi sağlar.

  !   @Component(
  !   {
  ! 
  !   selector: 'app-directives',
  !   imports: [],
      template:`<div [ngClass]="cl">...</div>  `,
  !   //styleUrl: './directives.component.scss'
      styles : [".myClass{background-color:red;}"]
  !   })
  ! export class DirectivesComponent 
  ! {
      cl : string = "myClass"
  ! }

  ^ [ngStyle] = Etiketlerin style değerlerini dinamik olarak yönetebilmemizi sağlar.

  !   @Component(
  !   {
  ! 
  !   selector: 'app-directives',
  !   imports: [],
      template:`<div [ngStyle]="style">...</div>  `,
  !   styleUrl: './directives.component.scss'
  !   })
  ! export class DirectivesComponent 
  ! {
  !   style: any = 
  !   {
        'background-color' : 'red',
        'color' : 'white',
        'font-size' : '12px'
  !   }
  ! }

  ^ [(ngModel)] = Two - Way Data Data Binding sağlar.
  ^ NgNonBindable = Interpolation'u geçersiz kılar.
*/