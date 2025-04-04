import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
/*
  * Template-Driven Form, formdaki tüm davranışların ve validasyonların template üzerinde directive'ler ve attribute'lar ile kullanılarak belirlendiği bir yaklaşımdır.

  * Template-Driven Forms yapılanmasında tüm işlemler template üzerinde gerçekleştirileceği için component class'ında çok az kodlama gerektirmektedir.

  ' TDF'de kullanılan temel 2 directive vardır:
  * NgForm: Form'u temsil eder. Form'un genel özelliklerini ve validasyonunu yönetir. 
  * NgModel: Form elemanlarını temsil eder. Form elemanlarının özelliklerini ve validasyonunu yönetir.
  * Bu directive'ler sayesinde Template-Driven Forms yaklaşımıyla geliştirilen formlar hızlı ve basit bir şekilde oluşturulabilir.
  * Bu yaklaşımla formlar oluşturmak için ilgili component'e "FormsModule" modülü import edilmelidir.
  
  + (Validasyon, kullanıcıdan alınan bir verinin doğrulama işlemine denir.)
*/
@Component
(
  {
  selector: 'app-template-driven-forms',
  imports: [FormsModule], //^ 1- FormsModule import edilmelidir.
  //templateUrl: './template-driven-forms.component.html',
  template: 
  `
  <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm.value)"> //' 2- 'ngForm' directive'i ile form işaretlenir.
    <input type="text" name="name" required #name="ngModel" placeholder="Name" ngModel/>  <br/>//; 3- Formda kullanılacak kontroller ngModel ile işaretlenir.
    <input type="text" name="surname" required #surname="ngModel" placeholder="Surname" ngModel />//; 3- " " " " " "
    <button type="submit" [disabled]="myForm.invalid">Submit</button> //~ 4- Form'un submit butonu oluşturulur. Form geçerli değilse buton devre dışı bırakılır.
  </form>
  `,
  styleUrl: './template-driven-forms.component.scss'
  }
)
export class TemplateDrivenFormsComponent implements OnInit
{
  @ViewChild('myForm',{static : true}) myForm: NgForm; //^ 5- Form'u temsil eden static bir değişken tanımlanır.
  ngOnInit(): void 
  {
    //*ngForm Directive Detayları:
    console.log(this.myForm);//^ Form'u temsil eden değişken.
    console.log(this.myForm.value);//^ Formun verilerini getirir.
    console.log(this.myForm.valid);//^ Formun geçerli olup olmadığını kontrol eder. true/false.
    console.log(this.myForm.touched);//^ Formda en az bir alana değer girilip girilmediğini kontrol eder. true/false.
    console.log(this.myForm.submitted);//^ Formun submit edilip edilmediğini kontrol eder. true/false.

    //?FormControl Detayları:
    //<input type="text" name="name" #templateRefAdı="ngModel" placeholder="Name" ngModel/> //^ Template referans ile işaretlenip ngModel ile bağlanması gerekir aksi takdirde çalışmaz.
    //* value = İlgili kontrolün değerini döndürür.
    //* touched = İlgili kontrolün değerinin değiştirilip değiştirilmediğini kontrol eder.
    //* valid = İlgili kontrolün geçerli olup olmadığını kontrol eder. true/false.
    //* invalid = İlgili kontrolün geçersiz olup olmadığını kontrol eder. true/false. 

  }
  onSubmit(data: { name: string , surname: string }) //* 6- Form doldurulduğunda ve submit butonuna basıldığında component clas'a verilerin gönderilebilmesi için ngSubmit, eventi tetiklemesi için de bu fonksiyon tanımlanır.
  {
    console.log(data.name);
    console.log(data.surname);
  }
}
