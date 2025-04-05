import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/*
  * Model Driven Forms Component Class'ında formun yapısının nesnel olarak tanımlandığı form yapısıdır.
  * Model Driven Forms, Angular'da Reactive Forms olarak da bilinir.
  * Yani form yapısında kullanılan FormGroup,FormArray, FormControl gibi tüm nesneleri kendimizin oluşturup konfigüre ettiği bir form yapısıdır.
  * 
  * MDF' de kullanılan temel direktifler 
  * formGroup -> Formun kurulmasını sağlayan temel direktiftir. Form elemanlarının component class'ındaki model ile senkronize olmasını sağlar.
  * formControlName -> FormGroup nesnesi içerisindeki herhangi bir FormControl'ü form elamanına bağlamak ve senkronizasyonu sağlamak için kullanılır.
  '
  'Model-Driven Forms yaklaşımıyla form oluşturmak için öncelikle gerekli form direktifleri ve yapılan barındıran ReactiveFormsModule isimli modülü uygulamada ilgili modüle import ediniz.
  'Ardından oluşturulacak formun öncelikle modelini oluşturunuz ve gerekli FormControlleri tanımlayınız. Bunun için FormBuilder nesnesinden istifade edebilirsiniz.

  ! FormBuilder, Angular'da Reactive Forms oluşturmak için kullanılan bir yardımcı sınıftır. FormBuilder, form gruplarını ve form denetimlerini kolayca oluşturmanıza yardımcı olur.
  ! FormBuilder, ReactiveFormsModule modülünün bir parçasıdır ve Angular uygulamanızda form oluşturma işlemlerini daha basit hale getirir.
  ! FormBuilder, form gruplarını ve form denetimlerini oluşturmak için çeşitli yöntemler sunar. Örneğin, form grubu oluşturmak için group() yöntemini kullanabilirsiniz.
  ! Form denetimi oluşturmak için ise control() yöntemini kullanabilirsiniz.


*/ 
@Component
(
  {
  selector: 'app-model-driven-forms',
  imports: [ReactiveFormsModule], // MDF kullanabilmek için ReactiveFormsModule'ü import edilir.
  //templateUrl: './model-driven-forms.component.html',
  template: `
  <form [formGroup]="frm" (ngSubmit)="onSubmit(frm.value)">
    <input type="text" placeholder="Name" formControlName="name"><br>
    <input type="text" placeholder="Surname" formControlName="surname"><br>
    <input type="email" placeholder="Email" formControlName="email"><br>
    <input type="tel" placeholder="Tel" formControlName="tel"><br> 
    <div formGroupName="formAddress"> -> formGroupName ile form içinde form yönetimi yapılabilir.
      <input type="text" placeholder="Address" formControlName="address"><br>
    </div>
    <button>Send</button>
  </form>
<br>
  `,
  styleUrl: './model-driven-forms.component.scss'
})
export class ModelDrivenFormsComponent 
{
  frm:FormGroup;
  constructor (private formBuilder:FormBuilder)
  {
    this.frm = this.formBuilder.group
    (
      {
        name: ['Ahmet'], //* Default veriler vermek için kullanılır.
        //name: [''], // Default veri vermek istemiyorsak boş bırakabiliriz.
        surname: ['Demir',Validators.required], // FormControl'e validator eklemek için kullanılır.
        //surname: ['Demir',Validators.required,Validators.minLength(3)], // Birden fazla validator eklemek için virgül ile ayırabiliriz.
        email: ['addw@gmail.com'],
        tel: ['555 555 55 55'],
        formAddress: this.formBuilder.group
        ({
          address: ['İstanbul']
        })
      }
    );
  }

  onSubmit(data:any)
  {
    console.log(data);
  }
}
