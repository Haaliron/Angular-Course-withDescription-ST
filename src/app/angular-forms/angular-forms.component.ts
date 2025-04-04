import { Component } from '@angular/core';

/*
  * Angular Forms kullanıcılardan veri alabilmek yahut kullanıcılarla etkileşime girebilmek için kullanılan yapılardır.   
  ^ Template-Driven ve Model-Driven/Reactive Forms olmak üzere iki yaklaşımla kullanılabilmektedir. 

  ! Template-Driven Forms Yaklaşımı
  ! - Angular Forms oluşturmanın kolay yoludur.
  ! - Form elemanlarının her birini 'ngModel' direktifi ile işaretleyerek çalışma sergilemektedir.
  \ <form #frm="ngForm">
  \    <select name = "job" ngModel>...</select> 
  \ </form>
  ! - Formun tasarımını ve yapılandırmasını tamamen template üzerinden gerçekleştirir.

  ? Model-Driven Forms / Reactive Forms Yaklaşımı
  ? - Template-Driven Formlara nazaran daha karmaşık form işlemleri için uygun olan yaklaşımdır.
  ? - Bu yaklaşımda formun temel mantığı component üzerinde bir nesne/object olarak tanımlanır ve bu nesne HTML'de ki ilgili form   etiketlerine bind edilir.
  ? - Model-Driven Form'lar bir yandan da Reactive Form olarak adlandırılmaktadır. Çünkü, form elemanları ve bu form elemanlarındaki verilerin değişiklik durumları ilgili nesne tarafından reaktif (dinamik) bir şekilde takip edilmektedir.

  ?   @Component
  ? (
  ?   {
  ?   selector: 'app-angular-forms',
  ?   imports: [],
  ?   //templateUrl: './angular-forms.component.html',
  ?   template: `
  ?     <form [formGroup]= "frm">
  ?       <input type="text" formControlName="name" required>
  ?       <input type="text" formControlName="surname" required>
  ?       <select formControlName="job">
  ?         <option value="">Seçiniz</option>
  ?         <option value="developer">Developer</option>
  ?       </select>
  ?     </form>
  ?   `, 
  ?   styleUrl: './angular-forms.component.scss'  
  ?   }
  ? )
  ? export class AngularFormsComponent implements OnInit
  ? {
  ?   frm: FormGroup;
  ?   ngOnInit(): void 
  ?   {
  ?     this.frm = new FormGroup
  ?     (
  ?       {
  ?         name: new FormControl(),
  ?         surname: new FormControl(),
  ?         job: new FormControl()
  ?       }
  ?     );
  ?   }
  ? }

  ' Bir Angular Form yapısında, Template-Driven ve Model-Driven Form'larının ortak dört ana yapıtaşı vardır. Bunlar ;
  
  ' - FormGroup -> Bir form içerisinde bulunan bir grup kontrolü temsil eder. Bir başka deyişle formun kendisini temsil eder. İçerisinde FormControl nesnelerini barındırır. 
  ' - FormControl -> Form içerisinde bulunan, kullanıcıdan veri almamızı sağlayacak olan tek bir kontrolü temsil eder.
  ' - FormArray -> Form içerisinde dinamik olarak oluşturulan kontrolleri temsil eden dizisel nesnelerdir.
  ' - FormBuilder -> FormGroup, FormControl ve FormArray nesnelerini oluşturmamızı kolaylaştıracak olan bir servistir. İçerisindeki hazır fonksiyonlar sayesinde formu hızlıca üretebilmemizi ve konfigüre etmemizi sağlar.

  + Template-Driven Forms ve Model-Driven Forms Farklılıkları
  + - MDF verileri bir veri modeli ile yönetirken TDF ise verileri HTML şablonlarına bağlı olarak yönetir.
  + - MDF bir formdaki tüm kontrolleri doğrulama kurallarına tabi tutarken TDF ise ngModel direktifi ile işaretlenmiş olan kontrollerde doğrulama gerçekleştirir.
  + - MDF kontrol bağımsızlığı sağlarken TDF kontrol bağımsızlığı sağlayamaz. Yani MDF dinamik şekilde kullanılabilir.
  + - MDF test edilebilirlik açısından daha iyi bir strateji sunmakta ve form doğrulama süreçlerini birbirlerinden ayrı tutmaktadır. Böylece farklı test senaryolarını rahatlıkla ve esnek biçimde gerçekleştirebilir.
  + - MDF daha büyük ve karmaşık form yapıları için daha uygundur ama TDF daha basit ve sade formlarda tercih edilir. Çünkü MDF yaklaşımında template ve kod ayrı ayrıdır ama TDF'de ise her şey template içinde bir bütündür. 
*/

@Component
(
  {
  selector: 'app-angular-forms',
  imports: [],
  templateUrl: './angular-forms.component.html',
  styleUrl: './angular-forms.component.scss'  
  }
)
export class AngularFormsComponent 
{

}
