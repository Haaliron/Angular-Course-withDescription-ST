import { Component, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/*
* Structural Directive HTML nesnesini ve DOM yapısını fiziksel olarak manipüle ederek (değiştirerek) sayfa üzerinde
* değişiklikler yapmamızı sağlayan directive türüdür.
* 
* Structural Directiveler "*" karakteriyle çağırılır.
* 
* Structural Directiveler'de TemplateRef ve ViewContainerRef olmak üzere iki modül ile karşılaşılmaktadır.
* 
* Structural Directive'ler kendi içleride setter propertyler üzerinden davranışlarını belirlerler.
* Yani bu directive kullanıldığı zaman bir property alırlar mesela <div *appCustomIf="true">...</div> gibi
~ TemplateRef, Directive'in kullandığı template'i ifade eder.
~ ViewContainerRef ise Angular'da bir template'in içeriğini içeren container'ın referansıdır.

? TemplateRef = <ng-template> içeriğini temsil eder ve şablonun programatik olarak kullanılmasını sağlar.
? viewContainerRef = Görünümlerin eklenip kaldırılabileceği bir konteyneri temsil eder ve dinamik içerik yönetimi için kullanılır.
*/

//* IF ŞARTI İÇİN CUSTOM STRUCTURAL DIRECTIVE
/*
~ @Directive(
~   {
~     selector: '[customIf]',
~   }
~ )
~ export class StructuralDirective 
~ {
~ 
\   constructor(private templateRef: TemplateRef<any>, private viewContainerRef:ViewContainerRef) //; Structural Directive Modülleri
~   {
~ 
~   }
~ 
\   //^ Verilen parametreyi yakalayabilmek için set property'si
\  @Input() set customIf(value : boolean) //! Buradaki set property'nin ismi selector ile aynı olmak zorundadır !
\  //* Input decorator'u ile işaretlenerek dışarıdan bir değer alınacağı da bildirilmiş oluyor.
~   {
~     if(value)
~     {
~       this.viewContainerRef.createEmbeddedView(this.templateRef);
\       //^ viewContainerRef ile createEmbeddedView çağırılır bu fonksiyonda seçilen nesnenin görünürlüğünü kontrol eder.
~     }
~     else
~     {
~       this.viewContainerRef.clear();
\       //^ viewContainerRef'in içeriğini temizler.
~     }
~   }
~ 
~ }
*/
//* ITERASYONEL (TEKRARLAMALI) CUSTOM DIRECTIVE

/*
  ? @Directive(
  ?   {
  ?     selector: '[customFor]',
  ?   }
  ? )
  ? export class StructuralDirective 
  ? {
  ? 
  \    constructor(private templateRef: TemplateRef<any>, private viewContainerRef:ViewContainerRef) //; Structural Directive Modülleri
  ?   {}
  ? 
  ?   @Input() set customFor(value : number)
  ?   {
  ?    for(let i = 0; i<value; i++)
  ?      {
  \        //this.viewContainerRef.createEmbeddedView(this.templateRef); //^ createEmbeddedView ile nesneyi verilen value kadar tekrar oluştur.
  \          this.viewContainerRef.createEmbeddedView(this.templateRef,{$implicit : `{_i}`}) //^ Değerleri otomatik karşılaştırmak için
  \                                                                                        //^ implicit operatörü kullanılır.
  ?      }
  ?   }
  ? }
  \          //; Örnek kullanım
  ?           @Component(
  ?            {
  ?              selector: 'app-component',
  ?              template: `
  ?              <ul>
  \                <li *customFor ="5; let i">Halim {{i}}</li> //^ Verilen indexi gösterir (index)
  ?              </ul>
  ?              `
  ?            }
  ?          )
  ?          export class ComponentClass 
  ?          {
  ? 
  ?          }
*/