import { Component } from '@angular/core';

/*
  *Gelişmiş Component Yapısı

  ' ng-content Nedir ?
  + ng-content, parent component'tan child component'e selector üzerinden veri aktarımı yapmamızı sağlayan bir özelliktir.
  + ng-content'e select="" özelliğini vererek birden fazla ng-content kullanabiliriz. Örnek :
  + <ng-content select="p"></ng-content> şeklinde kullanabiliriz.
  + Bu durumda sadece p tag'leri parent component'tan child component'e aktarılır.

  'ng-container Nedir ?
  + ng-container, html elementleri oluşturmak için kullanılan bir yapıdır. Lakin, DOM nesnelerinde veya HTML elementlerinde görünmez.
  + Yani, ng-container kullanarak oluşturduğumuz elementler DOM'da görünmez. Bu nedenle, ng-container kullanarak oluşturduğumuz elementler sadece Angular tarafından işlenir.
  + Mesela *ngFor direktifini kullandığımız yerde atıyorum "available" diye bir özellik var ve bu özellik false ise ng-container kullanarak bu elementi DOM'da görünmez yapabiliriz. Bu işlem bize temiz bir çıktı sağlar.
  + Örnek : <ng-container *ngIf="available"> </ng-container> şeklinde kullanabiliriz.

  'ng-template Nedir ?
  + ng-template, aşağı yukarı ng-container ile benzer bir yapıdır. İkisinin tek farkı, ng-template render edilebilmesi için çağırılması gerekmektedir. Aksi halde kendisi de içeriği de DOM'da görünmez. *ngIf gibi durumlarda kullanabiliriz.
  * Örnek : <ng-template #template> </ng-template> şeklinde kullanabiliriz. Bu durumda template'i çağırmadığımız sürece DOM'da görünmez.
  + ng-template'i çağırmak için *ngIf, *ngFor gibi direktifleri kullanabiliriz.
  * Örnek : <ng-container *ngTemplateOutlet="template"></ng-container> şeklinde kullanabiliriz.

  ! # -> TemplateVariable

  'ngTemplateOutlet Direktifi Nedir ?
  + ngTemplateOutlet, ng-template'i çağırmak için kullanılan bir direktiftir. Bu direktif ile ng-template'i çağırabiliriz. Bu direktif ile ng-template'i çağırdığımızda, ng-template'in içeriği DOM'da görünür.

  'ngTemplateOutletContext Nedir ?
  + ngTemplateOutlet ile içeriği gönderirken yanında ekstra parametresel değer de göndermemize yarayan direktiftir.

  ' $implicit Nedir ?
  + $implicit, ngTemplateOutletContext ile gönderdiğimiz parametrelerin içeriğini almak için kullanılan bir yapıdır. Bu yapı ile ng-template'in içeriğini alabiliriz. Bu yapı ile ng-template'in içeriğini alırken, $implicit ile gönderdiğimiz parametrelerin içeriğini alabiliriz. Aynı zamanda da karşılığı olmayan ngTemplateOutletContext verilerine default değer atayabilir.

  ' ViewChild Nedir ?
  + ViewChild, parent component'tan child component'e veri aktarımı yapmamızı sağlayan bir yapıdır. Bu yapı ile parent component'tan child component'e veri aktarabiliriz. Bu yapı ile parent component'tan child component'e veri aktarırken, child component'in içeriğini alabiliriz. İlgili öğenin sadece ilk nesnesini referans eder.

  'ViewChildren Nedir ?
  + ViewChildren, viewChild'dan farklı olarak verilen öğenin tümünü queryList olarak elde etmemizi sağlayan bir decorator'dür. Static parameteresi olmadığı için ngOnInit içerisinde çalıştırılamaz.

  'Renderer2 Nedir ?
  + HTML elementlerini manipüle etmek için kullanılan bir sınıftır. (jQuerry gibi)
  + Renderer2, özellikle Angular uygulamalarının platformlar arasında taşınabilir olmasını sağlayan bir sınıftır.

  'ContentChild & ContentChildren Nedir ?
  + ViewChild ve ViewChildren decorator'leri ile aşağı yukarı aynı mantıktır. Tek farkı ise ng-Content içerisindeki herhangi bir nesneyi 'child' component class'ında referans etmek için kullandığımız decorator'lerdir.

*/


@Component({
  selector: 'app-advanced-components',
  imports: [],
  templateUrl: './advanced-components.component.html',
  styleUrl: './advanced-components.component.scss'
})
export class AdvancedComponentsComponent {

}
