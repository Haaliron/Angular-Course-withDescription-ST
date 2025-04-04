import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

/*
^Custom directiveler ng g d veya directive folder/name şeklinde oluşturulur.

*/


@Directive( //* Bir directive'in directive gibi davranabilmesi için @Directive decoratoru ile bu şekilde işaretlenmelidir.
  {
    selector: '[appCustomDirective]' //; Uygulama seviyesinde directive'i kullanmamızı sağlayan referanstır.
    //? Selector köşeli parantezler "[appCustomDirective]" içindeyse Attribute(Özellik) ,
    //* <div appCustomDirective>...</div>
    //~ önünde nokta ".appCustomDirective" veya hiçbir şey yoksa "appCustomDirective" Class(Sınıf) özelliği belirtir. 
    //* <div class="appCustomDirective">...</div> 

  })
export class CustomDirectiveDirective 
{
  constructor
  (
    private referedElement: ElementRef //? Bu Directive ile işaretlenmiş HTML nesnesini elde etme parametresi
  ) 

  {
    console.log("ctor");
    referedElement.nativeElement.style.backgroundColor = "red"; //; Bu seçili elementin arkaplanını kırmızı yapar.
  }

  @HostListener("click") //* HostListener Event Bağlamaya Yarar. Biz burda Click Eventi için kullandık.
  onClick() 
  {
    const color = this.isColor

    this.isColor = color == "black" ? "green" : "black"
  }

  @HostBinding("style.color") //* HostBinding Attribute Bağlamaya Yarar. Biz burda seçili elemntin yazı rengini değiştiridik.
  isColor : string = "black";
}